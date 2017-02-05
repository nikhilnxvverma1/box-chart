import { Command } from './command';
import { DiagramModel,DiagramNode,DiagramEdge,GenericDiagramNode } from '../../model/worksheet';
import { LineStyle } from '../../model/worksheet';

export class ChangeNodeOutlineCommand extends Command {
	
	private node:GenericDiagramNode;
	private oldDashed:boolean;
	private oldDouble:boolean;

	private newDashed:boolean;
	private newDouble:boolean;

	private ghostNode:GenericDiagramNode;
	

	constructor(node:GenericDiagramNode,newDouble:boolean,newDashed:boolean,ghostNode?:GenericDiagramNode){
		super();
		this.node=node;
		this.oldDouble=this.node.doubleBorder;
		this.oldDashed=this.node.dashedBorder;
		this.newDouble=newDouble;
		this.newDashed=newDashed;
		this.ghostNode=ghostNode;
	}

	execute():void{
		this.node.doubleBorder=this.newDouble;
		this.node.dashedBorder=this.newDashed;
		this.letGhostCopyFromOriginal();
	}

	unExecute():void{
		this.node.doubleBorder=this.oldDouble;
		this.node.dashedBorder=this.oldDashed;
		this.letGhostCopyFromOriginal();
	}

	letGhostCopyFromOriginal(){
		if(this.ghostNode!=null){
			this.ghostNode.dashedBorder=this.node.dashedBorder;
			this.ghostNode.doubleBorder=this.node.doubleBorder;
		}
	}

	getName():string{
		return "Change node outline";
	}
}