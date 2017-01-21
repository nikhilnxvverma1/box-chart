import ojs= require('orientjs');
import winston=require('winston');
import Promise=require('bluebird');
import { LoginAttempt,SignupAttempt } from './shared-codes';

//TODO this should be injectable
/** Backend service for managing data related to user accounts. */
export class AccountService{
	
	constructor(private db:ojs.Db){
	}

	checkAndCreateNewUser(user:any):Promise<SignupAttempt>{
		return this.db.select().from('User').where({
			email: user.email
		}).all().then((records:any[])=>{
			if(records.length>0){
				return SignupAttempt.EmailAlreadyExists;
			}else{
				return this.insertNewUser(user);
			}
		}).catch((error:Error)=>{
			winston.error("Users retrieval : "+error.message);
			return SignupAttempt.InternalServerError;
		})
	}

	private insertNewUser(user:any):Promise<SignupAttempt>{
 		return this.db.insert().into('User').set({
			firstName:user.firstName,
			lastName:user.lastName,
			email:user.email,
			password:user.password,
			gender:user.gender==undefined?'undisclosed':user.gender,
			dateOfBirth:user.dateOfBirth
		}).one().then(()=>{
			return SignupAttempt.Success;
		}).catch((error:Error)=>{
			winston.error("New user insertion: "+error.message);
			return SignupAttempt.InternalServerError;
		})
	}

	authenticateUser(user:any):Promise<LoginAttempt>{
		return this.db.select().from('User').where({
			email: user.username,
			password:user.password
		}).all().then((records:any[])=>{
			if(records.length>0){
				return LoginAttempt.Success;
			}else{
				return LoginAttempt.InvalidUsernameOrPassword;
			}
		}).catch((error:Error)=>{
			winston.error("Users login fail : "+error.message);
			return LoginAttempt.InternalServerError;
		})
	}

}