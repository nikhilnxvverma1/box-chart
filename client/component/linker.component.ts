import { Component,Input,OnInit } from '@angular/core';
import { Geometry,Circle } from '../model/geometry';
import { TrackingPoint } from '../model/tracking-point';

@Component({
  selector: 'linker',
  templateUrl: '../view/linker.component.html',
})
export class LinkerComponent implements OnInit{
	@Input('geometry') geometry:Geometry;
	trackingPoint:TrackingPoint;
	link:Circle;

	ngOnInit(){
		this.trackingPoint=this.geometry.getTrackingPoint();
		var point=this.trackingPoint.pointOnGeometry();
		this.link=new Circle(point.x,point.y,7);
	}
}