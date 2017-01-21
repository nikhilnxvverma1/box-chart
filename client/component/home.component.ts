import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home',
  templateUrl: '../view/home.component.html',
})
export class HomeComponent implements OnInit{

	attemptType:Observable<string>;
	attemptCode:Observable<number>;

	constructor(private route:ActivatedRoute){}

	ngOnInit(){
		this.attemptType=this.route.queryParams.map((params)=>params['attemptType']||'none');
		this.attemptCode=this.route.queryParams.map((params)=>params['attemptCode']||0);
	}

}
