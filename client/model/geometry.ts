
export class Point{
	x:number;
	y:number;

	constructor(x:number,y:number){
		this.x=x;
		this.y=y;
	}

	toString():string{
		return "P("+this.x+","+this.y+")";
	}
}

export class LinkedPoint extends Point{
	next:LinkedPoint;
	previous:LinkedPoint;

	toString():string{
		var prevString=this.previous==null?"NULL":"<-";
		var nextString=this.next==null?"NULL":"->";
		return "<-"+super.toString()+"->";
	}
}

export class Rect{
	x:number;
	y:number;
	width:number;
	height:number;

	constructor(x:number,y:number,width:number,height:number){
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;

	}

	toString():string{
		return "R("+this.x+","+this.y+","+this.width+","+this.height+")";
	}
}

export class Circle{
	x:number;
	y:number;
	radius:number;

	constructor(x:number,y:number,radius:number){
		this.x=x;
		this.y=y;
		this.radius=radius;
	}

	toString():string{
		return "C("+this.x+","+this.y+","+this.radius+")";
	}
}

export class LineSegment{
	start:Point;
	end:Point;

	constructor(start:Point,end:Point){
		this.start=start;
		this.end=end;
	}

	toString():string{		
		return "LS: "+this.start+","+this.end+")";
	}
}