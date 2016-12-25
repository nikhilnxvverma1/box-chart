import { Injectable } from '@angular/core';

@Injectable()
export class TransformService{

	toModelSpace(p:Point):Point{
		return new Point(p.x,p.y);//TODO
	}

	lengthInModelSpace(l:number):number{
		return l;//TODO
	}

	toViewSpace(p:Point):Point{
		return new Point(p.x,p.y);//TODO
	}

	lengthInViewSpace(l:number):number{
		return l;//TODO
	}
}

export class Point{
	x:number;
	y:number;

	constructor(_x:number,_y:number){
		this.x=_x;
		this.y=_y;
	}

	toString():string{
		return "("+this.x+","+this.y+")";
	}
}

export class Rect{
	x:number;
	y:number;
	width:number;
	height:number;

	constructor(x:number,y:number;width:number,height:number){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;

	}

	toString():string{
		return "("+this.x+","+this.y+","+this.width+","+this.height+")";
	}
}