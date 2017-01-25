import { Command } from './command';
import { Workspace } from '../workspace';
import { Direction,PressDragReleaseProcessor } from '../../utility/common';
import { DiagramModel,DiagramNode,DiagramEdge } from '../../model/worksheet';
import { Point } from '../../model/geometry';

export class CreateCommand extends Command {

	private _workspace:Workspace;
	private target:DiagramModel;
	private _startingPosition:Point;

	constructor(workspace:Workspace,target:DiagramModel,startingPosition:Point){
		super();
		this._workspace=workspace;
		this.target=target;
		this._startingPosition=startingPosition;
	}

	get startingPosition():Point{
		return this._startingPosition;
	}

	get workspace():Workspace{
		return this._workspace;
	}

	execute():void{
		//add all nodes that are in target
		for(let node of this.target.nodeList){
			node.getGeometry().moveBy(this.startingPosition);
			this.workspace.worksheet.diagramModel.nodeList.push(node);
		}

		//add all edges that are in target
		for(let edge of this.target.edgeList){
			//TODO edge geometry position move by shift
			this.workspace.worksheet.diagramModel.edgeList.push(edge);
		}
	}

	unExecute():void{

		//remove all nodes that are in target
		for(let node of this.target.nodeList){
			let index=this.workspace.worksheet.diagramModel.nodeList.indexOf(node);
			if(index!=-1){
				node.getGeometry().moveBy(this.startingPosition.inverse());
				this.workspace.worksheet.diagramModel.nodeList.splice(index,1);
			}else{
				console.error("Node to remove already doesn't exist");
			}
		}

		//remove all edges that are in target
		for(let edge of this.target.edgeList){
			let index=this.workspace.worksheet.diagramModel.edgeList.indexOf(edge);
			if(index!=-1){
				//TODO edge geometry position inverse move by shift
				this.workspace.worksheet.diagramModel.edgeList.splice(index,1);
			}else{
				console.error("Edge to remove already doesn't exist");
			}
		}
	}

	getName():string{
		return "Create Item(s)";
	}
}
