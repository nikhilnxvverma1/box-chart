import { Component,Input } from '@angular/core';
import { Point } from '../model/geometry';
import { Color,DashStyle,EndpointStyle } from '../model/worksheet';

@Component({
  selector: 'line-segment',
  templateUrl: '../view/line-segment.component.html',
})
export class LineSegmentComponent {
	@Input('start') start:Point;
	@Input('end') end:Point;
	@Input() color:Color;
	@Input() dashStyle:DashStyle;
	@Input() startStyle:EndpointStyle;
	@Input() endStyle:EndpointStyle;

	private transformationMatrix(){
		let xMid=this.start.distance(this.end)/2;
		let yMid=1;//TODO purely hardcoded based on the value in the stylesheet for line-segment class

		let degree=this.start.angleOfSegment(this.end);
		let radians=Math.PI*degree/180;
		let transformProperty= "matrix("+
			Math.cos(radians)+","+Math.sin(radians)+","+
			-Math.sin(radians)+","+Math.cos(radians)+","+
			-xMid+","+ -yMid
		+")";
		
		
		return transformProperty;
	}

	private boundingWidth():number{
		let value = Math.abs(this.start.x - this.end.x);
		return value <= 1 ? 2 : value;
	}

	private boundingHeight(){
		let value = Math.abs(this.start.y - this.end.y);
		return value <= 1 ? 2 : value;
	}

	private topLeft():Point{
		let lx = this.start.x < this.end.x ? this.start.x : this.end.x
		let ly = this.start.y < this.end.y ? this.start.y : this.end.y
		return new Point(lx,ly);
	}

	private withinBounds(point:Point):Point{
		return point.minus(this.topLeft());
	}

	private strokeDashArray():string{
		if(this.dashStyle==DashStyle.Solid){
			return "0";
		}else if(this.dashStyle==DashStyle.Dashed){
			return "7"
		}else if(this.dashStyle==DashStyle.Dotted){
			return "3, 7"
		}
		return "0"
	}
}