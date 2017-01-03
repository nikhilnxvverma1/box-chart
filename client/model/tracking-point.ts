import { Direction,linearInterpolation,LineEquation } from '../utility/common';
import { Point,Rect,Circle,LineSegment } from './geometry';

/** Represents a data structure that can denote a point on the surface of a geometry */
export interface TrackingPoint{
	/** Finds the point on geometry for the current configuration of the tracking point */
	pointOnGeometry():Point;
	/** 
	 * Sets the configuration so that the tracked point exists nearest to the point being supplied. 
	 * Additionally also returns said point  */
	gravitateTowards(p:Point):Point;
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
		this.trackedPoint=this.pointOnSide(fraction);
	}

	pointOnGeometry():Point{
		return this.trackedPoint;
	}

	/** Returns the point defined by a side and a fraction between 0 and 1 */
	pointOnSide(side=this.side,fraction:number=this.fraction):Point{
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

	gravitateTowards(p:Point):Point{
		//find the center of the rectangle
		var cx=(this.rect.x + this.rect.x + this.rect.width)/2;
		var cy=(this.rect.y + this.rect.y + this.rect.height)/2;

		var centerToPoint=new LineEquation(new Point(cx,cy),p);

		var topLeft=this.rect.topLeft();
		var topRight=this.rect.topRight();
		var bottomLeft=this.rect.bottomLeft();
		var bottomRight=this.rect.bottomRight();

		var verticalSideEquation:LineEquation;
		var horizontalSideEquation:LineEquation;

		var verticalSideDirection:Direction;
		var horizontalSideDirection:Direction;

		//choose the side on which this point should get close to
		if(p.y>cy){//top
			if(p.x>cx){//right
				var verticalSideEquation = new LineEquation(topRight,bottomRight);
				verticalSideDirection=Direction.Right;

				var horizontalSideEquation = new LineEquation(topLeft,topRight);
				horizontalSideDirection=Direction.Top;

			}else{//left
				var verticalSideEquation = new LineEquation(topLeft,bottomLeft);
				verticalSideDirection=Direction.Left;

				var horizontalSideEquation = new LineEquation(topLeft,topRight);
				horizontalSideDirection=Direction.Top;
				
			}
		}else{//bottom
			if(p.x>cx){//right
				var verticalSideEquation = new LineEquation(topRight,bottomRight);
				verticalSideDirection=Direction.Right;

				var horizontalSideEquation = new LineEquation(bottomLeft,bottomRight);
				horizontalSideDirection=Direction.Bottom;
			}else{//left
				var verticalSideEquation = new LineEquation(topLeft,bottomLeft);
				verticalSideDirection=Direction.Left;

				var horizontalSideEquation = new LineEquation(bottomLeft,bottomRight);
				horizontalSideDirection=Direction.Bottom;
			}
		}

		var verticalSidePoint = verticalSideEquation.intersectionWith(centerToPoint);
		var horizontalSidePoint = horizontalSideEquation.intersectionWith(centerToPoint);
		
		if(verticalSidePoint!=null && verticalSidePoint.withinYSpan(topRight.y,bottomRight.y)){
			this.side=verticalSideDirection;
			this.trackedPoint=verticalSidePoint;
		}else{
			this.side=horizontalSideDirection;
			this.trackedPoint=horizontalSidePoint;
		}

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

	gravitateTowards(p:Point):Point{
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

	gravitateTowards(p:Point):Point{
		return null;//TODO
	}
}
