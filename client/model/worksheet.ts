import { Geometry,Rect,LinkedPoint,Point } from './geometry';
import { SemanticGraph,ClassDefinition,InterfaceDefinition } from './semantic-model';
import { TrackingPoint } from './tracking-point';

//the following constants are used to identify objects of this data model in JSON
export const WorksheetType="Worksheet";//TODO may not be required

export class Worksheet{
	semanticGraph:SemanticGraph;
	commentList:Comment[]=[];
}

/** 
 * A node in the diagram graph that contains both the incoming and outgoing edges.
 * A diagram node is also a visual block to display and additionally also holds geometry.
 */
export abstract class DiagramNode{
	incomingEdges:DiagramEdge[]=[];
	outgoingEdges:DiagramEdge[]=[];
	abstract getGeometry():Geometry;
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
	classDefinition:ClassDefinition;
	rect:Rect;
	fieldsCollapsed:boolean;
	methodsCollapsed:boolean;

	getGeometry():Geometry{
		return this.rect;
	}
}

/** A rect diagram node used for holding interface definition, its associated geometry and collapse flag for method block*/
export class InterfaceDiagramNode extends DiagramNode{
	interfaceDefinition:InterfaceDefinition;
	rect:Rect;
	methodsCollapsed:boolean;

	getGeometry():Geometry{
		return this.rect;
	}
}

/** A single or multi line comment block thats put in a rect */
export class Comment extends DiagramNode{

	isMultiLine:boolean;
	comment:string;
	rect:Rect;

	getGeometry():Geometry{
		return this.rect;
	}
}