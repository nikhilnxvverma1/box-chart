import { Component,Input,Output,EventEmitter,OnInit,ElementRef,ContentChild } from '@angular/core';
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
import { DiagramNode,GenericDiagramNode,GenericDiagramNodeType,DiagramEdge } from '../model/worksheet';
import { Workspace } from '../editor/workspace';
import { SelectionBoxComponent } from './selection-box.component';
import { MoveCommand } from '../editor/command/move';
import { RemoveCommand } from '../editor/command/remove';

export const ArtboardWidth=3200;
export const ArtboardHeight=(2/3)*ArtboardWidth;

@Component({
  selector: 'artboard',
  styleUrls:['../style/artboard.component.scss'],
  templateUrl: '../view/artboard.component.html',
  
})
export class ArtboardComponent implements OnInit{
    massiveArea:Rect;
    rectList:Rect[]=[];

	@ViewChild(SelectionBoxComponent)
	private selectionBox:SelectionBoxComponent;


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
	}

	ngOnInit(){
		this.testing();
	}

	testing(){
		this.interpreter.parseFieldMember("#someMethod(n:int,str:string):bool");
		this.rectList.push(new Rect(1300,1000,200,50));

		let genericNode1=new GenericDiagramNode(GenericDiagramNodeType.Rectangle);
		genericNode1.rect.x=1500;
		genericNode1.rect.y=1200;

		let genericNode2=new GenericDiagramNode(GenericDiagramNodeType.RoundedRectangle);
		genericNode2.rect.x=1800;
		genericNode2.rect.y=1000;

		let edge=new DiagramEdge();
		edge.from=genericNode1;
		edge.to=genericNode2;
		
		this.workspace.worksheet.diagramModel.nodeList.push(genericNode1);
		this.workspace.worksheet.diagramModel.nodeList.push(genericNode2);

		this.workspace.worksheet.diagramModel.edgeList.push(edge);
	}

	doubleClickedArtboard(event:MouseEvent){
		this.creationDrawerLocation=new Point(event.offsetX-creationDrawer.WIDTH/2,event.offsetY-creationDrawer.HEIGHT/2);
		this.workspace.creationDrawerIsOpen=true;
	}
  
	mousedown(event:MouseEvent){
		//toggle creation drawer to false to close it (done using bindings)
		this.workspace.creationDrawerIsOpen=false;

		this.mousedownEvent.emit(event);
		if(this.draggingInteraction!=null){
			this.draggingInteraction.handleMousePress(event);
		}else{
			this.selectionBox.mousePressed(event);
		}
	}

	mousemove(event:MouseEvent){
		this.mousemoveEvent.emit(event);
		//update the position of the cursor only if this event is not in BUBBLING_PHASE
		//this ensure, wrong cursor position is not set because of mouse move event triggering on a child node
		if (event.eventPhase != Event.BUBBLING_PHASE) {
			this.workspace.cursorPosition=new Point(event.offsetX,event.offsetY);
		}
		
		if(this.draggingInteraction!=null){
			this.draggingInteraction.handleMouseDrag(event);
		}else{
			this.selectionBox.mouseMoved(event);
		}
	}

	mouseup(event:MouseEvent){
		this.mouseupEvent.emit(event);	
		if(this.draggingInteraction!=null){
			this.draggingInteraction.handleMouseRelease(event);
		}else{
			this.selectionBox.mouseReleased(event);
		}
		this.draggingInteraction=null;
	}

	setDragInteractionIfEmpty(dragProcessor:PressDragReleaseProcessor){
		if(this.draggingInteraction==null){
			console.log("Setting new drag processor");
			this.draggingInteraction=dragProcessor;
		}
	}

	moveNodes(pressedNode:DiagramNode){
		if(this.draggingInteraction==null){
			console.debug("Creating move command for possible movement");

			//if the workspace did not already contain the pressed node, then
			//behavioraly, only that node gets selected and moved, and all other node loose selection
			if(!this.workspace.selectionContainsNode(pressedNode)){
				this.workspace.clearSelection();
				this.workspace.addNodeToSelection(pressedNode);
			}

			//issue a press drag release based command which will work on the current selection
			this.draggingInteraction=new MoveCommand(this.workspace,this.workspace.copySelection());
		}
	}

	linkNodes(dragInteration:PressDragReleaseProcessor){
		this.setDragInteractionIfEmpty(dragInteration);
	}

	removeCurrentSelection(){
		if(this.workspace.selectionCount()>0){
			console.debug("Issueing remove command for current selection");
			this.workspace.commit(new RemoveCommand(this.workspace,this.workspace.copySelection()),true);
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