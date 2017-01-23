import { Command } from './command/command';
import { Worksheet,DiagramModel } from '../model/worksheet';

/** Current configuration of the workspace on account of user actions so far. */
export class Workspace{
	private history:Command[]=[];
	private future:Command[]=[];
	private selection:DiagramModel;
	creationPopupIsOpen:boolean=false;

	commit(command:Command){
		this.history.push(command);
		this.future.splice(0,this.future.length);
	}

	undo(){
		if(this.history.length){
			console.debug("history stack is empty");
			return;
		}
		
		let latestCommand=this.history.pop();
		latestCommand.unExecute();//undo it
		this.future.push(latestCommand);
	}

	redo(){
		if(this.future.length){
			console.debug("future stack is empty");
			return;
		}
		
		let undoneCommand=this.history.pop();
		undoneCommand.execute();//redo it back
		this.history.push(undoneCommand);
	}
}