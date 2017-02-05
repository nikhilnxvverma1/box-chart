import { Component,Input,Output,EventEmitter} from '@angular/core';
import { ViewChildren,QueryList,OnInit,OnChanges,SimpleChanges } from '@angular/core';
import { animate,trigger,state,style,transition } from '@angular/core';
import { Rect } from '../model/geometry';
import { Workspace } from '../editor/workspace';
import { Direction,PressDragReleaseProcessor } from '../utility/common';
import { ResizeHandleComponent } from './resize-handle.component';
import { DiagramNode,DiagramEdge,GenericDiagramNode } from '../model/worksheet';
import { LinkNodesCommand } from '../editor/command/link-nodes';
import { ChangeNodeContentCommand } from '../editor/command/change-node-content';

//TODO move outside to a special 'variables' file 
const SELECTION_COLOR='#2BA3FC';
const WIDTH=200;
const HEIGHT=70;

@Component({
	selector: 'generic-node',
	templateUrl: '../view/generic-node.component.html',
	animations: [
		trigger('selection', [
			state('selected', style({
				borderColor: "#2BA3FC"
			})),
			state('unselected', style({
				borderColor: "black"
			})),
			transition('selected => unselected', animate('100ms ease-in')),
			transition('unselected => selected', animate('100ms ease-out'))
		]),
		trigger('contentEditingOpen',[
        state('open',style({
            width:WIDTH+"px",
            height:HEIGHT+"px"
        })),
        state('closed', style({
            width:0+"px",
            height:0+"px"
        })),
        transition('open => closed', animate('100ms ease-in')),
        transition('closed => open', animate('200ms ease-out'))
    ])
	]
})
export class GenericNodeComponent implements OnInit{//,OnChanges

	@Input('workspace') workspace:Workspace;
	@Input("soloSelected") soloSelected:boolean;
	@Input('genericNode') node:GenericDiagramNode;
	@Output() requestDragging=new EventEmitter<DiagramNode>();
	@Output('linkNodes') linkNodes=new EventEmitter<LinkNodesCommand>();
	@Output() removeMe=new EventEmitter<DiagramNode>();
	@ViewChildren(ResizeHandleComponent) resizeHandlers:QueryList<ResizeHandleComponent>;

	private nodeMoving=false;
	prepared:DiagramEdge;
	ghostNode:GenericDiagramNode;
	editedContent:string;

	ngOnInit(){
		this.prepareNewEdgeAndGhost();
		this.editedContent=this.node.content;
	}

	// ngOnChanges(changes:SimpleChanges){
	// 	if (changes['soloSelected'] != null ) {
	// 		this.workspace.contentEditingIsOpen=false;//redundant
	// 	}
	// }

	registerDragIntention(){
		if(!this.workspace.contentEditingIsOpen){
			this.requestDragging.emit(this.node);
		}
	}

	updateAllResizeHandlers(resizeHandler:ResizeHandleComponent){
		this.resizeHandlers.forEach((item)=>{
			item.updateHandlePosition();
		});
	}

	editContent(event:MouseEvent){
		this.workspace.contentEditingIsOpen=true;
		this.editedContent=this.node.content;
		event.stopPropagation();
	}

	strokeColor(){
		return this.node.selected ? SELECTION_COLOR : this.node.stroke.hashCode();
	}

	private prepareNewEdgeAndGhost(){
		console.debug("Setting new prepared edge in generic node component");
		this.prepared=new DiagramEdge();
		this.prepared.from=this.node;
		this.prepared.fromPoint=this.node.geometry.getTrackingPoint();
		this.ghostNode=this.node.clone(true);
	}

	preventClosingOfOptions(event:MouseEvent){
		event.stopPropagation();
	}

	changeContent(event:KeyboardEvent){
		if(event.keyCode==13){//commit
			console.debug("User changed content to "+this.editedContent);
			this.workspace.contentEditingIsOpen=false;
			this.workspace.commit(new ChangeNodeContentCommand(this.node,this.editedContent,this.ghostNode),true);
		}else if(event.keyCode==27){//cancel
			this.workspace.contentEditingIsOpen=false;
		}
	}
}