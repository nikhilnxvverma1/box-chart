import { Command } from './command';
import { Workspace } from '../workspace';
import { Direction,PressDragReleaseProcessor } from '../../utility/common';
import { DiagramModel,DiagramNode,DiagramEdge } from '../../model/worksheet';

export class MoveCommand extends Command implements PressDragReleaseProcessor{
	
	private workspace:Workspace;
	private target:DiagramModel;
	private dragMade=false;

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
		this.dragMade=true;
	}

	handleMouseRelease(event:MouseEvent):void{
		console.debug("Move command released");
		if(this.dragMade){
			this.workspace.commit(this);
		}
	}

	execute():void{

	}

	unExecute():void{

	}

	getName():string{
		return "Move Items";
	}
}