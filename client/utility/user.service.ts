import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User,LoginCredential } from '../model/user-account';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import { SignupAttempt,LoginAttempt } from '../shared-codes';

@Injectable()
export class UserService{

	//TODO move these urls in the shared-codes file
	private static readonly CREATE_USER_ACCOUNT_URL="api/create-user";
	private static readonly AUTHENTICATE_USER_URL="api/authenticate-user";
	private static readonly ACCOUNT_URL="api/account";
	private static readonly LOGOUT_URL="api/logout";
	
	constructor(private http:Http){}

	/** Creates an account for the supplied model.*/
	createUserAccount(user:User):Observable<SignupAttempt>{
		let body=JSON.stringify(user);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options=new RequestOptions({headers:headers});
		return this.http.post(UserService.CREATE_USER_ACCOUNT_URL,body,options).map(this.toSignupAttempt);
	}

	private toSignupAttempt(response:Response):SignupAttempt{
		//get the code from the response
		let body=response.json();

		if(typeof SignupAttempt[body]==='undefined'){
			console.log("Invalid code from server");
			return null;
		}else{
			return body;
		}
	}

	/** Attempts to login with the credentials.*/
	login(login:LoginCredential):Observable<LoginAttempt>{
		let body=JSON.stringify(login);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options=new RequestOptions({headers:headers});
		return this.http.post(UserService.AUTHENTICATE_USER_URL,body,options).map(this.toLoginAttempt);
	}

	private toLoginAttempt(response:Response):LoginAttempt{
		//get the code from the response
		let body:number=response.json();

		if(typeof LoginAttempt[body]==='undefined'){
			console.log("Invalid code from server");
			return null;
		}else{
			return body;
		}
	}

	/** Gets the user object for the logged in user. Will return null(Observable) if the user is not in session. */
	accountInfo():Observable<User>{
		return this.http.get(UserService.ACCOUNT_URL).map(this.toUserObject);
	}

	private toUserObject(response:Response):User{
		let body=response.json();
		let user=new User();
		user.firstName=body['firstName'];
		user.lastName=body['lastName'];
		user.email=body['email'];
		user.gender=body['gender'];
		user.rid=body['@rid'];
		return user;
	}

	logout():Observable<User>{
		return this.http.get(UserService.LOGOUT_URL).map(this.toUserObject);
	}

}