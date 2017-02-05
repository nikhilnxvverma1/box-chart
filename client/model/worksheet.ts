import { Geometry, GeometryType, Rect, LinkedPoint, Point, Circle, LineSegment, geometryFromJSON } from './geometry';
import { SemanticModel,ClassDefinition,InterfaceDefinition } from './semantic-model';
import { TrackingPoint,CenterTrackingPoint,trackingPointFromJSON } from './tracking-point';
import { ObjectModel, ClassObjectData, InterfaceObjectData, Collection } from './object-model';
import * as util from '../utility/common';

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
	
	/** List of nodes in graph */
	nodeList:DiagramNode[]=[];
	/** List of edges in graph */
	edgeList:DiagramEdge[]=[];

	/** Checks weather a given node exists in this diagram node or not */
	containsNode(node:DiagramNode):boolean{
		return this.nodeList.indexOf(node)!=-1;
	}

	/** Checks weather a given edge exists in this diagram node or not */
	containsEdge(edge:DiagramEdge):boolean{
		return this.edgeList.indexOf(edge)!=-1;
	}

	toJSON():any{
		let json:any={};
		
		//set an id on each node and auto increment it
		let autoId=0;

		//add all nodes to json after setting their ids 
		json.nodeList=[];
		//this must be done before nodes because edges have use node's ids for inter referencing
		for(let node of this.nodeList){
			node.id=autoId++;
			json.nodeList.push(node.toJSON());
		}

		//add all edges to json after setting their ids
		json.edgeList=[];
		for(let edge of this.edgeList){
			edge.id=autoId++;
			json.edgeList.push(edge.toJSON());
		}
		return JSON.stringify(json);
	}

	/**Sets the apperance of all nodes to a particular type. */
	setAppearanceOfAllNodesTo(appearance:InteractiveAppearance){
		for(let node of this.nodeList){
			node.appearance=appearance;
		}
	}
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

	toJSON():any{
		let json:any={};
		json.red=this.red;
		json.green=this.green;
		json.blue=this.blue;
		json.alpha=this.alpha;
		return json;
	}

	fromJSON(json:any):Color{
		this.red=json.red;
		this.green=json.green;
		this.blue=json.blue;
		this.alpha=json.alpha;
		return this;
	}

	static objectFromJSON(json:any):Color{
		return new Color().fromJSON(json);
	}
}

/** Identifies the type of node */
export enum DiagramNodeType{
	GenericDiagramNode=1,
	//TODO add more if needed, for now, everything is a GenericDiagramNode
}

export enum InteractiveAppearance{
	Default=1,
	PullingLinkerFrom=2,
	PointingLinkerTo=3,
	Ghost=4
}

/** 
 * A node in the diagram graph that contains both the incoming and outgoing edges.
 * A diagram node is also a visual block to display and additionally also holds geometry.
 */
export abstract class DiagramNode{
	/** Used exclusively as a flag to tell weather this node is selected or not. IMPORTANT only 'Workspace' class should toggle this. */
	selected:boolean=false;
	/** A unique identifier for this node */
	id:number;
	/** A string that describes this node */
	label:string;
	/** Color of the background */
	background=new Color();//white by default
	/** Color of the foreground(text) */
	foreground=new Color(0,0,0,0);
	/** Color of the stroke */
	stroke=new Color(0,0,0,0);
	/** Gives the geometrical shape for this diagram block */
	geometry?:Geometry;

	/** Transient list of all edges to which this node is a 'to' node */
	incomingEdges:DiagramEdge[]=[];
	/** Transient list of all edges to which this node is a 'from' node */
	outgoingEdges:DiagramEdge[]=[];

	/** A temporary and transient variable used for holding appearance of this node based on current interaction status.*/
	appearance:InteractiveAppearance=InteractiveAppearance.Default;

	/** Creates a duplicate of this node with an optional shift and slightly different content. */
	abstract clone(similarButDifferentContent?:boolean,offset?:Point):DiagramNode;
	/** Based on type, a retangular specified bounding size sets the dimensions of this node. */
	abstract setBoundingSize(rect:Rect):void;
	/** Returns JSON representation for this node */
	abstract toJSON():any;
	/**Builds this object from a json representation.Returns the same object for chaining */
	abstract fromJSON(json:any):DiagramNode;
	/** Identifies the type of node */
	abstract get type():DiagramNodeType;

	static objectFromJSON(json:any):DiagramNode{
		if(json.type==DiagramNodeType.GenericDiagramNode){
			return new GenericDiagramNode(json.shapeType).fromJSON(json);
		}
		return null;
	}
}

export enum DashStyle{
	Solid=1,
	Dashed=2,
	Dotted=3
}

export enum EndpointStyle{
	None=1,
	EmptyArrow=2,
	FilledArrow=3,
	EmptyDiamond=4,
	FilledDiamond=5
}

export class LineStyle {
	color: Color = new Color(0, 0, 0);
	dashStyle: DashStyle = DashStyle.Solid;
	fromEndpoint: EndpointStyle = EndpointStyle.None;
	toEndpoint: EndpointStyle = EndpointStyle.None;

	clone():LineStyle{
		let copy=new LineStyle();
		copy.color=new Color(this.color.red,this.color.green,this.color.blue);
		copy.dashStyle=this.dashStyle;
		copy.fromEndpoint=this.fromEndpoint;
		copy.toEndpoint=this.toEndpoint;
		return copy;
	}

	toJSON():any{
		let json:any={};
		json.color=this.color.toJSON();
		json.dashStyle=this.dashStyle;
		json.fromEndpoint=this.fromEndpoint;
		json.toEndpoint=this.toEndpoint;
		return json;
	}

	fromJSON(json:any):LineStyle{
		this.color.fromJSON(json.color);
		this.dashStyle=json.dashStyle;
		this.fromEndpoint=json.fromEndpoint;
		this.toEndpoint=json.toEndpoint;
		return this;
	}

	static objectFromJSON(json:any):LineStyle{
		return new LineStyle().fromJSON(json);
	}
}

/**
 * An edge in the diagram graph connecting two nodes. Geometrically, it houses the tracking point of the geometry of the two nodes.
 * Additionally(and optionally) it also contains label and intermediate points that may be required for denoting linked line segments.
 */
export class DiagramEdge{

	/** Used exclusively as a flag to tell weather this node is selected or not. IMPORTANT only 'Workspace' class should toggle this. */
	selected:boolean=false;
	/** A unique identifier for this node */
	id:number;
	private _from:DiagramNode;
	private _to:DiagramNode;
	private _fromPoint:TrackingPoint;
	private _toPoint:TrackingPoint;

	/**Optional label on edge*/
	label:string;

	/** Presentational attributes of this edge */
	style: LineStyle = new LineStyle();

	/** The start of a doubly linked list of points that make up the line segments */
	private _intermediatePointStart:LinkedPoint;

	/** The end of a doubly linked list of points that make up the line segments */
	private _intermediatePointLast:LinkedPoint;

	get from():DiagramNode{
		return this._from;
	}

	set from(value:DiagramNode){
		this._from=value;
	}

	get to():DiagramNode{
		return this._to;
	}

	set to(value:DiagramNode){
		this._to=value;
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

	get lineSegment():LineSegment{
		return new LineSegment(this.fromPoint.pointOnGeometry(),this.toPoint.pointOnGeometry());
	}

	toJSON():any{
		let json:any={};
		json.id=this.id;
		json.label=this.label;
		json.fromId=this.from.id;
		json.toId=this.to.id;
		json.fromPoint=this.fromPoint.toJSON();
		json.toPoint=this.toPoint.toJSON();
		json.style=this.style.toJSON();
		return json;
	}

	fromJSON(json:any):DiagramEdge{
		this.id=json.id;
		this.label=json.label;
		this.fromPoint=trackingPointFromJSON(json.fromPoint);
		this.toPoint=trackingPointFromJSON(json.toPoint);
		this.style.fromJSON(json.style);
		return this;
	}

	static objectFromJSON(json:any):DiagramEdge{
		return new DiagramEdge().fromJSON(json);
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

/** @deprecated Returns a rectangle whose dimensions are based on the generic node type */
export function getRectForGenericNode(nodeType:GenericDiagramNodeType,x=0,y=0):Geometry{
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

	private _shapeType:GenericDiagramNodeType;
	private _rect:Rect;
	private _content:string;
	private _geometry:Geometry;
	private _doubleBorder:boolean=false;
	private _dashedBorder:boolean=false;

	constructor(type:GenericDiagramNodeType){
		super();
		this._shapeType=type;
		this._geometry=GenericDiagramNode.geometryForType(this._shapeType,new Point(0,0));
		this._content="Content";
	}
	
	cellRequirement():number{
		return 0;
	}

	get rect():Rect{
		return this._rect;
	}

	get shapeType():GenericDiagramNodeType{
		return this._shapeType;
	}

	get content():string{
		return this._content;
	}

	set content(value:string){
		this._content=value;
	}

	set geometry(value:Geometry){
		this._geometry=value;
		this._shapeType=GenericDiagramNode.nodeTypeFromGeometryType(this._geometry.type);
	}

	get geometry():Geometry{
		return this._geometry;
	}

	set shapeType(value:GenericDiagramNodeType){
		this._shapeType=value;
		this._geometry=GenericDiagramNode.geometryForType(this._shapeType,this._geometry.getCenter());
	}

	get type():DiagramNodeType{
		return DiagramNodeType.GenericDiagramNode;
	}

	get doubleBorder():boolean{
		return this._doubleBorder;
	}

	get dashedBorder():boolean{
		return this._dashedBorder;
	}

	set doubleBorder(value:boolean){
		this._doubleBorder=value;
	}

	set dashedBorder(value:boolean){
		this._dashedBorder=value;
	}

	/** Returns type of node based on geometry */
	static nodeTypeFromGeometryType(geometryType:GeometryType):GenericDiagramNodeType{
		if(geometryType==GeometryType.Rect){
			return GenericDiagramNodeType.Rectangle;
		}else if(geometryType==GeometryType.Circle){
			return GenericDiagramNodeType.Circle;
		}//TODO add more
		return GenericDiagramNodeType.Rectangle;//fallback
	}

	/** Returns a rectangle whose dimensions are based on the generic node type */
	static geometryForType(nodeType:GenericDiagramNodeType,centerPosition:Point):Geometry{

		var width=0;
		var height=0;
		switch(nodeType){
			case GenericDiagramNodeType.Rectangle:
				width=100;
				height=30;
				break;
			case GenericDiagramNodeType.Circle:
				width=30;
				height=30;
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

		//return geomtry shape based on type of node
		if(nodeType==GenericDiagramNodeType.Rectangle){
			return new Rect(centerPosition.x-width,centerPosition.y-height,width,height);
		}else if(nodeType==GenericDiagramNodeType.Circle){
			return new Circle(centerPosition,width);//fallback
		}
		return new Rect(centerPosition.x-width,centerPosition.y-height,width,height);//fallback
	}

	clone(similarButDifferentContent?:boolean,offset?:Point):GenericDiagramNode{
		//prepare a content for the duplicate node
		let newContent=this.content;
		if (similarButDifferentContent != null && similarButDifferentContent == true) {
			newContent=util.deriveSimilarButDifferentString(this.content);
		}

		//duplicate the node with the same type
		let newNode=new GenericDiagramNode(this.shapeType);
		newNode.dashedBorder=this.dashedBorder;
		newNode.doubleBorder=this.doubleBorder;
		newNode.content=newContent;
		newNode.selected=false;

		//move it by offset if needed
		if(offset!=null){
			newNode.geometry.moveBy(offset);
		}
		return newNode;
	}

	setBoundingSize(rect:Rect):void{
		//TODO
	}

	toJSON():any{
		let json:any={};
		json.type=this.type;
		json.id=this.id;
		json.label=this.label;
		json.background=this.background.toJSON();
		json.foreground=this.foreground.toJSON();
		json.stroke=this.stroke.toJSON();
		json.geometry=this.geometry.toJSON();
		json.shapeType=this.shapeType;
		json.content=this.content;
		json.doubleBorder=this._doubleBorder;
		json.dashedBorder=this._dashedBorder;
		return json;
	}

	fromJSON(json:any):GenericDiagramNode{
		this.id=json.id;
		this.label=json.label;
		this.background.fromJSON(json.background);
		this.foreground.fromJSON(json.foreground);
		this.stroke.fromJSON(json.stroke);
		this.geometry=geometryFromJSON(json.geometry);
		this.content=json.content;
		this._doubleBorder=json.doubleBorder==null?false:json.doubleBorder;
		this._dashedBorder=json.dashedBorder==null?false:json.dashedBorder;
		return this;
	}

	private jsonReplacer(key:string,value:any):any{

	}

	nodeType():DiagramNodeType{
		return DiagramNodeType.GenericDiagramNode;
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
	
	clone(similarButDifferentContent?:boolean,offset?:Point):DiagramNode{
		return null;
	}

	setBoundingSize(rect:Rect):void{
		this.rect=rect;
	}

	toJSON():any{
		return JSON.stringify(this);
	}

	fromJSON(json:any):DiagramNode{
		return this;
	}

	get type():DiagramNodeType{
		return DiagramNodeType.GenericDiagramNode;
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

	clone(similarButDifferentContent?:boolean,offset?:Point):DiagramNode{
		return null;
	}
	setBoundingSize(rect:Rect):void{
		this.rect=rect;
	}

	toJSON():any{
		return JSON.stringify(this);
	}

	fromJSON(json:any):DiagramNode{
		return this;
	}

	get type():DiagramNodeType{
		return DiagramNodeType.GenericDiagramNode;
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

	clone(similarButDifferentContent?:boolean,offset?:Point):DiagramNode{
		return null;
	}
	setBoundingSize(rect:Rect):void{
		this.rect=rect;
	}

	toJSON():any{
		return JSON.stringify(this);
	}

	fromJSON(json:any):DiagramNode{
		return this;
	}

	get type():DiagramNodeType{
		return DiagramNodeType.GenericDiagramNode;
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

	clone(similarButDifferentContent?:boolean,offset?:Point):DiagramNode{
		return null;
	}
	setBoundingSize(rect:Rect):void{
		this.rect=rect;
	}

	toJSON():any{
		return JSON.stringify(this);
	}

	fromJSON(json:any):DiagramNode{
		return this;
	}

	get type():DiagramNodeType{
		return DiagramNodeType.GenericDiagramNode;
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

	clone(similarButDifferentContent?:boolean,offset?:Point):DiagramNode{
		return null;
	}
	setBoundingSize(rect:Rect):void{
		this.rect=rect;
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

	toJSON():any{
		return JSON.stringify(this);
	}

	fromJSON(json:any):DiagramNode{
		return this;
	}

	get type():DiagramNodeType{
		return DiagramNodeType.GenericDiagramNode;
	}
}

export class InterfaceObjectDiagram extends ObjectDiagram{
	interfaceObject:InterfaceObjectData;

	cellRequirement():number{
		//header + description 
		return 1+1;
	}

	toJSON():any{
		return JSON.stringify(this);
	}

	fromJSON(json:any):DiagramNode{
		return this;
	}

	get type():DiagramNodeType{
		return DiagramNodeType.GenericDiagramNode;
	}
}