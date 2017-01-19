import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User,LoginCredential } from '../model/user-account';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import { SignupAttempt,LoginAttempt } from '../shared-codes';

@Injectable()
export class UserService{

	private createUserAccountUrl="api/create-user";
	constructor(private http:Http){}

	/** Creates an account for the supplied model.*/
	createUserAccount(user:User):Observable<SignupAttempt>{
		let body=JSON.stringify(user);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options=new RequestOptions({headers:headers});
		return this.http.post(this.createUserAccountUrl,body,options).map(this.toSignupAttempt);
	}

	toSignupAttempt(response:Response):SignupAttempt{
		//get the code from the response
		let body=response.json();

		switch(body){//response is simply a number
			case 1:return SignupAttempt.Success;
			case 2:return SignupAttempt.EmailAlreadyExists;
			case 3:return SignupAttempt.WeakPassword;
			case 4:return SignupAttempt.NullPassword;
			case 5:return SignupAttempt.InternalServerError;
			default:
				console.log("Invalid code from server");
				return null;//error
				
		}
	}

	/** Attempts to login with the credentials.*/
	login(login:LoginCredential):Observable<LoginAttempt>{
		return null;
	}

	toLoginAttempt(response:Response):LoginAttempt{
		return LoginAttempt.Success;//TODO
	}

}