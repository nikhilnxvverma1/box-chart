import { Component } from '@angular/core';
import { LoginCredential } from '../model/user-account';
import { UserService } from '../utility/user.service';
import { LoginAttempt } from '../shared-codes';

@Component({
  selector: 'login',
  templateUrl: '../view/login.component.html',
})
export class LoginComponent  {
	private loginForm:LoginCredential=new LoginCredential();

	constructor(private userService:UserService){}

	attemptLogin(){
		console.log("Attemtping login for "+this.loginForm.toString());
		this.userService.login(this.loginForm).subscribe((attempt:LoginAttempt)=>{
			console.log("Response from server "+attempt);
		}, (error:Error)=>{
			console.log("Error From Server: "+error.message);
		});
	}
}

