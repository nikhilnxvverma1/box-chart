import { Command } from './command/command';
import { Worksheet,DiagramModel,DiagramNode,DiagramEdge } from '../model/worksheet';

/** Current configuration of the workspace on account of user actions so far. */
export class Workspace{

	private _worksheet:Worksheet;
	private history:Command[]=[];
	private future:Command[]=[];
	private _selection:DiagramModel=new DiagramModel();
	creationDrawerIsOpen:boolean=false;

	constructor(worksheet:Worksheet){
		this._worksheet=worksheet;
	}

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

	get worksheet():Worksheet{
		return this._worksheet;
	}

	get selection():DiagramModel{
		return this._selection;
	}

	addNodeToSelection(node:DiagramNode){
		if(this._selection.containsNode(node)){
			return;
		}
		this._selection.diagramNodeList.push(node);
	}

	removeNodeToSelection(node:DiagramNode){
		let index=this._selection.diagramNodeList.indexOf(node);
		if(index!=-1){
			this._selection.diagramNodeList.splice(index,1);
		}
	}

	addEdgeToSelection(edge:DiagramEdge){
		if(this._selection.containsEdge(edge)){
			return;
		}
		this._selection.diagramEdgeList.push(edge);
	}

	removeEdgeToSelection(edge:DiagramEdge){
		let index=this._selection.diagramEdgeList.indexOf(edge);
		if(index!=-1){
			this._selection.diagramEdgeList.splice(index,1);
		}
	}
}