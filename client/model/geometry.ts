import { RadiansToDegrees,DegreesToRadians,LineEquation } from '../utility/common';
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

	/** Finds the angle (b/w 0-360) that gets made b/w the x axis and line segment comprised of this point and another point */
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

	/**
	* Checks if this point is within the bounding box defined by the endpoints of a diagonal.
	* Interchanging order of points is safe and does not affect result.
	*/
	withinBounds(start:Point,end:Point):boolean{
		var lx=start.x<end.x?start.x:end.x;
		var ly=start.y<end.y?start.y:end.y;
		var mx=start.x>=end.x?start.x:end.x;
		var my=start.y>=end.y?start.y:end.y;

		return this.x>=lx && this.x<=mx &&
				this.y>=ly && this.y<=my;
	}

	/** 
	 * Checks if the point is within infinite horizontal section defined by two vertical axis.
	 * Interchanging order of points is safe and does not affect result.
	 */
	withinYSpan(y1:number,y2:number):boolean{
		var ly=y1<y2?y1:y2;
		var my=y1>=y2?y2:y1;
		return this.y>=ly && this.y<=my;
	}

	/** 
	 * Checks if the point is within infinite vertical section defined by two horizontal axis.
	 * Interchanging order of points is safe and does not affect result.
	 */
	withinXSpan(x1:number,x2:number):boolean{
		var lx=x1<x2?x1:x2;
		var mx=x1>=x2?x2:x1;
		return this.x>=lx && this.x<=mx;
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
	/** Returns a rect that tells about this geometry's top left position and dimensions */
	getBoundingBox():Rect;
	/** Overlap check with a rectangle */
	overlapsWithRect(rect:Rect):boolean;
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

	topLeft():Point{
		return new Point(this.x,this.y);
	}

	topRight():Point{
		return new Point(this.x+this.width,this.y);
	}

	bottomRight():Point{
		return new Point(this.x+this.width,this.y+this.height);
	}

	bottomLeft():Point{
		return new Point(this.x,this.y+this.height);
	}

	center():Point{
		return new Point(this.x+this.width/2,this.y+this.height/2);
	}

	getBoundingBox():Rect{
		return new Rect(this.x,this.y,this.width,this.height);
	}

	overlapsWithRect(rect:Rect):boolean{
		//check which rect is top left
		if(rect.x<this.x){
			if(rect.y<this.y){//rect is top left to this
				return rect.contains(this.topLeft());
			}else{//rect is left and below this 
				return rect.contains(this.bottomLeft());
			}
		}else{
			if(rect.y>this.y){//this is top left to rect
				return rect.contains(this.bottomRight());
			}else{//this is left and below to rect
				return rect.contains(this.topRight());
			}
		}
	}
}

export class Circle implements Geometry{
	center:Point;
	radius:number;

	constructor(center:Point,radius:number){
		this.center=center;
		this.radius=radius;
	}

	toString():string{
		return "C("+this.center.x+","+this.center.y+","+this.radius+")";
	}

	contains(p:Point):boolean{
		return new Point(this.center.x,this.center.y).distance(p) <= this.radius;
	}

	getTrackingPoint():TrackingPoint{
		return new CircleTrackingPoint(this);
	}

	getBoundingBox():Rect{
		return new Rect(this.center.x-this.radius,this.center.y-this.radius,this.radius*2,this.radius*2);
	}

	overlapsWithRect(rect:Rect):boolean{
		//TODO line circle overlap check
		return false;
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
		return p.withinBounds(this.start,this.end) && this.distanceFromLine(p)<=LineSegment.closeEnoughDistance;
	}

	/** Finds the perpendicular distance of a point from the line when this segment is extended in both directions */
	distanceFromLine(p:Point):number{
		return new LineEquation(this.start,this.end).perpendicularDistanceFrom(p);
	}

	getTrackingPoint():TrackingPoint{
		return new LineSegmentTrackingPoint();
	}

	getBoundingBox():Rect{
		var lx=this.start.x<this.end.x?this.start.x:this.end.x;
		var ly=this.start.y<this.end.y?this.start.y:this.end.y;
		var hx=this.start.x>this.end.x?this.start.x:this.end.x;
		var hy=this.start.y>this.end.y?this.start.y:this.end.y;
		return new Rect(lx,ly,hx-lx,hy-ly);
	}

	overlapsWithRect(rect:Rect):boolean{
		//TODO line rect overlap check
		return false;
	}
}