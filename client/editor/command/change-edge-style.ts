import { Command } from './command';
import { DiagramModel,DiagramNode,DiagramEdge } from '../../model/worksheet';
import { LineStyle } from '../../model/worksheet';

export class ChangeEdgeStyleCommand extends Command {
	
	private edge:DiagramEdge;
	private oldStyle:LineStyle;
	private newStyle:LineStyle;

	constructor(edge:DiagramEdge,newStyle:LineStyle){
		super();
		this.edge=edge;
		this.oldStyle=this.edge.style.clone();
		this.newStyle=newStyle;
	}

	execute():void{
		this.edge.style=this.newStyle;
	}

	unExecute():void{
		this.edge.style=this.oldStyle;
	}

	getName():string{
		return "Change edge style";
	}
}