import { Injectable } from '@angular/core';

@Injectable()
export class TransformService{

	toModelSpace(p:Point):Point{
		return new Point(p.x,p.y);//TODO
	}

	toViewSpace(p:Point):Point{
		return new Point(p.x,p.y);//TODO
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
		return this.x+","+this.y;
	}

}