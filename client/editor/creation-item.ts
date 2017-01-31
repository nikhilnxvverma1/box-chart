import { DiagramModel,DiagramNode,DiagramEdge } from '../model/worksheet';
import { GenericDiagramNode,GenericDiagramNodeType } from '../model/worksheet';


function diagramModelFromNode(node:DiagramNode):DiagramModel{
	let diagramModel=new DiagramModel();
	diagramModel.nodeList.push(node);
	return diagramModel;
}

function diagramModelFromEdge(edge:DiagramEdge):DiagramModel{
	let diagramModel=new DiagramModel();
	diagramModel.edgeList.push(edge);
	return diagramModel;
}

export abstract class CreationDrawerItem{
	name:string;
	iconFilename:string;
	abstract diagramModel():DiagramModel;
}

export let creationDrawerList:CreationDrawerItem[]=[
	{
		name:"Rectangle",
		iconFilename:"rectangle-generic-icon.svg",
		diagramModel:()=>{ return diagramModelFromNode(new GenericDiagramNode(GenericDiagramNodeType.Rectangle));}
	},
	{
		name:"Circle",
		iconFilename:"circle-generic-icon.svg",
		diagramModel:()=>{ return diagramModelFromNode(new GenericDiagramNode(GenericDiagramNodeType.Circle));}
	},
];

let extra=[{
		name:"RoundedRectangle",
		iconFilename:"rounded-rectangle-generic-icon.svg",
		diagramModel:()=>{ return diagramModelFromNode(new GenericDiagramNode(GenericDiagramNodeType.RoundedRectangle));}
	},
	{
		name:"Parallelogram",
		iconFilename:"parallelogram-generic-icon.svg",
		diagramModel:()=>{ return diagramModelFromNode(new GenericDiagramNode(GenericDiagramNodeType.Parallelogram));}
	},
	{
		name:"Diamond",
		iconFilename:"diamond-generic-icon.svg",
		diagramModel:()=>{ return diagramModelFromNode(new GenericDiagramNode(GenericDiagramNodeType.Diamond));}
	},
	{
		name:"Ellipse",
		iconFilename:"ellipse-generic-icon.svg",
		diagramModel:()=>{ return diagramModelFromNode(new GenericDiagramNode(GenericDiagramNodeType.Ellipse));}
	},
	{
		name:"StickFigure",
		iconFilename:"stick-figure-generic-icon.svg",
		diagramModel:()=>{ return diagramModelFromNode(new GenericDiagramNode(GenericDiagramNodeType.StickFigure));}
	},
	{
		name:"Database",
		iconFilename:"database-generic-icon.svg",
		diagramModel:()=>{ return diagramModelFromNode(new GenericDiagramNode(GenericDiagramNodeType.Database));}
	}
];
