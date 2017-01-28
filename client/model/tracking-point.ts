import { Direction,linearInterpolation,LineEquation } from '../utility/common';
import { Point,Rect,Circle,LineSegment,Geometry } from './geometry';

/** Represents a data structure that can denote a point on a geometry */
export interface TrackingPoint{
	/** Finds the point on geometry for the current configuration of the tracking point */
	pointOnGeometry():Point;
	/** 
	 * Sets the configuration so that the tracked point exists nearest to the point being supplied. 
	 * Additionally also returns said point 
	 * @param offset specifies distance offset from the border this tracking point is on.
	 */
	gravitateTowards(p:Point,offset?:number):Point;
}

/** A simple point. Empty suggests that this tracking point is not tracking anything(geometry) */
export class EmptyTrackingPoint implements TrackingPoint{
	point:Point;
	pointOnGeometry():Point{
		return this.point;
	}
	gravitateTowards(p:Point,offset=0):Point{
		return this.point;
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
}

export class CircleTrackingPoint implements TrackingPoint{
	
	private circle:Circle;
	private trackedPoint:Point;

	constructor(circle:Circle){
		this.circle=circle;
	}

	pointOnGeometry():Point{
		return this.trackedPoint;
	}

	gravitateTowards(p:Point,offset=0):Point{
		var angleOfSegment=this.circle.center.angleOfSegment(p);
		this.trackedPoint=this.circle.center.pointAtLength(angleOfSegment,this.circle.radius);
		return this.trackedPoint;
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
}
