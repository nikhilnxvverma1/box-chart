import { Component,Input } from '@angular/core';
import { Point,LineSegment } from '../model/geometry';
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
	@Input() label:string;

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
		let lx = this.start.x < this.end.x ? this.start.x : this.end.x;
		let ly = this.start.y < this.end.y ? this.start.y : this.end.y;
		return new Point(lx,ly);
	}

	private withinBounds(point:Point):Point{
		return point.minus(this.topLeft());
	}

	private bottomRight():Point{
		let hx = this.start.x > this.end.x ? this.start.x : this.end.x;
		let hy = this.start.y > this.end.y ? this.start.y : this.end.y;
		return new Point(hx,hy);
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

	private startEndpointTransform(){
		let degree=this.start.angleOfSegment(this.end);
		return "translate(-50%,-50%) rotate("+degree+"deg)";
	}

	private endEndpointTransform(){
		let degree=this.end.angleOfSegment(this.start);
		return "translate(-50%,-50%) rotate("+degree+"deg)";
	}

	private shiftedPoint(shift:number,reverse=false):Point{
		if(!reverse){
			return new LineSegment(this.start,this.end).pointOnLine(shift);
		}else{
			return new LineSegment(this.start,this.end).pointOnLine(-shift);
		}
	}

	private midpoint():Point{
		return new Point((this.start.x+this.end.x)/2,(this.start.y+this.end.y)/2);
	}

	private emptyLabel():boolean{
		return this.label==null || this.label.trim()=='';
	}

}