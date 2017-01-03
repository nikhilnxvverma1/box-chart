import { Component,Input,Output,EventEmitter } from '@angular/core';
import { InterfaceDefinition } from '../model/semantic-model';
import { InterfaceDiagramNode } from '../model/worksheet';
import { PressDragReleaseProcessor } from '../utility/common';

@Component({
  selector: 'interface-diagram',
  templateUrl: '../view/interface-diagram.component.html',
})
export class InterfaceDiagramComponent  {
	@Input('interfaceDiagram') interfaceDiagram:InterfaceDiagramNode;
	@Output() requestDragging=new EventEmitter<PressDragReleaseProcessor>();
	
	toggleSelection(){
		this.interfaceDiagram.selected=!this.interfaceDiagram.selected;
	}

	registerDragIntention(dragProcessor:PressDragReleaseProcessor){
		this.requestDragging.emit(dragProcessor);
	}
}