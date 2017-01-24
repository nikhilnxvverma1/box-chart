import { Component,Input,Output,EventEmitter,ViewChildren,QueryList } from '@angular/core';
import { animate,trigger,state,style,transition } from '@angular/core';
import { Rect,Point } from '../model/geometry';
import { Direction,PressDragReleaseProcessor } from '../utility/common';
import { Workspace } from '../editor/workspace';

@Component({
  selector: 'selection-box',
  templateUrl: '../view/selection-box.component.html',
})
export class SelectionBoxComponent implements PressDragReleaseProcessor {
    
	@Input('workspace') workspace:Workspace;
	rect:Rect;

	@Output() requestDragging=new EventEmitter<PressDragReleaseProcessor>();
    
	handleMousePress(event:MouseEvent):void{

	}
	
	handleMouseDrag(event:MouseEvent):void{

	}

	handleMouseRelease(event:MouseEvent):void{

	}

	registerDragIntention(dragProcessor:PressDragReleaseProcessor){
		this.requestDragging.emit(dragProcessor);
	}
}