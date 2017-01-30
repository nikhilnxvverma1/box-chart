import express = require('express');
import http = require('http');
import https = require('https');
import fs = require('fs');
import connect = require('connect');
import bodyParser = require("body-parser");
import path = require('path');
import orientjs = require('orientjs');
import winston = require('winston');
import session = require('express-session');
import { SchemaService } from './schema.backend';
import { AccountService,AuthenticationResult } from './account.backend';
import { LoginAttempt,SignupAttempt } from './shared-codes';
import * as statusCode from './status-code';
import { WorksheetBackend } from './worksheet.backend';
import { Access } from './shared-codes';

export class ServerApp {
    
	private app: express.Application;
	private db:orientjs.Db;
	private schemaService:SchemaService;
	private accountService:AccountService;
	private worksheetBackend:WorksheetBackend;
    
	constructor(db:orientjs.Db) {
		this.app = express();
		this.db=db;

		//TODO make these injectable
		this.schemaService=new SchemaService(this.db);
		this.accountService=new AccountService(this.db);
		this.worksheetBackend=new WorksheetBackend(this.db);
	}
    
    public setRoutes() {        //the order matters here

		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({
			extended:false
		}));
		//TODO WARNING: the secret should not be stored in code.(Dev purposes only)
		this.app.use(session({secret:"fd34regafsd3r45qerafw3r4",saveUninitialized:true,resave:false}));
		this.configureAPIRoutes();
		
		//static resources (we go two levels out because transpile js is one level deep)
		// this.app.use('/',express.static(path.join(__dirname,'../../','dist')));
		this.app.use('/', express.static(path.join(__dirname, '../', 'dist')));//for one level

		//all other routes are handled by angular
		this.app.get('/*', this._homePage);//this should be in the end
	}

	private configureAPIRoutes(){

		//create new user
		this.app.post('/api/create-user', (req:express.Request, res:express.Response) => {
			winston.debug("Attempting to create new user");
			this.accountService.checkAndCreateNewUser((<any>req).body).
			then((attempt:SignupAttempt)=>{
				//respond back with an appropriate status code
				jsonHeader(res).status(statusCode.forSignup(attempt)).send(JSON.stringify(attempt));
			});
		});

		//login authentication
		this.app.post('/api/authenticate-user', (req:express.Request, res:express.Response) => {
			winston.debug("Attempting to login user");
			this.accountService.authenticateUser((<any>req).body).
			then((result:AuthenticationResult)=>{
				//if authentic, store the user model in the session
				if(result.attempt==LoginAttempt.Success){
					(<any>req).session.user=result.user;
				}
				//respond back with an appropriate status code
				jsonHeader(res).status(statusCode.forLogin(result.attempt)).send(JSON.stringify(result.attempt));
			});
		});

		//dashboard data
		this.app.get('/api/dashboard', (req:express.Request, res:express.Response) => {
			winston.debug("Accessing dashboard for user in session");
			let loggedInUser=(<any>req).session.user;
			if(!loggedInUser){
				res.status(401).send("User not found");
			}else{
				this.worksheetBackend.getWorksheetsForUser(loggedInUser).then((records:any[])=>{
					jsonHeader(res).status(200).send(JSON.stringify(records));
				});
				
			}
		});

		//account data
		this.app.get('/api/account', (req:express.Request, res:express.Response) => {
			winston.debug("Returning account details for user in session");
			//get user in session
			let loggedInUser=(<any>req).session.user;
			if(!loggedInUser){
				res.status(401).send("User not found");
			}else{
				//send the entire user as a response(this excludes the confidential stuff)
				res.status(200).send(loggedInUser);
			}
		});

		//logout
		this.app.get('/api/logout', (req:express.Request, res:express.Response) => {
			winston.debug("logging out user in session");

			//store user in session to referebce later,
			let loggedInUser=(<any>req).session.user;

			//destroy the session for the current user
			(<any>req).session.destroy();

			//we send a response with a status code back anyway, depending on weather the user was logged in or not
			if(!loggedInUser){
				res.status(422).send("User not found");
			}else{
				//send the entire user as a response(this excludes the confidential stuff)
				res.status(200).send(loggedInUser);
			}
		});

		//create new worksheet and associate with user
		this.app.post('/api/create-worksheet', (req:express.Request, res:express.Response) => {
			winston.debug("Creating new worksheet for logged in user");
			//get user in session
			let loggedInUser=(<any>req).session.user;
			if(!loggedInUser){
				res.status(401).send("User not found");
			}else{
				//get the params for the worksheet and create it for the logged in user
				let title=(<any>req).body.title;
				let description=(<any>req).body.description;
				this.worksheetBackend.createWorksheetForUser(loggedInUser,title,description).
				then((newWorksheet:any)=>{
					jsonHeader(res).status(200).send(newWorksheet);
				}).catch((error:Error)=>{
					winston.error("Error During worksheet creation "+error.message);
					res.status(500).send('Something went wrong while creating worksheet');
				})
			}
		});

		//remove new worksheet and associate with user
		this.app.delete('/api/remove-worksheet', (req:express.Request, res:express.Response) => {//TODO HTTP authorization check
			winston.debug("Removing existing worksheet from logged in user");
			//get user in session
			let loggedInUser=(<any>req).session.user;
			if(!loggedInUser){
				res.status(401).send("User not found");
			}else{
				//get the params for the worksheet and remove it for the logged in user
				let worksheetRid=(<any>req).body.worksheetRid;
				this.worksheetBackend.removeWorksheetFromUser(loggedInUser,worksheetRid).
				then((deleted:boolean)=>{
					jsonHeader(res).status(200).send(JSON.stringify(deleted));
				}).catch((error:Error)=>{
					res.status(500).send('Something went wrong while deleting worksheet');//TODO make these json responses too
				})
			}
		});

		//get the worksheet thats associated with user
		this.app.get('/api/get-worksheet', (req:express.Request, res:express.Response) => {
			winston.debug("Getting existing worksheet from logged in user");
			//get user in session
			let loggedInUser=(<any>req).session.user;
			if(!loggedInUser){
				let loginRequired={
					'access':Access.LoginRequired, 
				}
				jsonHeader(res).status(401).send(JSON.stringify(loginRequired));
			}else{
				//get the url params for the worksheet and get it for the logged in user
				let worksheetRid=req.query['worksheetRid'];
				this.worksheetBackend.getWorksheetForUserIfAuthorized(loggedInUser,worksheetRid).
				then((accessResult:any)=>{
					if(accessResult.access==Access.Granted){
						jsonHeader(res).status(200).send(JSON.stringify(accessResult));
					}else if(accessResult.access=Access.Denied){
						jsonHeader(res).status(403).send(JSON.stringify(accessResult));
					}else{
						jsonHeader(res).status(500).send('Access to worksheet unrecognized');
					}
				}).catch((error:Error)=>{
					jsonHeader(res).status(500).send('Something went wrong while finding worksheet');
				})
			}
		});

		//update the diagram model for a given worksheet (if authorized)
		this.app.post('/api/update-diagram-model', (req:express.Request, res:express.Response) => {
			winston.debug("updating diagram model for worksheet");
			//get user in session
			let loggedInUser=(<any>req).session.user;
			if(!loggedInUser){
				jsonHeader(res).status(401).send(JSON.stringify(false));
			}else{
				//get the url params for the worksheet and get it for the logged in user
				let worksheetRid=(<any>req).body.worksheetRid;
				let diagramModel=(<any>req).body.diagramModel;
				this.worksheetBackend.updateDiagramModelForUserIfAuthorized(loggedInUser,worksheetRid,diagramModel).
				then((accessResult:any)=>{
					if(accessResult.access==Access.Granted){
						jsonHeader(res).status(200).send(JSON.stringify(accessResult.success));
					}else if(accessResult.access=Access.Denied){
						jsonHeader(res).status(403).send(JSON.stringify(false));
					}else{
						jsonHeader(res).status(500).send('Access to worksheet unrecognized');
					}
				}).catch((error:Error)=>{
					jsonHeader(res).status(500).send('Something went wrong while finding worksheet');
				})
			}
		});
	}

    public startServer() {//this method is called after setRoutes()
				
        // Templating engine will NOT be used. Everything is handled in angular 2
        // this._app.set('views',path.join(__dirname,'../','views'));
		// this._app.set('view engine','jade');

		this.schemaService.ensureDatabaseSchema();
		let port=3000;//TODO normalize ports by environment variables        
		if(production){
			var privateKey = fs.readFileSync( '/root/.ssl/typediagram.com.key' );
			var certificate = fs.readFileSync( '/root/.ssl/typediagram_com.crt' );
			let options:https.ServerOptions={
				key:privateKey,
				cert:certificate
			}
			https.createServer(options,this.app).listen(port)
		}else{
			this.app.listen(port); 
		}
	}

    private _homePage(req: express.Request, res: express.Response) {

		let pathToIndexPage:string;
		if(production){
			pathToIndexPage=path.join(__dirname,'../../','dist/','index.html'); //a static index file from 'dist' folder
		}else{
			pathToIndexPage=path.join(__dirname,'../','dist/','index.html'); //only one level (to support vs code debugging tasks)
		}
		winston.log('info',"Server refreshed index file: "+pathToIndexPage);
        res.sendFile(pathToIndexPage);
    }
}

/**
 * Simple method that set the content header to be json. 
 * Returns the same response to allow chaining. 
 */
export function jsonHeader(response:express.Response):express.Response{
	response.setHeader('Content-Type', 'application/json');
	return response;
}

const production=true;//TODO quick and dirty solution to managing in the production environment