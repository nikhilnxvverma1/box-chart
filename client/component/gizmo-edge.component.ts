import { Component,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { OnChanges,OnInit } from '@angular/core';
import { Point } from '../model/geometry';
import { DiagramEdge,DiagramNode } from '../model/worksheet';
import { Workspace } from '../editor/workspace';
import { LinkNodesCommand } from '../editor/command/link-nodes';

@Component({
  selector: 'gizmo-edge',
  templateUrl: '../view/gizmo-edge.component.html',
})
export class GizmoEdgeComponent implements OnChanges,OnInit{
	@Input('workspace') workspace:Workspace;
	@Input('fromNode') fromNode:DiagramNode;

	@Output('linkNodes') linkNodes=new EventEmitter<LinkNodesCommand>();

	prepared:DiagramEdge;

	ngOnChanges(changes:SimpleChanges){
		console.debug("Change detected "+changes[0]);
	}

	ngOnInit(){
		this.prepared=new DiagramEdge();
	}

	linkNodesByDragging(event:MouseEvent){
		this.linkNodes.emit(new LinkNodesCommand(this.workspace,this.prepared,this.fromNode));
	}

}