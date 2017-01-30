import ojs= require('orientjs');
import winston=require('winston');
import Promise=require('bluebird');

//TODO this should be injectable
/** Backend service used in ensuring and setting up of database schema. */
export class SchemaService{
	
	constructor(private db:ojs.Db){
	}

	ensureDatabaseSchema(){
		//classes : User, Worksheet
		winston.log("info","Ensuring schema is established");
		//Create schema classes(if they are not present)
		Promise.all([
			this.ensureUser(),
			this.ensureWorksheet()
		]).then((properties:ojs.Property[][])=>{ //dependent properties are added after all classes are created

			if(properties[0]==null){
				winston.log("info","Schema already in place");
				return null;
			}

			winston.log("info","Created the following classes:");
			for(let i=0;i<properties.length;i++){
				winston.log("info",properties[i][0].class.name);
			}

			let user=properties[0][0].class;
			return user.property.create({name:"worksheetList",type:"LinkList",linkedClass:"Worksheet"});
		}).then((property:ojs.Property)=>{
			if(property!=null){
				winston.log("info","Added property '"+property.name+"' on '"+property.class.name+"' class");
			}
		}).catch((error:Error)=>{
			winston.log("error","Error adding dependent properties: "+error.message);
		});
		
		
	}

	private ensureUser():Promise<ojs.Property[]>{
		return this.createClassIfNotPresent("User").then((createdClass:ojs.Class)=>{
			if(createdClass==null){
				winston.log("info","User class already exists");
				return null;
			}
			winston.log("info","Created class : "+createdClass.name);
			winston.log("info","Defining properties for class : "+createdClass.name);
			return createdClass.property.create([
				{name:"firstName",type:"String"},
				{name:"lastName",type:"String"},
				{name:"email",type:"String"},
				{name:"password",type:"String"},
				{name:"gender",type:"String"},
				{name:"dateOfBirth",type:"Date"},
				]);
		}).catch((error:Error)=>{
			winston.log("error","Error occurred while adding properties to 'User' class "+error.message);
		});
	}

	private ensureWorksheet():Promise<ojs.Property[]>{
		return this.createClassIfNotPresent("Worksheet").then((createdClass:ojs.Class)=>{
			if(createdClass==null){
				winston.log("info","Worksheet class already exists");
				return null;
			}
			winston.log("info","Created class : "+createdClass.name);
			winston.log("info","Defining properties for class : "+createdClass.name);
			return createdClass.property.create([
				{name:"title",type:"String"},
				{name:"description",type:"String"},
				{name:"creationDate",type:"Date"},
				{name:"modificationDate",type:"Date"},
				{name:"diagramModel",type:"String"}
				]);
		}).catch((error:Error)=>{
			winston.log("error","Error occurred while adding properties to 'Worksheet' class "+error.message);
		});
	}

	private createClassIfNotPresent(className:string):Promise<ojs.Class>{
		return this.db.class.list(true).
		then((classes:ojs.Class[])=>{
			var found=false;
			winston.log("info","Searching for '"+className+"' class amongst "+classes.length+" classes");
			for(let singleClass of classes){
				if(singleClass.name==className){
					found=true;
					break;
				}
			}
			return found;
		}).then((foundClass:boolean)=>{
			if(!foundClass){
				return this.db.class.create(className,"V");
			}
			return null;
		}).catch((error:Error)=>{
			winston.log("error","Error occurred while ensuring '"+className+"' class "+error.message);
		});
	}
}