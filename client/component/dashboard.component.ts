import { Component,OnInit } from '@angular/core';
import { Worksheet } from '../model/worksheet';
import { User } from '../model/user-account';
import { DashboardService } from '../utility/dashboard.service';
import { UserService } from '../utility/user.service';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: '../view/dashboard.component.html',
})
export class DashboardComponent implements OnInit {

	private worksheetList:Worksheet[]=[];

	constructor(
		private dashboardService:DashboardService,
		private userService:UserService,
		private router:Router){}

	ngOnInit(){
		this.dashboardService.worksheetListForLoggedInUser().subscribe((worksheetList:Worksheet[])=>{
			this.worksheetList=worksheetList;
		},(error:Error)=>{
			console.error("Worksheet retrieval: "+error.message);//TODO show some friendly message to user
		})
	}

	fillWithDummyData(){
		let first=new Worksheet();
		first.title="Bubble sort";
		first.description="Functioning of a sorting algorithm";
		this.worksheetList.push(first);

		let second=new Worksheet();
		second.title="Class project";
		second.description="Implementation of class project (discussion related)";
		this.worksheetList.push(second);

		let third=new Worksheet();
		third.title="Binary tree";
		third.description="Different type of traversal techniques in binary trees";
		this.worksheetList.push(third);
	}
	
	private createNewWorksheet(){
		let title=Math.random().toString(36).slice(2);
		let description="made from frontend";
		this.dashboardService.createWorksheet(title,description).subscribe((worksheet:Worksheet)=>{
			this.worksheetList.push(worksheet);
		},(error:Error)=>{
			console.error("Worksheet retrieval: "+error.message);//TODO show some friendly message to user
		})
	}

	private removeWorksheet(worksheet:Worksheet){
		this.dashboardService.removeWorksheet(worksheet).subscribe((deleted:boolean)=>{
			if(deleted){
				let index=this.worksheetList.indexOf(worksheet);
				if(index!=-1){
					this.worksheetList.splice(index,1);
				}else{
					console.error("Worksheet not found in frontend list but did exist in db(and is deleted now)");
				}
			}else{
				console.error("Did not delete worksheet from db. Is it actually associated with the user? ");
			}
		},(error:Error)=>{
			console.error("Worksheet deletion: "+error.message);//TODO show some friendly message to user
		})
	}

	private logout(){
		this.userService.logout().subscribe((user:User)=>{
			this.router.navigate(["/"]);
		},(error:Error)=>{
			console.error("Logging out user");//TODO show some friendly message to user
		})
	}

	private gotoWorksheet(worksheet:Worksheet){
		let navigationExtras: NavigationExtras = {
			queryParams: { 'rid': worksheet.rid },
		};
		// Navigate to the worksheet page with extras
    	this.router.navigate(['worksheet'], navigationExtras);
	}
}