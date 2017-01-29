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

	/**Returns the type of tracking point this object is */
	type:TrackingPointType;

	/** Returns the json representation of this tracking point which includes type*/
	toJSON():any;
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

	get type():TrackingPointType{
		return TrackingPointType.Empty;
	}

	toJSON():any{
		let json:any={};
		json.type=this.type;
		json.point=JSON.stringify(this.point);
		return json;
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

	get type():TrackingPointType{
		return TrackingPointType.Circle;
	}

	toJSON():any{
		let json:any={};
		json.type=this.type;
		json.point=JSON.stringify(this.geometry);
		return json;
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
			shift.y-=(distance+this.rect.height);
		}else if(oppositeSide==Direction.Bottom){
			shift.y+=(distance+this.rect.height);
		}else if(oppositeSide==Direction.Left){
			shift.x-=(distance+this.rect.width);
		}else if(oppositeSide==Direction.Right){
			shift.x+=(distance+this.rect.width);
		}
		copyRect.moveBy(shift);

		//return the inverse
		return new RectTrackingPoint(copyRect, oppositeSide, 1 - this.fraction);
	}

	getGeometry():Rect{
		return this.rect;
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
}

export class CircleTrackingPoint implements TrackingPoint{
	
	private circle:Circle;
	/**Angle in degrees for a 360 degree location */
	private angle:number;
	private trackedPoint:Point;

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
		return this.trackedPoint;
	}

	inverse(distance:number):TrackingPoint{
		// this.circle.clone().moveBy(distance,distance);
		return new CircleTrackingPoint(this.circle);
	}

	getGeometry():Circle{
		return this.circle;
	}

	get type():TrackingPointType{
		return TrackingPointType.Circle;
	}

	toJSON():any{
		let json:any={};
		json.type=this.type;
		json.angle=this.angle;
		json.circle=this.circle;
		return json;
	}
}

export class LineSegmentTrackingPoint implements TrackingPoint{

	lineSegment:LineSegment;
	fraction:number;

	pointOnGeometry():Point{
		return linearInterpolation(this.lineSegment.start,this.lineSegment.end,this.fraction);
	}

	gravitateTowards(p:Point,offset=0):Point{
		return null;//TODO
	}

	inverse(distance:number):LineSegmentTrackingPoint{
		return new LineSegmentTrackingPoint();
	}

	getGeometry():LineSegment{
		return this.lineSegment;
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
}
