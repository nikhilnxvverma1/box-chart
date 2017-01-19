import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User,LoginCredential } from '../model/user-account';
import { Http,Headers,RequestOptions,Response } from '@angular/http';

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
		return SignupAttempt.Success;//TODO
	}

	/** Attempts to login with the credentials.*/
	login(login:LoginCredential):Observable<LoginAttempt>{
		return null;
	}

	toLoginAttempt(response:Response):LoginAttempt{
		return LoginAttempt.Success;//TODO
	}

}

/** A mutually shared code between the client and server that identifies the login attempt. */
export enum LoginAttempt{
	Success=1,
	WrongPassword=2,
	EmailDoesNotExist=3
}

/** A mutually shared code between the client and server that identifies the signup attempt. */
export enum SignupAttempt{
	Success=1,
	EmailAlreadyExists=2,
	WeakPassword=3,
	NullPassword=4
}