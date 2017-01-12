import { Component,Output,EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { animate,trigger,state,transition,style } from '@angular/core';
import { Rect } from '../model/geometry';
import { Point } from '../model/geometry';
import { PressDragReleaseProcessor } from '../utility/common';
import { DiagramaticComponent } from '../editor/diagramatic-element';
import { Worksheet } from '../model/worksheet';
import { MockDataService } from '../utility/mock-data.service';
import { AutoCompletionComponent } from './auto-completion.component';
import { InterpreterService } from '../editor/compiler/interpreter.service';
import { GenericDiagramNode,GenericDiagramNodeType } from '../model/worksheet';

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
	worksheet:Worksheet;

    @Output() mousedownEvent=new EventEmitter<MouseEvent>();
    @Output() mousemoveEvent=new EventEmitter<MouseEvent>();
    @Output() mouseupEvent=new EventEmitter<MouseEvent>();

	@ViewChild(AutoCompletionComponent) autoCompletion:AutoCompletionComponent;

	private draggingInteraction:PressDragReleaseProcessor;

	constructor(private mockDataService:MockDataService,private interpreter:InterpreterService ){
		this.massiveArea=new Rect(0,0,ArtboardWidth,ArtboardHeight);
		this.worksheet=this.mockDataService.vehicleWorksheet();
		this.testing();
		
	}

	testing(){
		this.interpreter.parseFieldMember("#someMethod(n:int,str:string):bool");
		this.genericNode=new GenericDiagramNode(GenericDiagramNodeType.Rectangle);
		this.genericNode.rect.x=1500;
		this.genericNode.rect.y=1200;
		this.rectList.push(new Rect(1300,1000,200,50));
	}

    doubleClickedArtboard(event:MouseEvent){
        var width=200;
        var height=50;
        var rect=new Rect(3200/2,2133/2,width,height);
        rect.x=event.offsetX-width/2;
        rect.y=event.offsetY-height/2;
        this.rectList.push(rect);
		console.log("Added box");
    }

	mousedown(event:MouseEvent){
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

	genericNode:GenericDiagramNode;

}