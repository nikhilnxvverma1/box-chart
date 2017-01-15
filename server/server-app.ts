import * as express from 'express'
import * as path from 'path'
import orientjs= require('orientjs');

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

		
		this.app.listen(3000); //TODO normalize ports by environment variables        
	}

    private _homePage(req: express.Request, res: express.Response) {
		// res.render('index');		
		var pathToIndexPage=path.join(__dirname,'../../','dist/','index.html'); //a static index file from 'dist' folder
		console.log("Server refreshed index file: "+pathToIndexPage);		
        res.sendFile(pathToIndexPage);
    }
}