import { Command } from './command/command';
import { Worksheet,DiagramModel,DiagramNode,DiagramEdge } from '../model/worksheet';

/** Current configuration of the workspace on account of user actions so far. */
export class Workspace{

	private _worksheet:Worksheet;
	private history:Command[]=[];
	private future:Command[]=[];
	private _selection:DiagramModel;
	creationDrawerIsOpen:boolean=false;

	constructor(worksheet:Worksheet){
		this._worksheet=worksheet;
	}

	/** Pushes the command onto history. By specifying true as the second argument, it will also execute before pushing to history */
	commit(command:Command,execute:boolean=false){
		if(execute){
			command.execute();
		}
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

	/** Gets a diagram model that contains items in selection. Can be null if selection is empty*/
	get selection():DiagramModel{
		return this._selection;
	}

	addNodeToSelection(node:DiagramNode){
		if(this._selection==null){
			this._selection=new DiagramModel();
		}
		if(this._selection.containsNode(node)){
			return;
		}
		this._selection.nodeList.push(node);
		node.selected=true;
	}

	removeNodeFromSelection(node:DiagramNode){
		if(this._selection==null) return;

		let index=this._selection.nodeList.indexOf(node);
		if(index!=-1){
			this._selection.nodeList.splice(index,1);
			node.selected=false;
		}
	}

	addEdgeToSelection(edge:DiagramEdge){
		if(this._selection==null){
			this._selection=new DiagramModel();
		}
		if(this._selection.containsEdge(edge)){
			return;
		}
		this._selection.edgeList.push(edge);
		edge.selected=true;
	}

	removeEdgeFromSelection(edge:DiagramEdge){
		if(this._selection==null) return;

		let index=this._selection.edgeList.indexOf(edge);
		if(index!=-1){
			this._selection.edgeList.splice(index,1);
			edge.selected=false;
		}
	}

	/** Resets the selected flag for each node and edge in selection and nullifies the selection diagram model. */
	clearSelection(){
		if(this._selection==null) return;
		
		//reset selected flag of all edges
		for(let edge of this._selection.edgeList ){
			edge.selected=false;
		}

		//reset selected flag of all nodes
		for(let node of this._selection.nodeList ){
			node.selected=false;
		}

		//nullify selection, this ensures that any references to an old selection stay intact.
		this._selection=null;
	}

	/** Makes a copy of the selection diagram model that stays unchanged when the selection changes */
	copySelection():DiagramModel{
		let copy=new DiagramModel();

		//add off all edges to new copy's list
		for(let edge of this._selection.edgeList ){
			copy.edgeList.push(edge);
		}

		//add off all nodes to new copy's list
		for(let node of this._selection.nodeList ){
			copy.nodeList.push(node);
		}

		return copy;
	}

	/** Tells if the selection contains the specified node or not */
	selectionContainsNode(node:DiagramNode):boolean{
		return this._selection!=null && this._selection.containsNode(node);
	}

	/** Tells if the selection contains the specified Edge or not */
	selectionContainsEdge(edge:DiagramEdge):boolean{
		return this._selection!=null && this._selection.containsEdge(edge);
	}
}