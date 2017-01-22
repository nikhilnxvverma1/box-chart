import { LoginAttempt,SignupAttempt } from './shared-codes';

export function forLogin(attempt:LoginAttempt):number{
	switch(attempt){
		case LoginAttempt.Success:return 200;
		case LoginAttempt.EmailDoesNotExist:return 422;
		case LoginAttempt.InvalidUsernameOrPassword:return 401;
		case LoginAttempt.InternalServerError:return 500;

		default:return 200;
	}
}

export function forSignup(attempt:SignupAttempt):number{
	switch(attempt){
		case SignupAttempt.Success:return 200;
		case SignupAttempt.EmailAlreadyExists:return 422;
		case SignupAttempt.WeakPassword:return 422;
		case SignupAttempt.NullPassword:return 422;
		case SignupAttempt.InternalServerError:return 500;

		default:return 200;
	}
}