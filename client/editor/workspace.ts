import { Command } from './command/command';
import { Worksheet,DiagramModel,DiagramNode,DiagramEdge } from '../model/worksheet';
import { Point } from '../model/geometry';

/** Current configuration of the workspace on account of user actions so far. */
export class Workspace{

	private _worksheet:Worksheet;
	private history:Command[]=[];
	private future:Command[]=[];
	private _selection:DiagramModel;
	creationDrawerIsOpen:boolean=false;
	private _cursorPosition:Point;

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

		console.debug(command.getName()+" committed");
	}

	undo(){
		if(this.history.length==0){
			console.debug("history stack is empty");
			return;
		}
		
		let latestCommand=this.history.pop();
		latestCommand.unExecute();//undo it
		this.future.push(latestCommand);
	}

	redo(){
		if(this.future.length==0){
			console.debug("future stack is empty");
			return;
		}
		
		let undoneCommand=this.future.pop();
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

	get cursorPosition():Point{
		return this._cursorPosition;
	}

	set cursorPosition(value:Point){
		this._cursorPosition=value;
	}

	selectionCount():number{
		if(this.selection==null){
			return 0;
		} else {
			return this.selection.nodeList.length+this.selection.edgeList.length;
		}
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

	/** Returns true if argument is the only node selected (O(1)) */
	selectionContainsOnlyNode(node:DiagramNode):boolean{
		return this._selection!=null && this._selection.nodeList.length==1 && this._selection.containsNode(node);
	}

	/** Returns true if argument is the only Edge selected  (O(1)) */
	selectionContainsOnlyEdge(edge:DiagramEdge):boolean{
		return this._selection!=null && this._selection.edgeList.length==1 && this._selection.containsEdge(edge);
	}
}