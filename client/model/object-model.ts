import { TypeNode,FieldMember,PrimitiveType,VariableDefinition } from './semantic-model';
import { ClassDefinition,InterfaceDefinition } from './semantic-model';

/** Root class that holds all data objects entries in one place */
export class ObjectModel{
	classObjectList:ClassObjectData[]=[];
	interfaceObjectList:InterfaceObjectData[]=[];
	collectionList:Collection[]=[];
}

/** Denotes data value weather represented by primitives, class objects or interface objects */
export interface Data{
	isPrimitive():boolean;
	stringRepresentation():string;
}

/** Holds a primitive value as a string */
export class PrimitiveData implements Data{
	value:string;
	type:PrimitiveType;

	formatted():string{
		return this.value;// TODO format as per the data type eg: 'char',"string", 34.0, 23, true/false etc.
	}

	isPrimitive():boolean{
		return true;
	}

	stringRepresentation():string{
		return this.formatted();
	}
}

/** A struct that denotes an object which could either be a class object or an interface implementation */
export abstract class ObjectData implements Data{
	/** A 'ToString()' equivalent description of this object */
	description:string;

	abstract getTypeNode():TypeNode;
	isPrimitive():boolean{
		return true;
	}

	stringRepresentation():string{
		return this.description;
	}
}

/** An implementation of an interface */
export class InterfaceObjectData extends ObjectData{
	interfaceDefinition:InterfaceDefinition;
	
	getTypeNode():InterfaceDefinition{
		return this.interfaceDefinition;
	}
}

/** A concrete object holding several values for its fields */
export class ClassObjectData extends ObjectData{

	classDefinition:ClassDefinition;
	description:string;
	fieldDataList:DataHolder[]=[];

	getTypeNode():ClassDefinition{
		return this.classDefinition;
	}
}

/** Holds data for a variable. Weather primitive(through PrimitiveData) or a reference(through ObjectData or Collection) */
export class DataHolder{
	private variable:VariableDefinition;
	private data:Data;

	constructor(variable:VariableDefinition){
		this.variable=variable;
	}
}

/** Abstraction over different types of data collections  */
export abstract class Collection implements Data{
	/** Generic type that this collection is storing. */
	generic:TypeNode;
	/** Identifier name of this collection if it exists on its own. This can also be null. */
	name:string;
	/** Total nodes in this collection. (Does not mean capacity) */
	count:number;

	isPrimitive():boolean{
		return false;
	}

	abstract stringRepresentation():string;
}

/** Data collection of Array types with a generic */
export class ArrayData extends Collection{

	data:Data[];

	isPrimitive():boolean{
		return false;
	}

	stringRepresentation():string{
		return this.generic.getName()+"[]";
	}
}

/** Data holder for the collection with a single link */
export class SinglyLinkedNode{
	next:SinglyLinkedNode;
	data:Data;
}

/** Data holder for the collection with a two links */
export class DoublyLinkedNode{
	previous:DoublyLinkedNode;
	next:DoublyLinkedNode;
	data:Data;
}

/** Data holder for graph collection comprising of nodes and edges */
export class GraphNode{
	data:Data;
	outgoingEdges:GraphEdge[];
	incomingEdge:GraphEdge[];
}

/** Edge relationship of a graph node based collection represented by this class */
export class GraphEdge{
	from:GraphNode;
	to:GraphNode;
}

/** Data collection of a doubly linked list */
export class LinkedListData extends Collection{

	start:DoublyLinkedNode;

	stringRepresentation():string{
		return "LinkedList<"+this.generic.getName()+">";
	}
}

/** Data collection of a queue */
export class QueueData extends Collection{

	start:SinglyLinkedNode;
	end:SinglyLinkedNode;
	
	stringRepresentation():string{
		return "Queue<"+this.generic.getName()+">";
	}
}

/** Data collection of a stack */
export class StackData extends Collection{

	top:SinglyLinkedNode;
	
	stringRepresentation():string{
		return "Stack<"+this.generic.getName()+">";
	}
}

/** Data collection of a graph */
export class GraphData extends Collection{

	node:GraphNode[];

	stringRepresentation():string{
		return "Graph<"+this.generic.getName()+">";
	}
}