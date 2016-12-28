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

export function linearInterpolation(start:Point,end:Point,fraction:number):Point{
	var interpolated=new Point(start.x,start.y);
	interpolated.x+=fraction*(end.x-start.x);
	interpolated.y+=fraction*(end.y-start.y);
	return interpolated;
}