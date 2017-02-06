import { Command } from './command';
import { DiagramModel,DiagramNode,DiagramEdge,GenericDiagramNode } from '../../model/worksheet';
import { LineStyle } from '../../model/worksheet';
import * as util from '../../utility/common';

export class ChangeEdgeLabelCommand extends Command {
	
	private edge:DiagramEdge;
	private oldContent:string;
	private newContent:string;

	constructor(edge:DiagramEdge,newContent:string){
		super();
		this.edge=edge;
		this.oldContent=this.edge.label;
		this.newContent=newContent;
	}

	execute():void{
		this.edge.label=this.newContent;
	}

	unExecute():void{
		this.edge.label=this.oldContent;
	}

	getName():string{
		return "Change edge label";
	}
}