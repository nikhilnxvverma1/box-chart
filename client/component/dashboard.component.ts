import { Component,OnInit } from '@angular/core';
import { Worksheet } from '../model/worksheet';

@Component({
  selector: 'dashboard',
  templateUrl: '../view/dashboard.component.html',
})
export class DashboardComponent implements OnInit {

	private worksheetList:Worksheet[]=[];

	ngOnInit(){
		this.fillWithDummyData();//TODO  this will come from server
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
		console.log("TODO create new worksheet");
	}
}