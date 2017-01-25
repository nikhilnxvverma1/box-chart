import { Command } from './command';
import { Workspace } from '../workspace';
import { Direction,PressDragReleaseProcessor } from '../../utility/common';
import { DiagramModel,DiagramNode,DiagramEdge } from '../../model/worksheet';
import { Point } from '../../model/geometry';

export class RemoveCommand extends Command {

	private _workspace:Workspace;
	private target:DiagramModel;

	constructor(workspace:Workspace,target:DiagramModel){
		super();
		this._workspace=workspace;
		this.target=target;
		this.addConnectedEdgesToTargetNodes();
	}

	get workspace():Workspace{
		return this._workspace;
	}

	private addConnectedEdgesToTargetNodes(){
		//check each edge if they are connected to any target node
		for(let edge of this.workspace.worksheet.diagramModel.edgeList){

			//if edge is not present in target
			if(this.target.edgeList.indexOf(edge)==-1){
				//check if the terminal nodes of this edge belong in the target
				if(this.target.nodeList.indexOf(edge.from)!=-1){
					this.target.edgeList.push(edge);
					continue;
				}

				//check if the other terminal node of this edge belong in the target
				if(this.target.nodeList.indexOf(edge.to)!=-1){
					this.target.edgeList.push(edge);
				}
			}
		}
	}

	execute():void{

		//re add all nodes that are in target
		for(let node of this.target.nodeList){
			let index=this.workspace.worksheet.diagramModel.nodeList.indexOf(node);
			if(index!=-1){
				this.workspace.worksheet.diagramModel.nodeList.splice(index,1);
			}else{
				console.error("Node to remove already doesn't exist");
			}
		}

		//re add all edges that are in target
		for(let edge of this.target.edgeList){
			let index=this.workspace.worksheet.diagramModel.edgeList.indexOf(edge);
			if(index!=-1){
				this.workspace.worksheet.diagramModel.edgeList.splice(index,1);
			}else{
				console.error("Edge to remove already doesn't exist");
			}
		}
	}

	unExecute():void{
		//remove all nodes that are in target
		for(let node of this.target.nodeList){
			let index=this.workspace.worksheet.diagramModel.nodeList.indexOf(node);
			if(index==-1){
				this.workspace.worksheet.diagramModel.nodeList.push(node);
			}else{
				console.error("Node already exists in list");
			}
		}

		//remove all edges that are in target
		for(let edge of this.target.edgeList){
			let index=this.workspace.worksheet.diagramModel.edgeList.indexOf(edge);
			if(index==-1){
				this.workspace.worksheet.diagramModel.edgeList.push(edge);
			}else{
				console.error("Edge already exists in list");
			}
		}
	}

	getName():string{
		return "Remove Item(s)";
	}
}
