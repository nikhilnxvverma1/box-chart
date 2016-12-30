import { Component,Input } from '@angular/core';
import { Point } from '../model/geometry';

@Component({
  selector: 'line-segment',
  templateUrl: '../view/line-segment.component.html',
})
export class LineSegmentComponent  {
	@Input('start') start:Point;
	@Input('end') end:Point;

	private rotation(){
		var degree=this.start.angleOfSegment(this.end);
		return "rotate("+degree+"deg)";
	}
}