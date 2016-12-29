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

/**
 *  Mouse interactions on views that involve dragging event implement this interface
 *  to receive callbacks from a parent component. This is done so as to overcome the
 *  problem when the mouse cursor goes out of the target view. Implementors need to
 *  handle the mouse press event and regiter themselves to the artboard.
 */
export interface PressDragReleaseProcessor{
	/** Will be fired on the subcomponent after the first time it has be registered on the artboard(for the initial press). */
	handleMousePress(event:MouseEvent):void;
	/** Fired whenever the mouse moves, on the target view or on the artboard untill it hasn't bee released */
	handleMouseDrag(event:MouseEvent):void;
	/** Called once the mouse has been released wethear on or outside target view */
	handleMouseRelease(event:MouseEvent):void;
}