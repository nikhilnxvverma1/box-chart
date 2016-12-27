
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