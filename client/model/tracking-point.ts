import { Direction,linearInterpolation } from '../utility/common';
import { Point,Rect,Circle,LineSegment } from './geometry';

export interface TrackingPoint{
	pointOnGeometry():Point;
}

export class RectTrackingPoint implements TrackingPoint{
	
	rect:Rect;
	fraction:number;
	side:Direction;//only top,left,bottom,right applicable here

	constructor(rect:Rect){
		this.rect=rect;
		this.side=Direction.Top;
		this.fraction=0;
	}

	pointOnGeometry():Point{		
		var startPoint:Point;
		var endPoint:Point;

		switch(this.side){
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

		return linearInterpolation(startPoint,endPoint,this.fraction);
	}
}

export class CircleTrackingPoint implements TrackingPoint{
	
	circle:Circle;
	fraction:number;

	constructor(circle:Circle){
		this.circle=circle;
	}

	pointOnGeometry():Point{
		return null;//TODO
	}
}

export class LineSegmentTrackingPoint implements TrackingPoint{

	lineSegment:LineSegment;
	fraction:number;

	pointOnGeometry():Point{
		return linearInterpolation(this.lineSegment.start,this.lineSegment.end,this.fraction);
	}
}
