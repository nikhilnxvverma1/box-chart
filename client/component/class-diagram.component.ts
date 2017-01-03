import { Component,Input,Output,EventEmitter } from '@angular/core';
import { PressDragReleaseProcessor } from '../utility/common';
import { ClassDiagramNode } from '../model/worksheet';

@Component({
  selector: 'class-diagram',
  templateUrl: '../view/class-diagram.component.html',
})
export class ClassDiagramComponent  {
	@Input('classDiagram') classDiagram:ClassDiagramNode;
	@Output() requestDragging=new EventEmitter<PressDragReleaseProcessor>();

	toggleSelection(){
		this.classDiagram.selected=!this.classDiagram.selected;
	}

	registerDragIntention(dragProcessor:PressDragReleaseProcessor){
		this.requestDragging.emit(dragProcessor);
	}
}