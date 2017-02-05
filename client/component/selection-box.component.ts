import { Component, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/core';
import { Rect, Point } from '../model/geometry';
import { Direction } from '../utility/common';
import { Workspace } from '../editor/workspace';

@Component({
	selector: 'selection-box',
	templateUrl: '../view/selection-box.component.html',
})
export class SelectionBoxComponent {

	@Input('workspace') workspace: Workspace;
	rect: Rect = new Rect(1500, 900, 200, 300);//initial value only for debugging purposes

	//for controlling selection box positioning
	private active = false;
	private originalPress: Point;
	private difference: Point;
	
	//manual calculation of changes in position for each mouse movement
	private lastPosition:Point;

	mousePressed(event: MouseEvent): void {

 		if(event.buttons==0){
			 return;
		}

		if(!event.shiftKey){
			this.workspace.clearSelection();
		}

		this.active = true;
		this.rect.x = event.offsetX;
		this.rect.y = event.offsetY;
		this.rect.width = 0;
		this.rect.height = 0;
		this.difference = new Point(0, 0);
		this.originalPress = new Point(this.rect.x, this.rect.y);
		this.lastPosition=new Point(event.clientX,event.clientY);
	}

	mouseMoved(event: MouseEvent): void {
		if (this.active && !this.workspace.currentlyPanning && event.buttons!=0) {

			this.difference.x -= this.lastPosition.x - event.clientX;
			this.difference.y -= this.lastPosition.y - event.clientY;
			this.lastPosition = new Point(event.clientX, event.clientY);

			if (this.difference.x < 0) {
				this.rect.x = this.originalPress.x + this.difference.x;
				this.rect.width = this.difference.x * -1;
			} else {
				this.rect.x = this.originalPress.x;
				this.rect.width = this.difference.x;
			}

			if (this.difference.y < 0) {
				this.rect.y = this.originalPress.y + this.difference.y;
				this.rect.height = this.difference.y * -1;
			} else {
				this.rect.y = this.originalPress.y;
				this.rect.height = this.difference.y;
			}

			this.selectOverlappingNodes(event.shiftKey);
		}
	}

	mouseReleased(event: MouseEvent): void {
		this.active = false;
	}

	private selectOverlappingNodes(retainExisting:boolean):number{
		let count=0;
		if(!retainExisting){
			//start afresh
			this.workspace.clearSelection();
		}else if(this.workspace.selection!=null){
			count=this.workspace.selection.edgeList.length+
				this.workspace.selection.nodeList.length;
		}

		//select all overlapping nodes
		for(let node of this.workspace.worksheet.diagramModel.nodeList){
			if(node.geometry.overlapsWithRect(this.rect)){
				this.workspace.addNodeToSelection(node);
				count++;
			}
		}

		//select all overlapping edges
		for(let edge of this.workspace.worksheet.diagramModel.edgeList){
			if(edge.lineSegment.overlapsWithRect(this.rect)){
				this.workspace.addEdgeToSelection(edge);
				count++;
			}
		}

		return count;
	}
}