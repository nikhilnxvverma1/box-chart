import * as express from 'express'
import * as path from 'path'
export class ServerApp {
    
	private _app: express.Application;
    
    constructor() {
        this._app = express();        
    }
    
    public setRoutes() {        //the order matters here
        
        //static resources (we go two levels out because transpile js is one level deep)
        this._app.use('/',express.static(path.join(__dirname,'../../','dist')));

        //all other routes are handled by angular
        this._app.get('/*', this._homePage);//this should be in the end
    }

    public startServer() {
				
        // Templating engine will NOT be used. Everything is handled in angular 2
        // this._app.set('views',path.join(__dirname,'../','views'));
		// this._app.set('view engine','jade');
        
        this._app.listen(3000); //TODO normalize ports by environment variables        
    }

    private _homePage(req: express.Request, res: express.Response) {
		// res.render('index');		
		var pathToIndexPage=path.join(__dirname,'../../','dist/','index.html'); //a static index file from 'dist' folder
		console.log("Server refreshed index file: "+pathToIndexPage);		
        res.sendFile(pathToIndexPage);
    }
}