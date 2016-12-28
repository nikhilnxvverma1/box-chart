import { Point } from '../model/geometry';

export enum Direction{//going clockwise
	Top=1,
	TopRight,
	Right,
	BottomRight,
	Bottom,
	BottomLeft,
	Left,
	TopLeft
}

export function linearInterpolation(start:Point,end:Point):Point{
	var interpolated=new Point(start.x,start.y);
	interpolated.x+=this.fraction*(end.x-start.x);
	interpolated.y+=this.fraction*(end.y-start.y);
	return interpolated;
}