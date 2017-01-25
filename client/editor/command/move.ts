import { Command } from './command';
import { Workspace } from '../workspace';
import { Direction,PressDragReleaseProcessor } from '../../utility/common';
import { DiagramModel,DiagramNode,DiagramEdge } from '../../model/worksheet';
import { Point } from '../../model/geometry';

export class MoveCommand extends Command implements PressDragReleaseProcessor{
	
	private workspace:Workspace;
	private target:DiagramModel;
	private difference=new Point(0,0);

	constructor(workspace:Workspace){
		super();
		this.workspace=workspace;
		this.target=this.workspace.copySelection();
	}

	handleMousePress(event:MouseEvent):void{
		console.debug("Move command presed");
	}
	
	handleMouseDrag(event:MouseEvent):void{
		console.debug("Move command dragged");
		//record the cumalative difference
		this.difference.x+=event.movementX;
		this.difference.y+=event.movementY;

		//move all nodes by marginal change in mouse position
		for(let node of this.target.nodeList){
			node.getGeometry().moveBy(new Point(event.movementX,event.movementY));
		}
	}

	handleMouseRelease(event:MouseEvent):void{
		console.debug("Move command released");
		if(!this.difference.isZero()){
			this.workspace.commit(this);
		}
	}

	execute():void{
		//move all nodes by marginal change in mouse position
		for(let node of this.target.nodeList){
			node.getGeometry().moveBy(this.difference);
		}
	}

	unExecute():void{
		//move all nodes by marginal change in mouse position
		for(let node of this.target.nodeList){
			node.getGeometry().moveBy(this.difference.inverse());
		}
	}

	getName():string{
		return "Move Item(s)";
	}
}