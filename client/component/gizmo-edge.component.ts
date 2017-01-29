import { Component,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { OnChanges,OnInit } from '@angular/core';
import { Point } from '../model/geometry';
import { DiagramEdge,DiagramNode,GenericDiagramNode } from '../model/worksheet';
import { Workspace } from '../editor/workspace';
import { LinkNodesCommand,NodeLinkingStatus } from '../editor/command/link-nodes';

@Component({
  selector: 'gizmo-edge',
  templateUrl: '../view/gizmo-edge.component.html',
})
export class GizmoEdgeComponent implements OnChanges,OnInit,NodeLinkingStatus{
	@Input('workspace') workspace:Workspace;
	@Input('fromNode') fromNode:GenericDiagramNode;
	@Input('cursorPosition') cursorPosition:Point;

	@Output('linkNodes') linkNodes=new EventEmitter<LinkNodesCommand>();

	/** Controls how far the linking extension will be made */
	linkerExtensionDistance:number=50;
	//edge that is ready to be linked to another node (used in making the gizmo)
	prepared:DiagramEdge;
	//if new nodes is created using the linker, this node is used
	ghostNode:GenericDiagramNode;
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
		//set a new tracking point on the from
		this.prepared.fromPoint=this.fromNode.geometry.getTrackingPoint();

		//gravitate towards the cursor Position
		let outlierPoint=this.prepared.fromPoint.gravitateTowards(position,this.linkerExtensionDistance);

		//find the to tracking point by getting the inverse of from tracking point
		this.prepared.toPoint=this.prepared.toPoint.inverse(this.linkerExtensionDistance);

		this.ghostNode.geometry=this.prepared.toPoint.getGeometry();
	}

	linkNodesByDragging(event:MouseEvent){
		this.linkNodes.emit(new LinkNodesCommand(this.workspace,this.prepared,this.fromNode));
	}

	private prepareNewEdgeAndNode(){
		this.prepared=new DiagramEdge();
		this.prepared.from=this.fromNode;
		this.prepared.fromPoint=this.fromNode.geometry.getTrackingPoint();
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