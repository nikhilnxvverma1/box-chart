import { Command,CompositeCommand } from './command';
import { DiagramModel,DiagramEdge,DiagramNode } from '../../model/worksheet';

/** Used during dragging things from the drawer/sidebar etc. */
export class CreateAndMoveCommand extends CompositeCommand{

	constructor(){
		super();
		
	}

	getName():string{
		return "Drag and drop item(s).";
	}
}