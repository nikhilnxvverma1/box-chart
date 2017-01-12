import { Component,Input } from '@angular/core';
import { Point } from '../model/geometry';

@Component({
  selector: 'line-segment',
  templateUrl: '../view/line-segment.component.html',
})
export class LineSegmentComponent  {
	@Input('start') start:Point;
	@Input('end') end:Point;

	private transformationMatrix(){
		var xMid=this.start.distance(this.end)/2;
		var yMid=1;//TODO purely hardcoded based on the value in the stylesheet for line-segment class

		var degree=this.start.angleOfSegment(this.end);
		var radians=Math.PI*degree/180;
		return "matrix("+
			Math.cos(radians)+","+Math.sin(radians)+","+
			-Math.sin(radians)+","+Math.cos(radians)+","+
			-xMid+","+ -yMid
		+")";
	}
}