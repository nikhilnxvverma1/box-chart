import { Command } from './command';
import { Workspace } from '../workspace';
import { Direction,PressDragReleaseProcessor } from '../../utility/common';
import { DiagramModel,DiagramNode,DiagramEdge } from '../../model/worksheet';
import { Point } from '../../model/geometry';

export class MoveCommand extends Command implements PressDragReleaseProcessor{
	
	private _workspace:Workspace;
	private target:DiagramModel;
	private _displacement=new Point(0,0);
	private commitToWorkspaceOnCompletion:boolean;

	constructor(workspace:Workspace,target:DiagramModel,commitToWorkspaceOnCompletion=true){
		super();
		this._workspace=workspace;
		this.target=target;
		this.commitToWorkspaceOnCompletion=commitToWorkspaceOnCompletion;
	}

	get workspace():Workspace{
		return this._workspace;
	}

	get displacement():Point{
		return this._displacement;
	}

	handleMousePress(event:MouseEvent):void{
		console.debug("Move command presed");
	}
	
	handleMouseDrag(event:MouseEvent):void{
		console.debug("Move command dragged");
		//record the cumalative difference
		this.displacement.x+=event.movementX;
		this.displacement.y+=event.movementY;

		//move all nodes by marginal change in mouse position
		for(let node of this.target.nodeList){
			node.getGeometry().moveBy(new Point(event.movementX,event.movementY));
		}
	}

	handleMouseRelease(event:MouseEvent):void{
		console.debug("Move command released");
		if(!this.displacement.isZero() && this.commitToWorkspaceOnCompletion){
			this.workspace.commit(this);
		}
	}

	execute():void{
		//move all nodes by marginal change in mouse position
		for(let node of this.target.nodeList){
			node.getGeometry().moveBy(this.displacement);
		}
	}

	unExecute():void{
		//move all nodes by marginal change in mouse position
		for(let node of this.target.nodeList){
			node.getGeometry().moveBy(this.displacement.inverse());
		}
	}

	getName():string{
		return "Move Item(s)";
	}
}