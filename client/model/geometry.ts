import { RadiansToDegrees,DegreesToRadians,LineEquation } from '../utility/common';
import { TrackingPoint,RectTrackingPoint,CircleTrackingPoint,LineSegmentTrackingPoint,EmptyTrackingPoint } from './tracking-point';

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
	/**Move by the difference in x and y axis specified by the point.Returns the same geometry to allow chaining */
	moveBy(point:Point):Geometry;
	/** Returns a deep copy of thie geometry. */
	clone():Geometry;
	/** Returns center of this geometry */
	getCenter():Point;
	/** Sets the position of this geometry anchored at center. Returns same geometry for chaining */
	setPosition(center:Point):Geometry;
	/**Identifies this geometry */
	type:GeometryType;
	/**Returns JSON representation of this class object */
	toJSON():any;
}

/** Geometry type specifies the type of geometry */
export enum GeometryType{
	Point=1,
	Rect=2,
	Circle=3,
	LineSegment=4,
}


/** Generic model for storing 2d coordinates */
export class Point implements Geometry{
	x:number;
	y:number;

	constructor(x:number,y:number){
		this.x=x;
		this.y=y;
	}

	toString():string{
		return "P("+this.x+","+this.y+")";
	}

	contains(p:Point):boolean{
		return false;
	}

	getTrackingPoint():EmptyTrackingPoint{
		return new EmptyTrackingPoint(this);
	}

	getBoundingBox():Rect{
		return new Rect(0,0,0,0);
	}

	overlapsWithRect(rect:Rect):boolean{
		return rect.contains(this);
	}

	getCenter():Point{
		return this.clone();
	}

	get type():GeometryType{
		return GeometryType.Point;
	}

	setPosition(center:Point):Point{
		this.x=center.x;
		this.y=center.y;
		return this;
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
	withinYSpan(y1: number, y2: number): boolean {
		var ly = y1 < y2 ? y1 : y2;
		var my = y1 >= y2 ? y1 : y2;
		return this.y >= ly && this.y <= my;
	}

	/**
	 * Checks if the point is within infinite vertical section defined by two horizontal axis.
	 * Interchanging order of points is safe and does not affect result.
	 */
	withinXSpan(x1: number, x2: number): boolean {
		var lx = x1 < x2 ? x1 : x2;
		var mx = x1 >= x2 ? x1 : x2;
		return this.x >= lx && this.x <= mx;
	}

	/** Returns true if both x and y are 0 for this point. */
	isZero():boolean{
		return this.x==0 && this.y==0;
	}

	/** Returns a new point that contains the negative of x and y of this point */
	inverse():Point{
		return new Point(-1 * this.x , -1 * this.y );
	}

	/**Move by the difference in x and y axis specified by the point.Returns the same point for chaining */
	moveBy(point:Point):Point{
		this.x+=point.x;
		this.y+=point.y;
		return this;
	}

	/** Returns a new point shifted by specified numbers */
	offset(dx:number,dy:number):Point{
		return new Point(this.x + dx, this.y + dy);
	}

	/** Returns a deep copy */
	clone():Point{
		return new Point(this.x,this.y);
	}

	/** Returns an element wise difference between this point and argument */
	minus(point:Point):Point{
		return new Point(this.x - point.x, this.y - point.y);
	}

	/**Checks if this point lies between the diagonal bounds created two given points*/
	between(p1:Point,p2:Point):boolean{
		let lx = p1.x < p2.x ? p1.x : p2.x;
		let ly = p1.y < p2.y ? p1.y : p2.y;

		let mx = p1.x > p2.x ? p1.x : p2.x;
		let my = p1.y > p2.y ? p1.y : p2.y;

		return this.x >= lx && this.y >= ly && this.y <= mx && this.y <= my;
	}

	toJSON():any{
		let json:any={};
		json.type=this.type;
		json.x=this.x;
		json.y=this.y;
		return json;
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

	setPosition(center:Point):LinkedPoint{
		this.x=center.x;
		this.y=center.y;
		return this;
	}
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

	getTrackingPoint():RectTrackingPoint{
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

	leftSide():LineEquation{
		return new LineEquation(this.topLeft(),this.bottomLeft());
	}

	rightSide():LineEquation{
		return new LineEquation(this.topRight(),this.bottomRight());
	}

	topSide():LineEquation{
		return new LineEquation(this.topLeft(),this.topRight());
	}

	bottomSide():LineEquation{
		return new LineEquation(this.bottomLeft(),this.bottomRight());
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

	moveBy(point:Point):Rect{
		this.x+=point.x;
		this.y+=point.y;
		return this;
	}

	clone():Rect{
		return new Rect(this.x,this.y,this.width,this.height);
	}

	get type():GeometryType{
		return GeometryType.Rect;
	}

	getCenter():Point{
		return new Point(this.x+this.width/2,this.y+this.height/2);
	}

	setPosition(center:Point):Rect{
		this.x=center.x-this.width/2;
		this.y=center.y-this.height/2;
		return this;
	}

	toJSON():any{
		let json:any={};
		json.type=this.type;
		json.x=this.x;
		json.y=this.y;
		json.width=this.width;
		json.height=this.height;
		return json;
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

	getTrackingPoint():CircleTrackingPoint{
		return new CircleTrackingPoint(this);
	}

	getBoundingBox():Rect{
		return new Rect(this.center.x-this.radius,this.center.y-this.radius,this.radius*2,this.radius*2);
	}

	overlapsWithRect(rect:Rect):boolean{
		//TODO line circle overlap check
		return false;
	}

	moveBy(point:Point):Circle{
		this.center.moveBy(point);
		return this;
	}

	clone():Circle{
		return new Circle(this.center.clone(),this.radius);
	}

	get type():GeometryType{
		return GeometryType.Circle;
	}

	getCenter():Point{
		return this.center.clone();
	}

	setPosition(center:Point):Circle{
		this.center.x=center.x;
		this.center.y=center.y;
		return this;
	}

	toJSON():any{
		let json:any={};
		json.type=this.type;
		json.center=this.center.toJSON();
		json.radius=this.radius;
		return json;
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
		//endpoint containment check
		if(rect.contains(this.start) || rect.contains(this.end)){
			return true;
		}

		// line rect overlap check
		let lineEquation=new LineEquation(this.start,this.end);

		let p=rect.leftSide().intersectionWith(lineEquation);
		if(p!=null && p.between(this.start,this.end) && p.withinYSpan(rect.topLeft().y,rect.bottomLeft().y)){
			return true;
		}

		p=rect.rightSide().intersectionWith(lineEquation);
		if(p!=null && p.between(this.start,this.end) && p.withinYSpan(rect.topRight().y,rect.bottomRight().y)){
			return true;
		}

		p=rect.topSide().intersectionWith(lineEquation);
		if(p!=null && p.between(this.start,this.end) && p.withinXSpan(rect.topLeft().x,rect.topRight().x)){
			return true;
		}

		p=rect.bottomSide().intersectionWith(lineEquation);
		if(p!=null && p.between(this.start,this.end) && p.withinXSpan(rect.bottomLeft().x,rect.bottomRight().x)){
			return true;
		}

		return false;
	}

	moveBy(point:Point):LineSegment{
		this.start.moveBy(point);
		this.end.moveBy(point);
		return this;
	}

	clone():LineSegment{
		return new LineSegment(this.start.clone(),this.end.clone());
	}

	get type():GeometryType{
		return GeometryType.LineSegment;
	}

	getCenter():Point{
		return new Point((this.start.x + this.end.x) / 2, (this.start.y + this.end.y) / 2);//midpoint
	}

	setPosition(center:Point):LineSegment{
		let shift=this.getCenter().minus(center);
		this.start.moveBy(shift);
		this.end.moveBy(shift);
		return this;
	}

	toJSON():any{
		let json:any={};
		json.type=this.type;
		json.start=this.start.toJSON();
		json.end=this.end.toJSON();
		return json;
	}
}