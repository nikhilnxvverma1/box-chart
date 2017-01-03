import { Component,Input,Output,EventEmitter } from '@angular/core';
import { PressDragReleaseProcessor } from '../utility/common';
import { ClassObjectDiagram } from '../model/worksheet';

@Component({
  selector: 'class-object-diagram',
  templateUrl: '../view/class-object-diagram.component.html',
})
export class ClassObjectComponent  {
	@Input('classObjectDiagram') classObjectDiagram:ClassObjectDiagram;
	@Output() requestDragging=new EventEmitter<PressDragReleaseProcessor>();
	
	toggleSelection(){
		this.classObjectDiagram.selected=!this.classObjectDiagram.selected;
	}

	registerDragIntention(dragProcessor:PressDragReleaseProcessor){
		this.requestDragging.emit(dragProcessor);
	}	
}