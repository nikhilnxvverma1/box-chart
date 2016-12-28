import { Direction,linearInterpolation } from '../utility/common';
import { Point,Rect,Circle,LineSegment } from './geometry';

export interface TrackingPoint{
	pointOnGeometry():Point;
}

export class RectTrackingPoint implements TrackingPoint{
	
	rect:Rect;
	fraction:number;
	side:Direction;//only top,left,bottom,right applicable here

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

		return linearInterpolation(startPoint,endPoint);
	}
}

export class CircleTrackingPoint implements TrackingPoint{
	
	circle:Circle;
	fraction:number;

	pointOnGeometry():Point{
		return null;//TODO
	}
}

export class LineSegmentTrackingPoint implements TrackingPoint{

	lineSegment:LineSegment;
	fraction:number;

	pointOnGeometry():Point{
		return linearInterpolation(this.lineSegment.start,this.lineSegment.end);
	}
}
