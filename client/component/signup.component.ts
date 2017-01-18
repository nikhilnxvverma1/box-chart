import { Component } from '@angular/core';
import { User } from '../model/user-account';

@Component({
  selector: 'signup',
  templateUrl: '../view/signup.component.html',
})
export class SignupComponent  {
	private user:User=new User();
	private confirmPassword:string;

	private createUserAccount(){
		if(this.validPassword()){
			console.log("TODO register user: "+this.user.toString());
		}else{
			console.log("Passwords not valid");
		}
	}

	private validPassword():boolean{
		return this.user.password!=null && this.user.password.length>=8 && this.user.password==this.confirmPassword;
	}
}