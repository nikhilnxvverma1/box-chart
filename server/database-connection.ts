import orientjs= require('orientjs');
import winston=require('winston');

//server configuration parameters, TODO ideally these should come from environment variables
const serverHost="localhost";
const serverPort=2424;

/**
 *  Connects to database instance for type-diagram.
 *  Creates a database if one doesn't already exist. 
 */
export class DatabaseConnection{
	/** Type of new database. (used while creating database) */
	static readonly dbType="graph";
	/** Storage of a new database. (used while creating database) */
	static readonly dbStorage="plocal";
	/** Reference to the open database server. This is open and should be closed on application shutdown. */
	private server:orientjs.Server;
	
	constructor(
		private username:string,
		private password:string,
		private name:string,
		private afterDbIsConnected:(err:Error,db:orientjs.Db)=>void){

		this.server=this.connectToServer();
		this.connectToDatabase(this.server);
	}

	private connectToServer(){
		//configure database server and location
		var serverConfig = {
			host: serverHost,
			port: serverPort,
			username:this.username,
			password:this.password
		};
		return orientjs(serverConfig);
	}

	private connectToDatabase(server:orientjs.Server){
		//find the database on server
		server.list().bind(this).then((dbs:orientjs.Db[])=>{
			winston.log('info',"Searching database '"+(this.name)+"' amongst "+dbs.length+" databases on server");
			var foundDatabase=false;
			for(let db of dbs){
				//check if database exists
				if(db.name==this.name){
					winston.log('info','Connected to existing database: ' + db.name);
					//initializes and use the db
					var databaseInitialized=server.use({name:this.name,username:this.username,password:this.password});
					databaseInitialized.open().bind(this).then((db:orientjs.Db)=>{
						this.afterDbIsConnected(null,db);
					});
					foundDatabase=true;
					break;
				}
			}

			//if said database doesn't exist, create a new one
			if(!foundDatabase){
				winston.log('info','Did not find database \''+(this.name)+'\' on server, creating a new one ');
				DatabaseConnection.dbType
				var db = server.create({
					name:    this.name,
					type:    DatabaseConnection.dbType,
					storage: DatabaseConnection.dbStorage
				}).then((db)=>{
					winston.log('info','Created(and connected) a new database: ' + db.name);
					this.afterDbIsConnected(null,db);
				});
			}
		});
	}
}
