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
	private listener:MoveListener;

	//manual calculation of changes in position for each mouse movement
	private lastPosition:Point;

	constructor(workspace:Workspace,target:DiagramModel,commitToWorkspaceOnCompletion=true,moveListener?:MoveListener){
		super();
		this._workspace=workspace;
		this.target=target;
		this.commitToWorkspaceOnCompletion=commitToWorkspaceOnCompletion;
		this.listener=moveListener;
	}

	get workspace():Workspace{
		return this._workspace;
	}

	get displacement():Point{
		return this._displacement;
	}

	handleMousePress(event:MouseEvent):void{
		this.lastPosition=new Point(event.clientX,event.clientY);
		this._displacement=new Point(0,0);
		if(this.listener!=null){
			this.listener.moveStarted();
		}
	}
	
	handleMouseDrag(event:MouseEvent):void{
		//subtle  change in position
		let dx = -(this.lastPosition.x - event.clientX);
		let dy = -(this.lastPosition.y - event.clientY);
		//record the cumalative difference
		this.displacement.x += dx;
		this.displacement.y += dy;
		this.lastPosition = new Point(event.clientX, event.clientY);

		//move all nodes by marginal change in mouse position
		for(let node of this.target.nodeList){
			node.geometry.moveBy(new Point(dx,dy));
		}

		if(this.listener!=null){
			this.listener.moveInProgress(new Point(dx,dy));
		}
	}

	handleMouseRelease(event:MouseEvent):void{
		if(!this.displacement.isZero() && this.commitToWorkspaceOnCompletion){
			this.workspace.commit(this);
		}
		if(this.listener!=null){
			this.listener.moveEnded(!this.displacement.isZero());
			this.listener=null;//nullify listener so that we don't leak memory after this one time event
		}
	}

	execute():void{
		//move all nodes by marginal change in mouse position
		for(let node of this.target.nodeList){
			node.geometry.moveBy(this.displacement);
		}
	}

	unExecute():void{
		//move all nodes by marginal change in mouse position
		for(let node of this.target.nodeList){
			node.geometry.moveBy(this.displacement.inverse());
		}
	}

	getName():string{
		return "Move Item(s)";
	}
}

/** Callbacks to know about changes in movement during the press drag release event. */
export interface MoveListener{
	/** When the move started.  */
	moveStarted():void;
	/** When the move is in progress during a drag. Argument specifies the delta displacement since last move. */
	moveInProgress(dPoint:Point):void;
	/** When the move ended(release event). Argument specifies weather there was any overall displacement or not.*/
	moveEnded(displacementMade:boolean):void;
}