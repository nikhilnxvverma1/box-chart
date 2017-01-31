import { Direction,linearInterpolation,LineEquation,oppositeDirection } from '../utility/common';
import { Point,Rect,Circle,LineSegment,Geometry } from './geometry';

/** Identifies the tracking point */
export enum TrackingPointType{
	Empty=1,
	Center=2,
	Rect=3,
	Circle=4,
	LineSegment=5
}

/** Represents a data structure that can denote a point on a geometry */
export interface TrackingPoint{
	/** Finds the point on geometry for the current configuration of the tracking point */
	pointOnGeometry():Point;
	/** 
	 * Sets the configuration so that the tracked point exists nearest to the point being supplied. 
	 * Additionally also returns said point 
	 * 'offset' specifies distance offset from the border this tracking point is on.
	 */
	gravitateTowards(p:Point,offset?:number):Point;
	/** An inverse tracking point returns the equivalent opposite Tracking Point. 
	 * Example: for rectangl midpoint on right will return tracking point of midpoint on left.
	 * 'distance' specifies how much the new tracking point's geometry will be away from this one.
	 */
	inverse(distance:number):TrackingPoint;

	/** Returns the geometry tracked by this tracking point */
	getGeometry():Geometry;

	/** Copies compatible information from another tracking point */
	copyInformationFrom(that:TrackingPoint):void;

	/**Returns the type of tracking point this object is */
	type:TrackingPointType;

	/** Returns the json representation of this tracking point which includes type*/
	toJSON():any;

	/**Builds this object from a json representation.Returns the same object for chaining */
	fromJSON(json:any):TrackingPoint;
}

export function trackingPointFromJSON(json:any):TrackingPoint{
	if(json.type==TrackingPointType.Empty){
		
	}else if(json.type==TrackingPointType.Center){
		return new EmptyTrackingPoint(new Point(0,0)).fromJSON(json);
	}else if(json.type==TrackingPointType.Rect){
		return new RectTrackingPoint(new Rect(0,0,0,0)).fromJSON(json);
	}else if(json.type==TrackingPointType.Circle){
		return new CircleTrackingPoint(new Circle(new Point(0,0),0)).fromJSON(json);
	}else if(json.type==TrackingPointType.LineSegment){
		return new LineSegmentTrackingPoint(new LineSegment(new Point(0,0),new Point(0,0))).fromJSON(json);
	}
	return null;
}

/** A simple point. Empty suggests that this tracking point is not tracking anything(geometry) */
export class EmptyTrackingPoint implements TrackingPoint{
	point:Point;

	constructor(point:Point){
		this.point=point;
	}

	pointOnGeometry():Point{
		return this.point;
	}
	gravitateTowards(p:Point,offset=0):Point{
		return this.point;
	}

	inverse(distance:number):TrackingPoint{
		return new EmptyTrackingPoint(this.point.clone());
	}

	getGeometry():Point{
		return this.point;
	}

	copyInformationFrom(that:TrackingPoint):void{
		if(that.type==TrackingPointType.Empty){
			this.point=(<EmptyTrackingPoint>that).point;
		}
	}

	get type():TrackingPointType{
		return TrackingPointType.Empty;
	}

	toJSON():any{
		let json:any={};
		json.type=this.type;
		json.point=JSON.stringify(this.point);
		return json;
	}

	fromJSON(json:any):EmptyTrackingPoint{
		return this;
	}
}

/** Tracks the center point of a given geometry */
export class CenterTrackingPoint implements TrackingPoint{
	geometry:Geometry;

	constructor(geometry:Geometry){
		this.geometry=geometry;
	}

	pointOnGeometry():Point{
		return this.geometry.getBoundingBox().center();
	}
	gravitateTowards(p:Point,offset=0):Point{
		return this.geometry.getBoundingBox().center();
	}

	inverse(distance:number):CenterTrackingPoint{
		return new CenterTrackingPoint(this.geometry.clone().moveBy(new Point(distance,distance)));
	}

	getGeometry():Geometry{
		return this.geometry;
	}

	copyInformationFrom(that:TrackingPoint):void{
		if(that.type==TrackingPointType.Circle){
			this.geometry=(<CenterTrackingPoint>that).geometry;
		}
	}

	get type():TrackingPointType{
		return TrackingPointType.Circle;
	}

	toJSON():any{
		let json:any={};
		json.type=this.type;
		json.point=JSON.stringify(this.geometry);
		return json;
	}

	fromJSON(json:any):CenterTrackingPoint{
		return this;
	}
}

export class RectTrackingPoint implements TrackingPoint{
	
	private rect:Rect;
	private trackedPoint:Point;
	fraction:number;
	side:Direction;//only top,left,bottom,right applicable here

	/**
	 * Creates a new tracking point for a given side of a rect with a 
	 * fraction that is linearly interpolated to get the tracked point
	 */
	constructor(rect:Rect,direction=Direction.Top,fraction=0){
		this.rect=rect;
		this.side=direction;
		this.fraction=fraction;
		this.trackedPoint=this.pointOnSide(this.side,this.fraction);
	}

	pointOnGeometry():Point{
		return this.pointOnSide(this.side,this.fraction);
	}

	/** Returns the point defined by a side and a fraction between 0 and 1 */
	pointOnSide(side:Direction,fraction:number=this.fraction):Point{//TODO redundant arguments?
		var startPoint:Point;
		var endPoint:Point;

		switch(side){
			case Direction.Top:
				startPoint=new Point(this.rect.x,this.rect.y);
				endPoint=new Point(this.rect.x+this.rect.width,this.rect.y);
				break;
			case Direction.Right:
				startPoint=new Point(this.rect.x+this.rect.width,this.rect.y);
				endPoint=new Point(this.rect.x+this.rect.width,this.rect.y+this.rect.height);
				break;
			case Direction.Bottom:
				startPoint=new Point(this.rect.x+this.rect.width,this.rect.y+this.rect.height);
				endPoint=new Point(this.rect.x,this.rect.y+this.rect.height);
				break;
			case Direction.Left:
				startPoint=new Point(this.rect.x,this.rect.y+this.rect.height);
				endPoint=new Point(this.rect.x,this.rect.y);
				break;
			default:
				console.log("Wrong side on rect tracking point");
				break;
		}

		return linearInterpolation(startPoint,endPoint,fraction);
	}

	/** Find the fraction(between 0 and 1) from the tracked point based on the current side */
	protected fractionValueFromPoint(p:Point):number{
		//find the fraction based on side
		if(this.side==Direction.Top){
			return (p.x-this.rect.x)/this.rect.width;
		}else if(this.side==Direction.Right){
			return (p.y-this.rect.y)/this.rect.height;
		}else if(this.side==Direction.Bottom){
			return 1-(p.x-this.rect.x)/this.rect.width;
		}else if(this.side==Direction.Left){
			return 1-(p.y-this.rect.y)/this.rect.height;
		}
		return 0;//unlikely, provided the side is valid
	}

	gravitateTowards(p:Point,offset=0):Point{
		//find the center of the rectangle
		let cx=(this.rect.x + this.rect.x + this.rect.width)/2;
		let cy=(this.rect.y + this.rect.y + this.rect.height)/2;

		//corner points (only one part of it will get used)
		let topLeft=this.rect.topLeft();
		let topRight=this.rect.topRight();
		let bottomLeft=this.rect.bottomLeft();
		let bottomRight=this.rect.bottomRight();

		//find the quadrant in which argument point is in
		if(p.y<cy){//top (y goes down)
			if(p.x>cx){//right
				if(p.withinXSpan(cx,topRight.x)){
					this.side=Direction.Top;
					this.trackedPoint=new Point(p.x,this.rect.y);
				}else if(p.withinYSpan(topRight.y,cy)){
					this.side=Direction.Right;
					this.trackedPoint=new Point(topRight.x,p.y);
				}else{//corner edge case
					this.side=Direction.Top;
					this.trackedPoint=topRight;
				}
			}else{//left
				if(p.withinXSpan(topLeft.x,cx)){
					this.side=Direction.Top;
					this.trackedPoint=new Point(p.x,this.rect.y);
				}else if(p.withinYSpan(topLeft.y,cy)){
					this.side=Direction.Left;
					this.trackedPoint=new Point(topLeft.x,p.y);
				}else{//corner edge case
					this.side=Direction.Top;
					this.trackedPoint=topLeft;
				}
			}
		}else{//bottom
			if(p.x>cx){//right
				if(p.withinXSpan(cx,bottomRight.x)){
					this.side=Direction.Bottom;
					this.trackedPoint=new Point(p.x,bottomRight.y);
				}else if(p.withinYSpan(cy,bottomLeft.y)){
					this.side=Direction.Right;
					this.trackedPoint=new Point(bottomRight.x,p.y);
				}else{//corner edge case
					this.side=Direction.Bottom;
					this.trackedPoint=bottomRight;
				}
			}else{//left
				if(p.withinXSpan(bottomLeft.x,cx)){
					this.side=Direction.Bottom;
					this.trackedPoint=new Point(p.x,bottomLeft.y);
				}else if(p.withinYSpan(cy,bottomLeft.y)){
					this.side=Direction.Left;
					this.trackedPoint=new Point(bottomLeft.x,p.y);
				}else{//corner edge case
					this.side=Direction.Bottom;
					this.trackedPoint=bottomLeft;
				}
			}
		}

		//find the fraction from the tracked point
		this.fraction=this.fractionValueFromPoint(this.trackedPoint);

		//apply the offset based on side
		if(this.side==Direction.Top){
			return this.trackedPoint.offset(0,-offset);
		}else if(this.side==Direction.Right){
			return this.trackedPoint.offset(offset,0);
		}else if(this.side==Direction.Bottom){
			return this.trackedPoint.offset(0,offset);
		}else if(this.side==Direction.Left){
			return this.trackedPoint.offset(-offset,0);
		}

		//assertion: the method should have applied offset and returned by now
		return this.trackedPoint;
	}

	inverse(distance:number):TrackingPoint{
		let copyRect = this.rect.clone();
		let oppositeSide = oppositeDirection(this.side);
		
		//calculate the shift that is required for the new geometry
		let shift = new Point(0, 0);
		if(oppositeSide==Direction.Top){
			shift.y+=(distance+this.rect.height);
		}else if(oppositeSide==Direction.Bottom){
			shift.y-=(distance+this.rect.height);
		}else if(oppositeSide==Direction.Left){
			shift.x+=(distance+this.rect.width);
		}else if(oppositeSide==Direction.Right){
			shift.x-=(distance+this.rect.width);
		}
		copyRect.moveBy(shift);

		//return the inverse
		return new RectTrackingPoint(copyRect, oppositeSide, 1 - this.fraction);
	}

	getGeometry():Rect{
		return this.rect;
	}

	copyInformationFrom(that:TrackingPoint):void{
		if(that.type==TrackingPointType.Rect){
			this.rect.x=(<RectTrackingPoint>that).rect.x;
			this.rect.y=(<RectTrackingPoint>that).rect.y;
			this.rect.width=(<RectTrackingPoint>that).rect.width;
			this.rect.height=(<RectTrackingPoint>that).rect.height;
			this.fraction=(<RectTrackingPoint>that).fraction;
			this.side=(<RectTrackingPoint>that).side;
		}
	}

	get type():TrackingPointType{
		return TrackingPointType.Rect;
	}

	toJSON():any{
		let json:any={};
		json.type=this.type;
		json.rect=this.rect;
		json.fraction=this.fraction;
		json.side=this.side;
		return json;
	}

	fromJSON(json:any):RectTrackingPoint{
		this.rect.fromJSON(json.rect);
		this.fraction=json.fraction;
		this.side=json.side;
		return this;
	}
}

export class CircleTrackingPoint implements TrackingPoint{
	
	private circle:Circle;
	/**Angle in degrees for a 360 degree location */
	private angle:number;

	constructor(circle:Circle){
		this.circle=circle;
		this.angle=0;
	}

	pointOnGeometry():Point{
		return this.circle.center.pointAtLength(this.angle,this.circle.radius);
	}

	gravitateTowards(p:Point,offset=0):Point{
		this.angle=this.circle.center.angleOfSegment(p);
		let trackedPoint=this.circle.center.pointAtLength(this.angle,this.circle.radius+offset);
		return trackedPoint;
	}

	inverse(distance:number):CircleTrackingPoint{
		let copyCircle=this.circle.clone();
		copyCircle.center=this.circle.center.pointAtLength(this.angle,
			this.circle.radius+distance+copyCircle.radius);
		let inverse=new CircleTrackingPoint(copyCircle);
		inverse.angle=(this.angle+180)%360;
		return inverse;
	}

	getGeometry():Circle{
		return this.circle;
	}

	copyInformationFrom(that:TrackingPoint):void{
		if(that.type==TrackingPointType.Circle){
			this.circle.center=(<CircleTrackingPoint>that).circle.center;
			this.angle=(<CircleTrackingPoint>that).angle;
		}
	}

	get type():TrackingPointType{
		return TrackingPointType.Circle;
	}

	toJSON():any{
		let json:any={};
		json.type=this.type;
		json.angle=this.angle;
		json.circle=this.circle.toJSON();
		return json;
	}

	fromJSON(json:any):CircleTrackingPoint{
		this.angle=json.angle;
		this.circle.fromJSON(json.circle);
		return this;
	}
}

export class LineSegmentTrackingPoint implements TrackingPoint{

	lineSegment:LineSegment;
	fraction:number;

	constructor(lineSegment:LineSegment){
		this.lineSegment=lineSegment;
	}

	pointOnGeometry():Point{
		return linearInterpolation(this.lineSegment.start,this.lineSegment.end,this.fraction);
	}

	gravitateTowards(p:Point,offset=0):Point{
		
		//find projection of p on this line segment
		let projection=this.lineSegment.orthogonalProjection(p);

		//find parametric fraction based on this projection point
		let p1 = this.lineSegment.start;
		let p2 = this.lineSegment.end;

		let lx = p1.x < p2.x ? p1.x : p2.x;
		let ly = p1.y < p2.y ? p1.y : p2.y;

		let mx = p1.x > p2.x ? p1.x : p2.x;
		let my = p1.y > p2.y ? p1.y : p2.y;

		if(mx-lx!=0){
			this.fraction=(projection.x-lx)/(mx-lx);
		}else{
			this.fraction=(projection.y-ly)/(my-ly);
		}

		//cap between 0 and 1
		this.fraction = this.fraction < 0 ? 0 : this.fraction > 1 ? 1 : this.fraction;

		return linearInterpolation(this.lineSegment.start,this.lineSegment.end,this.fraction);
	}

	inverse(distance:number):LineSegmentTrackingPoint{
		return new LineSegmentTrackingPoint(this.lineSegment);
	}

	getGeometry():LineSegment{
		return this.lineSegment;
	}

	copyInformationFrom(that:TrackingPoint):void{
		if(that.type==TrackingPointType.LineSegment){
			this.lineSegment.start=(<LineSegmentTrackingPoint>that).lineSegment.start;
			this.lineSegment.end=(<LineSegmentTrackingPoint>that).lineSegment.end;
			this.fraction=(<LineSegmentTrackingPoint>that).fraction;
		}
	}

	get type():TrackingPointType{
		return TrackingPointType.LineSegment;
	}

	toJSON():any{
		let json:any={};
		json.type=this.type;
		json.lineSegment=this.lineSegment;
		json.fraction=this.fraction;
		return json;
	}

	fromJSON(json:any):LineSegmentTrackingPoint{
		this.fraction=json.fraction;
		this.lineSegment.fromJSON(json.lineSegment);
		return this;
	}
}
