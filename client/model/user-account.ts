

export class LoginCredential{

	/** Username can also be email */
	username:string;
	/** Must be kept confidential in both frontend and backend */
	password:string;

	toString():string{
		return this.username;
	}
}

export class User{
	firstName:string;
	lastName:string;
	email:string;
	password:string;
	gender:string;
	dateOfBirth:Date;

	toString():string{
		return this.firstName+" "+this.lastName;
	}
}