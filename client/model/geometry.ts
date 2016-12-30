import { RadiansToDegrees,DegreesToRadians } from '../utility/common';
import { TrackingPoint,RectTrackingPoint,CircleTrackingPoint,LineSegmentTrackingPoint } from './tracking-point';

/** Generic model for storing 2d coordinates */
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

	/** Finds the distance from another point */
	distance(p:Point):number{
		return Math.sqrt((this.x-p.x) * (this.x-p.x) + (this.y-p.y) * (this.y-p.y)) ;
	}

	/** Finds the angle that gets made b/w the x axis and line segment comprised of this point and another point */
	angleOfSegment(to:Point):number{
		var inDegrees=0;
		if (to.x - this.x == 0) {
			inDegrees = 90;
			if(to.y<this.y){
				inDegrees+=180;
			}
		}else{
			var slope=(to.y-this.y)/(to.x-this.x);
			inDegrees=Math.atan(slope)*RadiansToDegrees;
			//angle is between +90 and -90
			if(to.y>this.y){
				if(to.x>this.x){//first quadrant
					//do nothing
				}else{//second quadrant
					inDegrees+=180;
				}
			}else{
				if(to.x<this.x){//third quadrant
					inDegrees+=180;
				}else{//fourth quadrant
					inDegrees+=360;
				}
			}
		}
		return inDegrees;
	}

	/** Finds the point situated at some distance in a given direction(angle) */
	pointAtLength(angleInDegrees:number, length:number):Point{
		return new Point(
			this.x+length*Math.cos(DegreesToRadians * angleInDegrees),
			this.y+length*Math.sin(DegreesToRadians * angleInDegrees));

	}

}

/** Stores 2D position and holds links to previous and next point in series */
export class LinkedPoint extends Point{
	next:LinkedPoint;
	previous:LinkedPoint;

	toString():string{
		var prevString=this.previous==null?"NULL":"<-";
		var nextString=this.next==null?"NULL":"->";
		return "<-"+super.toString()+"->";
	}
}

/** Filled geometric shapes that usually make 'digramatic elements' implement this interface*/
export interface Geometry{
	/** Checks a point for containment within this geometry */
	contains(p:Point):boolean;
	/** Makes a tracking point specific to this geometry that can be used to get a point on the circumferance of this geometry */
	getTrackingPoint():TrackingPoint;
}

export class Rect implements Geometry{
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

	contains(p:Point):boolean{
		return p.x>=this.x && p.x<=(this.x + this.width) &&
				p.y>=this.y && p.y<=(this.y + this.height);
	}

	getTrackingPoint(){
		return new RectTrackingPoint(this);
	}
}

export class Circle implements Geometry{
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

	contains(p:Point):boolean{
		return new Point(this.x,this.y).distance(p) <= this.radius;
	}

	getTrackingPoint():TrackingPoint{
		return new CircleTrackingPoint(this);
	}
}

export class LineSegment implements Geometry{
	static closeEnoughDistance=10;
	start:Point;
	end:Point;

	constructor(start:Point,end:Point){
		this.start=start;
		this.end=end;
	}

	toString():string{		
		return "LS: "+this.start+","+this.end+")";
	}

	contains(p:Point):boolean{
		return this.withinBounds(p) && this.distanceFromLine(p)<=LineSegment.closeEnoughDistance;
	}

	/** Checks if a point is within the bounding box created by the endpoints of the line segement or not */
	withinBounds(p:Point):boolean{
		var lx=this.start.x<this.end.x?this.start.x:this.end.x;
		var ly=this.start.y<this.end.y?this.start.y:this.end.y;
		var mx=this.start.x>this.end.x?this.start.x:this.end.x;
		var my=this.start.y>this.end.y?this.start.y:this.end.y;

		return p.x>=lx && p.x<=mx &&
				p.y>=ly && p.y<=my;
	}

	/** Finds the perpendicular distance of a point from the line when this segment is extended in both directions */
	distanceFromLine(p:Point):number{

		// find the equation of this line(segment)
		var m=(this.end.y-this.start.y)/(this.end.x-this.start.x);
		var a=m;
		var b=-1;
		var c=this.end.y - m * this.end.x;

		//find the perpendicular distance using equation
		return Math.abs( a*p.x + b*p.y + c ) / Math.sqrt(a*a + b*b );
	}

	getTrackingPoint():TrackingPoint{
		return new LineSegmentTrackingPoint();
	}
}