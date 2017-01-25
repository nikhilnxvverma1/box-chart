import { Command } from './command';
import { Workspace } from '../workspace';
import { Direction,PressDragReleaseProcessor } from '../../utility/common';
import { DiagramModel,DiagramNode,DiagramEdge } from '../../model/worksheet';
import { Point } from '../../model/geometry';

export class RemoveCommand extends Command {

	private workspace:Workspace;
	private target:DiagramModel;

	constructor(workspace:Workspace){
		super();
		this.workspace=workspace;
		this.target=this.workspace.copySelection();
	}

	execute():void{

		//remove all nodes that are in target
		for(let node of this.target.nodeList){
			let index=this.workspace.worksheet.diagramModel.nodeList.indexOf(node);
			if(index!=-1){
				this.workspace.worksheet.diagramModel.nodeList.splice(index,1);
			}else{
				console.error("Node to remove already doesn't exist");
			}
		}

		//remove all edges that are in target
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
