import ojs= require('orientjs');
import winston=require('winston');
import Promise=require('bluebird');

/** Intermediate service that talks to the database for all worksheet related queries */
export class WorksheetBackend{

	constructor(private db:ojs.Db){
	}

	/** Gets all the worksheet for a particular user in an array */
	getWorksheetsForUser(user:any):Promise<any[]>{
		return this.db.query('select from Worksheet where @rid in '+
		'(select worksheetList from User where @rid=:userRid)',{
			params:{
				userRid:user['@rid']
			}
		}).all();
	}


	/** 
	 * Removes a worksheet from a user and subsequently hard deletes that worksheet.
	 * Returns true if successfully deleted,
	 * whereas false implies that the worksheet wasn't connected to the user 
	 */ 
	removeWorksheetFromUser(user:any,worksheetRid:string):Promise<boolean>{
		return this.db.query('update '+user['@rid']+' remove worksheetList = '+worksheetRid+' return count').
		all().
		then((updatedRecordsCount:any[])=>{
			//we only check for the one record that belongs to the logged in user
			if(updatedRecordsCount[0]==1){//TODO sure you want to hard delete?
				return this.db.query('delete vertex '+worksheetRid).then((record:any)=>{
					return true;
				})
			}else{
				return false;
			}
		});
	}

	/** 
	 * Creates a worksheet and then associates that with the user.
	 * Returns the promise of a newly created worksheet object.
	 */
	createWorksheetForUser(user:any,title:string,description:string):Promise<any>{
		return this.db.query('insert into worksheet(title,description,creationDate,modificationDate)'+
		 'values(:title,:description,sysdate(),sysdate()) return @this',{
			 params:{
				 title:title,
				 description:description
			 }
		 }).all().
		 then((insertedRecords:any[])=>{
			 let newWorksheet=insertedRecords[0];
			 return this.db.query('update '+user['@rid']+' add worksheetList = :worksheetRid',{
				 params:{
					//  userRid:user['@rid'],// strings give double quotes when being placed in the query
					 worksheetRid:newWorksheet['@rid']//RecordID object translates directly to an unquoted rid string
				 }
			}).all().
			then((updateCount:any)=>{//we nest here to stay in the scope of newWorksheet
				return newWorksheet;
		 	});
		 });
	}
}

export class DashboardPayload{
	//TODO
}