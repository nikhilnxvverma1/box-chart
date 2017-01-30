//IMPORTANT this file is shared between client and server but is duplicated in both places. 
//This is because typescript compiler is separete for both client and server.
//Make sure both the copies are kept in sync at all times

//TODO find a way to make this a common file

/** A mutually shared code between the client and server that identifies the login attempt. */
export enum LoginAttempt{
	Success=1,
	InvalidUsernameOrPassword=2,
	EmailDoesNotExist=3,
	InternalServerError=4
}

/** A mutually shared code between the client and server that identifies the signup attempt. */
export enum SignupAttempt{
	Success=1,
	EmailAlreadyExists=2,
	WeakPassword=3,
	NullPassword=4,
	InternalServerError=5
}

/** Identifies the nature of access when requested for a worksheet */
export enum Access{
	Granted=1,
	Denied=2,
	LoginRequired=3
}