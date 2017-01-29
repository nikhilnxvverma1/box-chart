import { Component,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { OnChanges,OnInit } from '@angular/core';
import { Point } from '../model/geometry';
import { DiagramEdge,DiagramNode } from '../model/worksheet';
import { Workspace } from '../editor/workspace';
import { LinkNodesCommand,NodeLinkingStatus } from '../editor/command/link-nodes';

const LINKER_EXTENSION_DISTANCE=50;

@Component({
  selector: 'gizmo-edge',
  templateUrl: '../view/gizmo-edge.component.html',
})
export class GizmoEdgeComponent implements OnChanges,OnInit,NodeLinkingStatus{
	@Input('workspace') workspace:Workspace;
	@Input('fromNode') fromNode:DiagramNode;
	@Input('cursorPosition') cursorPosition:Point;

	@Output('linkNodes') linkNodes=new EventEmitter<LinkNodesCommand>();

	//edge that is ready to be linked to another node (used in making the gizmo)
	prepared:DiagramEdge;
	//if new nodes is created using the linker, this node is used
	ghostNode:DiagramNode;
	showGhostNode:boolean=false;
	private linkingProcessUnderway=false;

	//prepared edge and ghost node are not connected until after the link is made through command

	ngOnInit(){
		this.prepareNewEdgeAndNode();
	}

	ngOnChanges(changes:SimpleChanges){
		if (changes['cursorPosition'] != null && !this.linkingProcessUnderway) {
			this.updateTrackingPointsBasedOnNewCursorPosition(changes['cursorPosition'].currentValue);
		}
	}

	updateTrackingPointsBasedOnNewCursorPosition(position:Point){
		let fromTrackingPoint=this.fromNode.getGeometry().getTrackingPoint();

		//gravitate towards the cursor Position
		let outlierPoint=fromTrackingPoint.gravitateTowards(position,LINKER_EXTENSION_DISTANCE);

		//set the new tracked point
		this.prepared.fromPoint=fromTrackingPoint;

		//find the new tracking point based on the outlier point and the side

	}

	linkNodesByDragging(event:MouseEvent){
		this.linkNodes.emit(new LinkNodesCommand(this.workspace,this.prepared,this.fromNode));
	}

	private prepareNewEdgeAndNode(){
		this.prepared=new DiagramEdge();
		this.prepared.from=this.fromNode;
		this.prepared.fromPoint=this.fromNode.getGeometry().getTrackingPoint();
		this.ghostNode=this.fromNode.clone(true);
	}

	beginningNodeLinkingProcess():void{
		this.linkingProcessUnderway=true;
	}

	possibleNodeToLinkTo(node:DiagramNode):void{

	}

	finishedLinkingToNode(node:DiagramNode):void{
		this.prepareNewEdgeAndNode();
		this.linkingProcessUnderway=false;
	}
}