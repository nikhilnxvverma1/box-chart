import { Component } from '@angular/core';
import { User } from '../model/user-account';
import { UserService } from '../utility/user.service';
import { SignupAttempt } from '../shared-codes';

@Component({
  selector: 'signup',
  templateUrl: '../view/signup.component.html',
})
export class SignupComponent  {
	private user:User=new User();
	private confirmPassword:string;

	constructor(private userService:UserService){}

	private createUserAccount(){
		if(this.validPassword()){
			console.log("registering user: "+this.user.toString());
			this.userService.createUserAccount(this.user).subscribe((attempt:SignupAttempt)=>{
				console.log("Response from server "+attempt);
			}, (error:Error)=>{
				console.log("Error From Server: "+error.message);
			});
		}else{
			console.log("Passwords not valid");
		}
	}

	private validPassword():boolean{
		return this.user.password!=null && this.user.password.length>=8 && this.user.password==this.confirmPassword;
	}
}

