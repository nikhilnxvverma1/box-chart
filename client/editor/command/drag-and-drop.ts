import { Command,CompositeCommand } from './command';
import { CreateCommand } from './create';
import { MoveCommand } from './move';
import { Workspace } from '../workspace';
import { DiagramModel,DiagramEdge,DiagramNode } from '../../model/worksheet';
import { Direction,PressDragReleaseProcessor } from '../../utility/common';
import { Point } from '../../model/geometry';

//indices for the commands in the command list
const CREATE=0;
const MOVE=1;

/** Used during dragging(Create Command) things from the drawer/sidebar and dropping(Move Command) them into the workspace */
export class DragAndDropCommand extends CompositeCommand implements PressDragReleaseProcessor{

	constructor(workspace:Workspace,target:DiagramModel,startingPosition:Point){
		super();
		this.commandList[CREATE]=new CreateCommand(workspace,target,startingPosition);
		this.commandList[MOVE]=new MoveCommand(workspace,target,false);
	}

	handleMousePress(event:MouseEvent):void{
		console.debug("Drag and drop command presed");
		this.commandList[CREATE].execute();
		(<MoveCommand>this.commandList[MOVE]).handleMousePress(event);
	}
	
	handleMouseDrag(event:MouseEvent):void{
		console.debug("Drag and drop command dragged");
		(<MoveCommand>this.commandList[MOVE]).handleMouseDrag(event);
	}

	handleMouseRelease(event:MouseEvent):void{
		console.debug("Drag and drop command released");

		//get Workspace reference from either command
		// let workspace=(<CreateCommand>this.commandList[CREATE]).workspace;
		let workspace=this.commandList[CREATE].workspace;

		//if there is not displacement after creation, 
		if((<MoveCommand>this.commandList[MOVE]).displacement.isZero()){
			//only commit create command
			workspace.commit(this.commandList[CREATE]);
		}else{
			//commit the entire drag and drop composite command
			workspace.commit(this);
		}
	}

	getName():string{
		return "Drag and drop item(s).";
	}
}