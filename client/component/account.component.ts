import { Component,OnInit } from '@angular/core';
import { User } from '../model/user-account';
import { UserService } from '../utility/user.service';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'account',
  templateUrl: '../view/account.component.html',
 })
export class AccountComponent implements OnInit{
	private user:User;

	constructor(
		private userService:UserService,
		private router:Router){}

	ngOnInit(){
		this.userService.accountInfo().subscribe((user:User)=>{
			this.user=user;
		},(error:Error)=>{
			console.error("Retrieving account info");//TODO show user friendly message
		});
	}

	saveAccountDetails(){
		console.log("TODO Saving account Details");
	}

	private logout(){
		this.userService.logout().subscribe((user:User)=>{
			this.router.navigate(["/"]);
		},(error:Error)=>{
			console.error("Logging out user");//TODO show some friendly message to user
		})
	}
}
