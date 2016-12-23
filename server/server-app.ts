import * as express from 'express'
import * as path from 'path'
export class ServerApp {
    
	private _app: express.Application;
    
    constructor() {
        this._app = express();        
    }
    
    public setRoutes() {        
        this._app.get('/', this._homePage);          
    }

    public startServer() {
		
		this._app.use(express.static(path.join(__dirname,'../../','dist')));// we go two levels out because transpile js is one level deep
		
        // Templating engine will NOT be used. All routing is done in angular 2
        // this._app.set('views',path.join(__dirname,'../','views'));
		// this._app.set('view engine','jade');
        
        this._app.listen(3000); //TODO normalize ports by environment variables        
    }

    private _homePage(req: express.Request, res: express.Response) {
		// res.render('index');		
		var pathToIndexPage=path.join(__dirname,'../../','dist/','index.html'); //a static index file
		console.log("path : "+pathToIndexPage);		
        res.sendFile(pathToIndexPage);
    }
}