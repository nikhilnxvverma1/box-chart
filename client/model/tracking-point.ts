import { Direction,linearInterpolation,LineEquation,oppositeDirection } from '../utility/common';
import { Point,Rect,Circle,LineSegment,Geometry,PointOrder } from './geometry';

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
	
	private _rect:Rect;
	private trackedPoint:Point;
	private _fraction:number;
	private _side:Direction;//only top,left,bottom,right applicable here

	/**
	 * Creates a new tracking point for a given side of a rect with a 
	 * fraction that is linearly interpolated to get the tracked point
	 */
	constructor(rect:Rect,direction=Direction.Top,fraction=0){
		this._rect=rect;
		this._side=direction;
		this._fraction=fraction;
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
					this._side=Direction.Top;
					this.trackedPoint=new Point(p.x,this.rect.y);
				}else if(p.withinYSpan(topRight.y,cy)){
					this._side=Direction.Right;
					this.trackedPoint=new Point(topRight.x,p.y);
				}else{//corner edge case
					this._side=Direction.Top;
					this.trackedPoint=topRight;
				}
			}else{//left
				if(p.withinXSpan(topLeft.x,cx)){
					this._side=Direction.Top;
					this.trackedPoint=new Point(p.x,this.rect.y);
				}else if(p.withinYSpan(topLeft.y,cy)){
					this._side=Direction.Left;
					this.trackedPoint=new Point(topLeft.x,p.y);
				}else{//corner edge case
					this._side=Direction.Top;
					this.trackedPoint=topLeft;
				}
			}
		}else{//bottom
			if(p.x>cx){//right
				if(p.withinXSpan(cx,bottomRight.x)){
					this._side=Direction.Bottom;
					this.trackedPoint=new Point(p.x,bottomRight.y);
				}else if(p.withinYSpan(cy,bottomLeft.y)){
					this._side=Direction.Right;
					this.trackedPoint=new Point(bottomRight.x,p.y);
				}else{//corner edge case
					this._side=Direction.Bottom;
					this.trackedPoint=bottomRight;
				}
			}else{//left
				if(p.withinXSpan(bottomLeft.x,cx)){
					this._side=Direction.Bottom;
					this.trackedPoint=new Point(p.x,bottomLeft.y);
				}else if(p.withinYSpan(cy,bottomLeft.y)){
					this._side=Direction.Left;
					this.trackedPoint=new Point(bottomLeft.x,p.y);
				}else{//corner edge case
					this._side=Direction.Bottom;
					this.trackedPoint=bottomLeft;
				}
			}
		}

		//find the fraction from the tracked point
		this._fraction=this.fractionValueFromPoint(this.trackedPoint);

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

	get rect():Rect{
		return this._rect;
	}

	set rect(value:Rect){
		this._rect=value;
	}

	get fraction():number{
		return this._fraction;
	}

	set fraction(value:number){
		this._fraction=value;
	}

	get side():Direction{
		return this._side;
	}

	set side(value:Direction){
		this._side=value;
	}

	copyInformationFrom(that:TrackingPoint):void{
		if(that.type==TrackingPointType.Rect){
			this.rect.x=(<RectTrackingPoint>that).rect.x;
			this.rect.y=(<RectTrackingPoint>that).rect.y;
			this.rect.width=(<RectTrackingPoint>that).rect.width;
			this.rect.height=(<RectTrackingPoint>that).rect.height;
			this._fraction=(<RectTrackingPoint>that).fraction;
			this._side=(<RectTrackingPoint>that).side;
		}else if(that.type==TrackingPointType.Circle){
			let circlePoint=<CircleTrackingPoint>that;
			this.rect.x=circlePoint.circle.center.x-circlePoint.circle.radius;
			this.rect.y=circlePoint.circle.center.y-circlePoint.circle.radius;
			this.rect.width=circlePoint.circle.radius*2;
			this.rect.height=circlePoint.circle.radius*2;
			this.gravitateTowards(circlePoint.pointOnGeometry());
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
		this._fraction=json.fraction;
		this._side=json.side;
		return this;
	}
}

export class CircleTrackingPoint implements TrackingPoint{
	
	private _circle:Circle;
	/**Angle in degrees for a 360 degree location */
	private _angle:number;

	constructor(circle:Circle){
		this._circle=circle;
		this._angle=0;
	}

	pointOnGeometry():Point{
		return this._circle.center.pointAtLength(this._angle,this._circle.radius);
	}

	gravitateTowards(p:Point,offset=0):Point{
		this._angle=this._circle.center.angleOfSegment(p);
		let trackedPoint=this._circle.center.pointAtLength(this._angle,this._circle.radius+offset);
		return trackedPoint;
	}

	inverse(distance:number):CircleTrackingPoint{
		let copyCircle=this._circle.clone();
		copyCircle.center=this._circle.center.pointAtLength(this._angle,
			this._circle.radius+distance+copyCircle.radius);
		let inverse=new CircleTrackingPoint(copyCircle);
		inverse._angle=(this._angle+180)%360;
		return inverse;
	}

	get circle():Circle{
		return this._circle;
	}

	get angle():number{
		return this._angle;
	}

	getGeometry():Circle{
		return this._circle;
	}

	copyInformationFrom(that:TrackingPoint):void{
		if(that.type==TrackingPointType.Circle){
			this._circle.center=(<CircleTrackingPoint>that)._circle.center;
			this._angle=(<CircleTrackingPoint>that)._angle;
		}else if(that.type==TrackingPointType.Rect){
			let rectPoint=<RectTrackingPoint> that;
			this.circle.center.x=rectPoint.rect.x-rectPoint.rect.width/2;
			this.circle.center.y=rectPoint.rect.y-rectPoint.rect.height/2;
			this.circle.radius=rectPoint.rect.width/2;
		}
	}

	get type():TrackingPointType{
		return TrackingPointType.Circle;
	}

	toJSON():any{
		let json:any={};
		json.type=this.type;
		json.angle=this._angle;
		json.circle=this._circle.toJSON();
		return json;
	}

	fromJSON(json:any):CircleTrackingPoint{
		this._angle=json.angle;
		this._circle.fromJSON(json.circle);
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
		let pointOrder=new PointOrder(this.lineSegment.start,this.lineSegment.end);

		let p1 = this.lineSegment.start;
		let p2 = this.lineSegment.end;

		let lx = p1.x < p2.x ? p1.x : p2.x;
		let ly = p1.y < p2.y ? p1.y : p2.y;

		let mx = p1.x > p2.x ? p1.x : p2.x;
		let my = p1.y > p2.y ? p1.y : p2.y;

		//find fraction based on orientation of the two points
		if(mx-lx!=0){

			if(projection.x>p1.x){
				if(projection.x>p2.x){
					this.fraction = p2.x > p1.x ? 1 : 0;
				}else{
					this.fraction=(projection.x-p1.x)/(mx-lx);
				}
			}else{
				if(projection.x<p2.x){
					this.fraction = p2.x < p1.x ? 1 : 0;
				}else{
					this.fraction=(p1.x-projection.x)/(mx-lx);
				}
			}
		}else if(my-ly!=0){
			if(projection.y>p1.y){
				if(projection.y>p2.y){
					this.fraction = p2.y > p1.y ? 1 : 0;
				}else{
					this.fraction=(projection.y-p1.y)/(my-ly);
				}
			}else{
				if(projection.y<p2.y){
					this.fraction = p2.y < p1.y ? 1 : 0;
				}else{
					this.fraction=(p1.y-projection.y)/(my-ly);
				}
			}
		}else{
			this.fraction=0;
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
