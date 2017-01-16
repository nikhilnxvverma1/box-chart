import * as express from 'express'
import * as path from 'path'
import orientjs= require('orientjs');
import winston=require('winston');

export class ServerApp {
    
	private app: express.Application;
	private db:orientjs.Db;
    
	constructor(db:orientjs.Db) {
		this.app = express();
		this.db=db;
	}
    
    public setRoutes() {        //the order matters here
        
        //static resources (we go two levels out because transpile js is one level deep)
        this.app.use('/',express.static(path.join(__dirname,'../../','dist')));

        //all other routes are handled by angular
        this.app.get('/*', this._homePage);//this should be in the end
    }

    public startServer() {//this method is called after setRoutes()
				
        // Templating engine will NOT be used. Everything is handled in angular 2
        // this._app.set('views',path.join(__dirname,'../','views'));
		// this._app.set('view engine','jade');

		this.ensureDatabaseSchema();
		this.app.listen(3000); //TODO normalize ports by environment variables        
	}

    private _homePage(req: express.Request, res: express.Response) {
		// res.render('index');		
		var pathToIndexPage=path.join(__dirname,'../../','dist/','index.html'); //a static index file from 'dist' folder
		winston.log('info',"Server refreshed index file: "+pathToIndexPage);
        res.sendFile(pathToIndexPage);
    }

	/** Creates an object oriented database schema in orient db if one doesn't already exist */
	private ensureDatabaseSchema(){
		//classes : User, Worksheet and Diagram Model
		winston.log("info","Ensuring schema is established");
		//Check User class existence
		let p=this.db.class.list(true);
		p.then(function(classes:orientjs.Class[]){
			var found=false;
			winston.log("info","Searching for User class amongst "+classes.length+" classes");
			for(let singleClass of classes){
				if(singleClass.name=="User"){
					found=true;
					break;
				}
			}
			return found;
		}).then((foundClass:boolean)=>{
			if(!foundClass){
				return this.db.class.create("User","V");
			}
			return null;
		}).then((definedClass:orientjs.Class)=>{
			if(definedClass==null){
				winston.log("info","User class already exists");
				return ;
			}
			winston.log("info","Created class : "+definedClass.name);
		}).catch((error:Error)=>{
			winston.log("error","Error occurred while checking User class "+error.message);
		});

	}
}