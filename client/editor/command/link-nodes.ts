import { Command } from './command';
import { Workspace } from '../workspace';
import { PressDragReleaseProcessor } from '../../utility/common';
import { DiagramModel,DiagramNode,DiagramEdge } from '../../model/worksheet';
import { Point } from '../../model/geometry';

export class LinkNodesCommand extends Command implements PressDragReleaseProcessor{
	
	private _workspace:Workspace;
	private edge:DiagramEdge;

	constructor(workspace:Workspace,edge:DiagramEdge,node:DiagramNode){
		super();
		this._workspace=workspace;
		this.edge=edge;
		this.edge.from=node;
	}

	get workspace():Workspace{
		return this._workspace;
	}

	handleMousePress(event:MouseEvent):void{
		console.debug("link node mouse press");
		
	}
	
	handleMouseDrag(event:MouseEvent):void{
		console.debug("link node mouse drag");
		
	}

	handleMouseRelease(event:MouseEvent):void{
		console.debug("link node mouse release");
	}

	execute():void{

	}

	unExecute():void{
		
	}

	getName():string{
		return "Link Nodes";
	}
}