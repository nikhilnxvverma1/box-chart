import { Component,OnInit } from '@angular/core';
import { User } from '../model/user-account';

@Component({
  selector: 'account',
  templateUrl: '../view/account.component.html',
 })
export class AccountComponent implements OnInit{
	private user:User;

	ngOnInit(){
		this.user=new User();//TODO get from session
		this.user.firstName="Nikhil";
		this.user.lastName="Verma";
		this.user.email="nikhilnxvverma1@gmail.com";
	}

	saveAccountDetails(){
		console.log("TODO Saving account Details");
	}
}
