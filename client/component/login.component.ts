import { Component } from '@angular/core';
import { LoginCredential } from '../model/user-account';
import { UserService } from '../utility/user.service';
import { LoginAttempt } from '../shared-codes';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: '../view/login.component.html',
})
export class LoginComponent {
	private loginForm:LoginCredential=new LoginCredential();

	constructor(
		private userService:UserService,
		private router:Router){}


	attemptLogin(){
		console.log("Attemtping login for "+this.loginForm.toString());
		this.userService.login(this.loginForm).subscribe((attempt:LoginAttempt)=>{
			console.log("Response from server "+attempt);
			if(attempt==LoginAttempt.Success){
				//send directly to dashboard 
				//TODO manage session
				this.router.navigate(["/dashboard"]);
			}else{
				//redirect back to homepage along with the type of error in query params
				let navigationExtras:NavigationExtras={
					queryParams:{'attemptType':'login','attemptCode':attempt},
				};
				this.router.navigate([""],navigationExtras);
			}
		}, (error:Error)=>{
			console.log("Error From Server: "+error.message);
		});
	}
}

