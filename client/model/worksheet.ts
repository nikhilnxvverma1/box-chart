import { Geometry,Rect,LinkedPoint,Point,Circle } from './geometry';
import { SemanticModel,ClassDefinition,InterfaceDefinition } from './semantic-model';
import { TrackingPoint,CenterTrackingPoint } from './tracking-point';
import { ObjectModel, ClassObjectData, InterfaceObjectData, Collection } from './object-model';

//the following constants are used to identify objects of this data model in JSON
export const WorksheetType="Worksheet";//TODO may not be required

/** Containment of all worksheet related data is maintained in the model. */
export class Worksheet{
	/**Record ID in DB */
	rid:string;
	title:string;
	description:string;
	/** Holds the diagram graph of this worksheet. This may need explicit fetching from the server.  */
	diagramModel:DiagramModel;
}

/** 
 * Holds a list of diagram nodes and a list of diagram edges in the worksheet.
 * This model can also be used to hold any selection of diagram nodes and edges,
 * even if they are not part of the worksheet.
 */
export class DiagramModel{
	/** Record Id in DB. Only applicable if model belongs to a worksheet.*/
	rid:string;
	/** List of nodes in graph */
	diagramNodeList:DiagramNode[]=[];
	/** List of edges in graph */
	diagramEdgeList:DiagramEdge[]=[];
}

/** Specifies color in the range 0-255 for four channels. Default is white(255,255,255,255) */
export class Color{
	red:number;
	green:number;
	blue:number;
	alpha:number;

	constructor(r=255,g=255,b=255,a=255){
		this.red=r;
		this.green=g;
		this.blue=b;
		this.alpha=a;
	}

	/** Returns the a hashcode equivalent string like #2343A4 */
	hashCode():string{
		return "#"+this.red.toString(16)+this.green.toString(16)+this.blue.toString(16);
	}
}

/** 
 * A node in the diagram graph that contains both the incoming and outgoing edges.
 * A diagram node is also a visual block to display and additionally also holds geometry.
 */
export abstract class DiagramNode{
	/** Used exclusively as a flag to tell weather this block is selected in the editor or not */
	selected:boolean=false;//TODO this should be a part of the component
	/** A unique identifier for this node */
	id:string;
	/** A string that describes this node */
	label:string;
	/** Color of the background */
	background=new Color();//white by default
	/** Color of the foreground(text) */
	foreground=new Color(0,0,0,0);
	/** Color of the stroke */
	stroke=new Color(0,0,0,0);

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
	private _from:DiagramNode;
	private _to:DiagramNode;
	private _fromPoint:TrackingPoint;
	private _toPoint:TrackingPoint;

	/**Optional label on edge*/
	label:string;

	/** The start of a doubly linked list of points that make up the line segments */
	private _intermediatePointStart:LinkedPoint;

	/** The end of a doubly linked list of points that make up the line segments */
	private _intermediatePointLast:LinkedPoint;

	get from():DiagramNode{
		return this._from;
	}

	set from(value:DiagramNode){
		this._from=value;
		this._fromPoint=new CenterTrackingPoint(value.getGeometry());
	}

	get to():DiagramNode{
		return this._to;
	}

	set to(value:DiagramNode){
		this._to=value;
		this._toPoint=new CenterTrackingPoint(value.getGeometry());
	}

	get fromPoint():TrackingPoint{
		return this._fromPoint;
	}

	set fromPoint(value:TrackingPoint){
		this._fromPoint=value;
	}

	get toPoint():TrackingPoint{
		return this._toPoint;
	}

	set toPoint(value:TrackingPoint){
		this._toPoint=value;
	}

	
}

/** Identification for the type of generic node */
export enum GenericDiagramNodeType{

	//WARNING: These number are connected to the values in the template. Don't change them

	Rectangle=1,
	Circle=2,
	Diamond=3,
	Ellipse=4,
	RoundedRectangle=5,
	StickFigure=6,
	Database=7,
	Parallelogram=8

	//TODO add more below, not in the middle
}

/** Returns a rectangle whose dimensions are based on the generic node type */
export function getRectForGenericNode(nodeType:GenericDiagramNodeType,x=0,y=0){
	var width=0;
	var height=0;
	switch(nodeType){
		case GenericDiagramNodeType.Rectangle:
			width=200;
			height=30;
			break;
		case GenericDiagramNodeType.Circle:
			width=100;
			height=100;
			break;
		case GenericDiagramNodeType.Diamond:
			width=100;
			height=100;
			break;
		case GenericDiagramNodeType.Ellipse:
			width=200;
			height=60;
			break;
		case GenericDiagramNodeType.RoundedRectangle:
			width=200;
			height=60;
			break;
		case GenericDiagramNodeType.StickFigure:
			width=80;
			height=120;
			break;
		case GenericDiagramNodeType.Database:
			width=80;
			height=120;
		case GenericDiagramNodeType.Parallelogram:
			width=200;
			height=80;
			break;
	}
	return new Rect(x,y,width,height);
}

export class GenericDiagramNode extends DiagramNode{
	private static readonly Width=200;
	private static readonly Height=30;

	private _type:GenericDiagramNodeType;
	private _rect:Rect;
	private _content:string;

	constructor(type:GenericDiagramNodeType){
		super();
		this._type=type;
		this._rect=getRectForGenericNode(this._type);
		this._content="Content";
	}

	getGeometry():Geometry{
		return this._rect;
	}
	
	cellRequirement():number{
		return 0;
	}

	get rect():Rect{
		return this._rect;
	}

	get type():GenericDiagramNodeType{
		return this._type;
	}

	get content():string{
		return this._content;
	}

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

	constructor(classObject:ClassObjectData,x:number,y:number){
		super();
		this.classObject=classObject;
		this.rect=new Rect(x,y,ClassDiagramNode.DEFAULT_WIDTH,250);
	}

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