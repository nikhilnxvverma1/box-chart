import orientjs= require('orientjs');

//server configuration parameters, TODO ideally these should come from environment variables
const serverHost="localhost";
const serverPort=2480;

/**
 *  Connects to database instance for type-diagram.
 *  Creates a database if one doesn't already exist. 
 */
export class DatabaseConnection{
	/** Type of new database. (used while creating database) */
	static readonly dbType="graph";
	/** Storage of a new database. (used while creating database) */
	static readonly dbStorage="plocal";
	
	constructor(
		private username:string,
		private password:string,
		private name:string,
		private afterDbIsConnected:(err:Error,db:orientjs.Db)=>void){

		var server=this.connectToServer();
		this.connectToDatabase(server);
	}

	private connectToServer(){
		//configure database server and location
		var serverConfig = {
			host: serverHost,
			port: serverPort
		};
		return orientjs(serverConfig);
	}

	private connectToDatabase(server:orientjs.Server){
		//find the database on server
		server.list().then((dbs)=>{
			console.log("Searching database "+(this.name)+" amongst "+dbs.length+" databases on server");
			var foundDatabase=false;
			for(let db of dbs){
				//check if database exists
				if(db.name==this.name){
					console.log('Connected to existing database: ' + db.name);
					//initializes and use the db
					var databaseInitialized=server.use(this.name);
					this.afterDbIsConnected(null,databaseInitialized);
					//server can be safely closed, now that we found the database
					server.close();
					foundDatabase=true;
					break;
				}
			}

			//if said database doesn't exist, create a new one
			if(!foundDatabase){
				console.log('Did not find database'+(this.name)+' on server, creating a new one ');
				DatabaseConnection.dbType
				var db = server.create({
					name:    this.name,
					type:    DatabaseConnection.dbType,
					storage: DatabaseConnection.dbStorage
				}).then((db)=>{
					console.log('Created(and connected) a new database: ' + db.name);
					this.afterDbIsConnected(null,db);
					//server can be safely closed, now that we found the database
					server.close();
				});
			}
		});
	}
}
