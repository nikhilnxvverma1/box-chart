import { Component, Input, Output, EventEmitter,OnChanges,SimpleChanges } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/core';
import { Rect, Point } from '../model/geometry';
import { Direction } from '../utility/common';
import { Workspace } from '../editor/workspace';

@Component({
	selector: 'multiple-selection',
	templateUrl: '../view/multiple-selection.component.html',
})
export class MultipleSelectionComponent implements OnChanges{

	@Input('workspace') workspace: Workspace;
	@Input('active') active = false;
	@Output() removeUs=new EventEmitter();
	rect: Rect = new Rect(1500, 900, 200, 300);//initial value only for debugging purposes
	
	ngOnChanges(changes:SimpleChanges){
		
		//if active flag changed from false to true,
		let activationChange=changes['active'];
		if(activationChange!=null && activationChange.currentValue){
			//compute and set the dimensions of the box
			this.setBoxDimensions();
		}
	}

	private setBoxDimensions() {
		//find the low x, low y and high x high y 
		let lowX = 999999;
		let lowY = 999999;

		let highX = 0;
		let highY = 0;

		for (let node of this.workspace.selection.nodeList) {
			let boundingBox = node.getGeometry().getBoundingBox();
			if (boundingBox.x < lowX) {
				lowX = boundingBox.x;
			}
			if (boundingBox.y < lowY) {
				lowY = boundingBox.y;
			}
			if ((boundingBox.x + boundingBox.width) > highX) {
				highX = boundingBox.x + boundingBox.width;
			}
			if ((boundingBox.y + boundingBox.height) > highY) {
				highY = boundingBox.y + boundingBox.height;
			}
		}

		//TODO do the same thing with edges

		//set the dimensions of the rect
		this.rect.x = lowX;
		this.rect.y = lowY;
		this.rect.width = highX - lowX;
		this.rect.height = highY - lowY;
	}
	
}