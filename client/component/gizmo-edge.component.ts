import { Component,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { OnChanges,OnInit } from '@angular/core';
import { Point } from '../model/geometry';
import { DiagramEdge,DiagramNode,GenericDiagramNode,InteractiveAppearance } from '../model/worksheet';
import { Workspace } from '../editor/workspace';
import { LinkNodesCommand,NodeLinkingStatus } from '../editor/command/link-nodes';

@Component({
  selector: 'gizmo-edge',
  templateUrl: '../view/gizmo-edge.component.html',
})
export class GizmoEdgeComponent implements OnChanges,OnInit,NodeLinkingStatus{
	
	@Input() workspace:Workspace;
	@Input() fromNode:GenericDiagramNode;
	//angular 2 bug: calling a model 'cursorPosition' somehow prevents ngOnInit from getting called. Go figure.
	// @Input('cursorPosition') cursorPosition:Point;
	@Input() positionOfTheCursor:Point;
	@Output() linkNodes=new EventEmitter<LinkNodesCommand>();
	@Output() requireNewEdgeAndGhost=new EventEmitter();

	// Controls how far the linking extension will be made 
	linkerExtensionDistance:number=70;
	//edge that is ready to be linked to another node (used in making the gizmo)
	@Input() prepared:DiagramEdge=null;
	//if new nodes is created using the linker, this node is used
	@Input() ghostNode:GenericDiagramNode;
	showGhostNode:boolean=false;
	private linkingProcessUnderway=false;

	//prepared edge and ghost node are not connected until after the link is made through command

	ngOnInit(){
		// this.prepareNewEdgeAndNode();
	}

	ngOnChanges(changes:SimpleChanges){
		
		if (changes['positionOfTheCursor'] != null ) {//only because of an angular 2 bug
			this.updateTrackingPointsBasedOnNewCursorPosition(changes['positionOfTheCursor'].currentValue);
			
		}

	}

	updateTrackingPointsBasedOnNewCursorPosition(position:Point){

		//set a new tracking point on the from
		this.prepared.fromPoint=this.fromNode.geometry.getTrackingPoint();

		//gravitate towards the cursor Position
		let outlierPoint=this.prepared.fromPoint.gravitateTowards(position,this.linkerExtensionDistance);

		if(!this.linkingProcessUnderway){

			//find the to tracking point by getting the inverse of 'from' tracking point
			this.prepared.toPoint=this.prepared.fromPoint.inverse(this.linkerExtensionDistance);
			this.ghostNode.geometry=this.prepared.toPoint.getGeometry();
		}

	}

	linkNodesByDragging(event:MouseEvent){
		this.linkNodes.emit(new LinkNodesCommand(this.workspace,this.prepared,this.ghostNode,this));
	}

	private prepareNewEdgeAndNode(){
		console.debug("Setting new prepared edge");
		this.prepared=new DiagramEdge();
		this.prepared.from=this.fromNode;
		this.prepared.fromPoint=this.fromNode.geometry.getTrackingPoint();
		this.ghostNode=this.fromNode.clone(true);
	}

	mouseenter(event:MouseEvent){
		if(!this.linkingProcessUnderway){
			this.showGhostNode=true;
		}
	}

	mouseleave(event:MouseEvent){
		if(!this.linkingProcessUnderway){
			this.showGhostNode=false;
		}
	}

	beginningNodeLinkingProcess():void{
		this.linkingProcessUnderway=true;
		this.fromNode.appearance=InteractiveAppearance.PullingLinkerFrom;
	}

	possibleNodeToLinkTo(node:DiagramNode):void{
		//all nodes except the from node should default back
		this.workspace.worksheet.
			diagramModel.setAppearanceOfAllNodesTo(InteractiveAppearance.Default);
		this.fromNode.appearance=InteractiveAppearance.PullingLinkerFrom;

		//control the appearance of nodes that is going to be linked to
		if(node==this.ghostNode){
			this.showGhostNode=true;
		}else{
			this.showGhostNode=false;
			node.appearance=InteractiveAppearance.PointingLinkerTo;
		}
	}

	finishedLinkingToNode(node:DiagramNode):void{
		this.requireNewEdgeAndGhost.emit();
		this.linkingProcessUnderway=false;
		this.fromNode.appearance=InteractiveAppearance.Default;//redundant
		this.workspace.worksheet.diagramModel.setAppearanceOfAllNodesTo(InteractiveAppearance.Default);
	}

}