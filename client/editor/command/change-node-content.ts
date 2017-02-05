import { Command } from './command';
import { DiagramModel,DiagramNode,DiagramEdge,GenericDiagramNode } from '../../model/worksheet';
import { LineStyle } from '../../model/worksheet';
import * as util from '../../utility/common';

export class ChangeNodeContentCommand extends Command {
	
	private node:GenericDiagramNode;
	private oldContent:string;
	private newContent:string;
	private ghostNode:GenericDiagramNode;

	constructor(node:GenericDiagramNode,newContent:string,ghostNode?:GenericDiagramNode){
		super();
		this.node=node;
		this.oldContent=this.node.content;
		this.newContent=newContent;
		this.ghostNode=ghostNode;
	}

	execute():void{
		this.node.content=this.newContent;
		if(this.ghostNode!=null){
			this.ghostNode.content=util.deriveSimilarButDifferentString(this.node.content);
		}
	}

	unExecute():void{
		this.node.content=this.oldContent;
		if(this.ghostNode!=null){
			this.ghostNode.content=util.deriveSimilarButDifferentString(this.node.content);
		}
	}

	getName():string{
		return "Change edge style";
	}
}