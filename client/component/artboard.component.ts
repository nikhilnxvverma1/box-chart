import { Component,Input,Output,EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { animate,trigger,state,transition,style } from '@angular/core';
import { Rect } from '../model/geometry';
import { Point } from '../model/geometry';
import { PressDragReleaseProcessor } from '../utility/common';
import { DiagramaticComponent } from '../editor/diagramatic-element';
import { Worksheet } from '../model/worksheet';
import { MockDataService } from '../utility/mock-data.service';
import { AutoCompletionComponent } from './auto-completion.component';
import * as creationDrawer from './creation-drawer.component';
import { InterpreterService } from '../editor/compiler/interpreter.service';
import { GenericDiagramNode,GenericDiagramNodeType,DiagramEdge } from '../model/worksheet';
import { Workspace } from '../editor/workspace';

export const ArtboardWidth=3200;
export const ArtboardHeight=(2/3)*ArtboardWidth;

@Component({
  selector: 'artboard',
  styleUrls:['../style/artboard.component.scss'],
  templateUrl: '../view/artboard.component.html',
  
})
export class ArtboardComponent  {
    massiveArea:Rect;
    rectList:Rect[]=[];
	diagramticComponentList:DiagramaticComponent[]=[]

	@Input() workspace:Workspace;
    @Output() mousedownEvent=new EventEmitter<MouseEvent>();
    @Output() mousemoveEvent=new EventEmitter<MouseEvent>();
    @Output() mouseupEvent=new EventEmitter<MouseEvent>();

	@ViewChild(AutoCompletionComponent) autoCompletion:AutoCompletionComponent;

	private creationDrawerLocation:Point=new Point(ArtboardWidth/2,ArtboardHeight/2);
	private draggingInteraction:PressDragReleaseProcessor;

	constructor(private mockDataService:MockDataService,private interpreter:InterpreterService ){
		this.massiveArea=new Rect(0,0,ArtboardWidth,ArtboardHeight);
		this.testing();
		
	}

	testing(){
		this.interpreter.parseFieldMember("#someMethod(n:int,str:string):bool");
		this.rectList.push(new Rect(1300,1000,200,50));

		this.genericNode1=new GenericDiagramNode(GenericDiagramNodeType.Rectangle);
		this.genericNode1.rect.x=1500;
		this.genericNode1.rect.y=1200;

		this.genericNode2=new GenericDiagramNode(GenericDiagramNodeType.RoundedRectangle);
		this.genericNode2.rect.x=1800;
		this.genericNode2.rect.y=1000;

		this.edge=new DiagramEdge();
		this.edge.from=this.genericNode1;
		this.edge.to=this.genericNode2;
		
	}

	doubleClickedArtboard(event:MouseEvent){
		this.creationDrawerLocation=new Point(event.offsetX-creationDrawer.WIDTH/2,event.offsetY-creationDrawer.HEIGHT/2);
		this.workspace.creationDrawerIsOpen=true;
	}

	mousedown(event:MouseEvent){
		this.workspace.creationDrawerIsOpen=false;

		this.mousedownEvent.emit(event);
		if(this.draggingInteraction!=null){
			this.draggingInteraction.handleMousePress(event);
		}
	}

	mousemove(event:MouseEvent){
		this.mousemoveEvent.emit(event);	
		if(this.draggingInteraction!=null){
			this.draggingInteraction.handleMouseDrag(event);
		}
	}

	mouseup(event:MouseEvent){
		this.mouseupEvent.emit(event);	
		if(this.draggingInteraction!=null){
			this.draggingInteraction.handleMouseRelease(event);
		}
		this.draggingInteraction=null;
	}

	setDragInteractionIfEmpty(dragProcessor:PressDragReleaseProcessor){
		if(this.draggingInteraction==null){
			console.log("Setting new drag processor");
			this.draggingInteraction=dragProcessor;
		}
	}

	register(listener:DiagramaticComponent){
		this.diagramticComponentList.push(listener);
	}
	
	unregister(listener:DiagramaticComponent){
		var index = this.diagramticComponentList.indexOf(listener, 0);
		if (index > -1) {
			this.diagramticComponentList.splice(index, 1);
		}
	}

	//testing stuff
	st=new Point(1501,1300);
	en=new Point(1700,700);

	genericNode1:GenericDiagramNode;
	genericNode2:GenericDiagramNode;
	
	edge:DiagramEdge;

}