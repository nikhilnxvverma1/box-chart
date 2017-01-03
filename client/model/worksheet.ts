import { Geometry,Rect,LinkedPoint,Point,Circle } from './geometry';
import { SemanticModel,ClassDefinition,InterfaceDefinition } from './semantic-model';
import { TrackingPoint } from './tracking-point';
import { ClassObjectData,InterfaceObjectData,Collection } from './object-model';

//the following constants are used to identify objects of this data model in JSON
export const WorksheetType="Worksheet";//TODO may not be required

export class Worksheet{
	semanticModel:SemanticModel;
	commentList:Comment[]=[];
	classDiagramList:ClassDiagramNode[]=[];
	interfaceDiagramList:InterfaceDiagramNode[]=[];
	classObjectListDiagramList:ClassObjectDiagram[]=[];
	interfaceObjectListDiagramList:InterfaceObjectDiagram[]=[];
}

/** 
 * A node in the diagram graph that contains both the incoming and outgoing edges.
 * A diagram node is also a visual block to display and additionally also holds geometry.
 */
export abstract class DiagramNode{
	/** Used exclusively as a flag to tell weather this block is selected in the editor or not */
	selected:boolean=false;
	incomingEdges:DiagramEdge[]=[];
	outgoingEdges:DiagramEdge[]=[];
	/** Gives the geometrical shape for this diagram block */
	abstract getGeometry():Geometry;
	/** Each diagram block has a certain cell requirement which can be found using this method */
	abstract cellRequirement():number;
}

/** 
 * An edge in the diagram graph connecting two nodes. Geometrically, it houses the tracking point of the geometry of the two nodes.
 * Additionally(and optionally) it also contains label and intermediate points that may be required for denoting linked line segments.
 */
export class DiagramEdge{
	from:DiagramNode;
	to:DiagramNode;
	fromPoint:TrackingPoint;
	toPoint:TrackingPoint;

	/**Optional label on edge*/
	label:string;

	/** The start of a doubly linked list of points that make up the line segments */
	intermediatePointStart:LinkedPoint;

	/** The end of a doubly linked list of points that make up the line segments */
	intermediatePointLast:LinkedPoint;
}

/** A rect diagram node used for holding class definition, its associated geometry and collapse flags for field and method blocks*/
export class ClassDiagramNode extends DiagramNode{
	static readonly DEFAULT_WIDTH=300;
	classDefinition:ClassDefinition;
	rect:Rect;
	fieldsCollapsed:boolean;
	methodsCollapsed:boolean;

	constructor(classDefinition:ClassDefinition,x:number,y:number){
		super();
		this.classDefinition=classDefinition;
		this.rect=new Rect(x,y,ClassDiagramNode.DEFAULT_WIDTH,250);
	}

	getGeometry():Geometry{
		return this.rect;
	}

	cellRequirement():number{
		var fieldCells = !this.fieldsCollapsed ? this.classDefinition.fieldList.length : 1;
		var methodCells = !this.methodsCollapsed ? this.classDefinition.methodList.length : 0;
		return 1 + fieldCells + methodCells;
	}
}

/** A rect diagram node used for holding interface definition, its associated geometry and collapse flag for method block*/
export class InterfaceDiagramNode extends DiagramNode{
	interfaceDefinition:InterfaceDefinition;
	rect:Rect;
	methodsCollapsed:boolean;

	constructor(interfaceDefinition:InterfaceDefinition,x:number,y:number){
		super();
		this.interfaceDefinition=interfaceDefinition;
		this.rect=new Rect(x,y,ClassDiagramNode.DEFAULT_WIDTH,250);
	}

	getGeometry():Geometry{
		return this.rect;
	}

	cellRequirement():number{
		var methodCells = !this.methodsCollapsed ? this.interfaceDefinition.methodList.length : 0;
		return 1 + methodCells;
	}
}

/** A single line comment block thats put in a rect */
export class SingleLineComment extends DiagramNode{

	comment:string;
	rect:Rect;

	getGeometry():Geometry{
		return this.rect;
	}

	cellRequirement():number{
		return 1;
	}
}

/** A multi line comment block thats put in a rect */
export class MultiLineComment extends DiagramNode{

	lines:string[]=[];
	rect:Rect;

	getGeometry():Geometry{
		return this.rect;
	}

	cellRequirement():number{
		return this.lines.length;
	}
}

export abstract class ObjectDiagram extends DiagramNode{
	/** If true, this diagram is a rectangle and not a circle */
	rectNotCircle:boolean;
	rect:Rect;
	circle:Circle;

	getGeometry():Geometry{
		return this.rect;
	}

}

export class ClassObjectDiagram extends ObjectDiagram{
	classObject:ClassObjectData;

	cellRequirement():number{
		//header + description + field data list
		return 1+1+this.classObject.fieldDataList.length;
	}
}

export class InterfaceObjectDiagram extends ObjectDiagram{
	interfaceObject:InterfaceObjectData;

	cellRequirement():number{
		//header + description 
		return 1+1;
	}
}