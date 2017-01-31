import { Command } from './command';
import { DiagramModel,DiagramNode,DiagramEdge,GenericDiagramNode } from '../../model/worksheet';
import { LineStyle } from '../../model/worksheet';

export class ChangeNodeContentCommand extends Command {
	
	private node:GenericDiagramNode;
	private oldContent:string;
	private newContent:string;

	constructor(node:GenericDiagramNode,newContent:string){
		super();
		this.node=node;
		this.oldContent=this.node.content;
		this.newContent=newContent;
	}

	execute():void{
		this.node.content=this.newContent;
	}

	unExecute():void{
		this.node.content=this.oldContent;
	}

	getName():string{
		return "Change edge style";
	}
}