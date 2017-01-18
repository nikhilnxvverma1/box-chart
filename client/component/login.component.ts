import { Component } from '@angular/core';
import { LoginCredential } from '../model/user-account';

@Component({
  selector: 'login',
  templateUrl: '../view/login.component.html',
})
export class LoginComponent  {
	private login:LoginCredential=new LoginCredential();

	attemptLogin(){
		console.log("Attemtping login for "+this.login.toString());
	}
}
