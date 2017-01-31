import { Component,Input,Output,EventEmitter,ViewChildren,QueryList,OnInit } from '@angular/core';
import { animate,trigger,state,style,transition } from '@angular/core';
import { Rect } from '../model/geometry';
import { Workspace } from '../editor/workspace';
import { Direction,PressDragReleaseProcessor } from '../utility/common';
import { ResizeHandleComponent } from './resize-handle.component';
import { DiagramNode,DiagramEdge,GenericDiagramNode } from '../model/worksheet';
import { LinkNodesCommand } from '../editor/command/link-nodes';

//TODO move outside to a special 'variables' file 
const SELECTION_COLOR='#2BA3FC';

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
		])
	]
})
export class GenericNodeComponent implements OnInit{

	@Input('workspace') workspace:Workspace;
	@Input("soloSelected") soloSelected:boolean;
	@Input('genericNode') node:GenericDiagramNode;
	@Output() requestDragging=new EventEmitter<DiagramNode>();
	@Output('linkNodes') linkNodes=new EventEmitter<LinkNodesCommand>();
	@Output() removeMe=new EventEmitter<DiagramNode>();
	@ViewChildren(ResizeHandleComponent) resizeHandlers:QueryList<ResizeHandleComponent>;

	prepared:DiagramEdge;
	ghostNode:GenericDiagramNode;

	ngOnInit(){
		this.prepareNewEdgeAndNode();
	}


	registerDragIntention(){
		this.requestDragging.emit(this.node);
	}

	updateAllResizeHandlers(resizeHandler:ResizeHandleComponent){
		this.resizeHandlers.forEach((item)=>{
			item.updateHandlePosition();
		});
	}

	editContent(event:MouseEvent){
		console.debug("Double clicked to edit content");
	}

	strokeColor(){
		return this.node.selected ? SELECTION_COLOR : this.node.stroke.hashCode();
	}

	private prepareNewEdgeAndNode(){
		console.debug("Setting new prepared edge in generic node component");
		this.prepared=new DiagramEdge();
		this.prepared.from=this.node;
		this.prepared.fromPoint=this.node.geometry.getTrackingPoint();
		this.ghostNode=this.node.clone(true);
	}
}