import { Point } from '../model/geometry';
import { PrimitiveType } from '../model/semantic-model';
import { AccessSpecifier } from '../model/semantic-model';

/** Gives radians when multiplied by an angle in degrees */
export const DegreesToRadians=Math.PI/180;
/** Gives degrees when multiplied by an angle in radians */
export const RadiansToDegrees=180/Math.PI;

/** Represents direction in all 8 corners */
export enum Direction{//going clockwise
	Top=1,
	TopRight=2,
	Right=3,
	BottomRight=4,
	Bottom=5,
	BottomLeft=6,
	Left=7,
	TopLeft=8
}

/** Returns opposite direction as that of argument */
export function oppositeDirection(direction:Direction):Direction{
	switch(direction){
		case Direction.Top:return Direction.Bottom;
		case Direction.TopRight:return Direction.BottomLeft;
		case Direction.TopLeft:return Direction.BottomRight;
		case Direction.Right:return Direction.Left;
		case Direction.Left:return Direction.Right;
		case Direction.Bottom:return Direction.Top;
		case Direction.BottomRight:return Direction.TopLeft;
		case Direction.BottomLeft:return Direction.TopRight;
	}
}

/** Computes a point between two points based on fraction between 0 to 1 */
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

/** Holds the equation of the line in the form ax + by + c = 0 */
export class LineEquation{
	private a:number;
	private b:number;
	private c:number;

	/**
	 * Constructs the equation of the line from two endpoints. 
	 * Order doesn't matter, interchanging endpoints will not make any differene 
	 */
	constructor(start:Point,end:Point){
		if(start.x==end.x){//vertical line
			this.a=1;
			this.b=0;
			this.c=-start.x;
		}else if(start.y==end.y){//horizontal line
			this.a=0;
			this.b=1;
			this.c=-start.y;
		}else{					//non horizontal or vertical line
			var m=(end.y-start.y)/(end.x-start.x);
			this.a=m;
			this.b=-1;
			this.c=end.y - m * end.x;
		}
	}

	/**@deprecated Creates and returns a line equation that is perpendicular to this line equation.*/
	getPerpendicularFrom(p:Point):LineEquation{
		//slope of perpendicular will be -1/m;
		let perpendicular=new LineEquation(new Point(0,0),new Point(0,0));
		if(this.a!=0 && this.b!=0){
			let m = -(this.b / this.a);
			let c = p.y - m * p.x;
			perpendicular.a = -m;
			perpendicular.b = 1;
			perpendicular.c = -c;
		} else if (this.a == 0) {//horizontal line so, return vertical line;
			perpendicular.a = 1;
			perpendicular.b = 0;
			perpendicular.c = -p.x;
		} else {//vertical line so, return horizontal line;
			perpendicular.a = 0;
			perpendicular.b = 1;
			perpendicular.c = -p.y;
		}
		return perpendicular;
	}

	/** Finds the perpendicular distance of a point from this line */
	perpendicularDistanceFrom(p:Point):number{
		//find the perpendicular distance using equation
		return Math.abs( this.a*p.x + this.b*p.y + this.c ) / Math.sqrt(this.a*this.a + this.b*this.b );
	}

	/** Finds the intersection point with given line equation. Returns null if the lines are parallel */
	intersectionWith(line:LineEquation):Point{
		
		//using determinant formula (adjusted for the form ax + by + c = 0)
		var delta = this.a*line.b - line.a*this.b;
		if(delta==0){
			return null;
		}
		var x = (line.b*this.c*(-1) - this.b*line.c*(-1))/delta;
		var y = (this.a*line.c*(-1) - line.a*this.c*(-1))/delta;
		return new Point(x,y);
	}
}

/** Returns string representation for the access specifier like + for public, - for private, # for protected etc. */
export function stringForAccessSpecifier(accessSpecifier:AccessSpecifier){
	switch(accessSpecifier){
		case AccessSpecifier.Private:
			return "-";
		case AccessSpecifier.Protected:
			return "#";
		case AccessSpecifier.Public:
			return "+";
		case AccessSpecifier.Default:
		default:
			return "";
	}
}

/** Returns a matching element if present in list, null otherwise */
export function existsInList(item:any,list:any[]):boolean{
	for(let inList of list){
		if(item==inList){
			return true;
		}
	}
	return false;
}

/** 
 * Merges two lists together ensuring no two elements are repeated. Returns duplicates count.
 * The result list should not be either of the two lists.
 */
export function merge(list1:any[],list2:any[],result:any[]):number{
	var duplicatesFound=0;

	//add all items of first list
	for(let fromList1 of list1){
		result.push(fromList1);
	}

	//only add those items of second list that don't exist already
	for(let fromList2 of list2){
		if(!existsInList(fromList2,result)){
			result.push(fromList2);
		}else{
			duplicatesFound++;
		}
	}
	return duplicatesFound;
}

/** Returns a delimeter separated string for a supplied list */
export function csv(list:any[],delimeter=","):string{
	var csv="";
	for(let item of list){
		csv+=item.toString();
	}
	return csv;
}

/** Outputs the supplied list by calling its toString for each element */
export function printList(list:any[]){
	for(let item of list){
		console.log(item.toString());
	}
}

export function deriveSimilarButDifferentString(content:string):string{
	return content;//TODO
}

/**Removes an item from a generic list, and logs an error if the item wasn't found */
export function removeFromList(item:any,list:any[],logError?:string):boolean{
	let index=list.indexOf(item);
	if(index!=-1){
		list.splice(index,1);
		return true;
	}else if(logError!=null){
		console.error(logError);
	}
	return false;
}