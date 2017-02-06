import { Command } from './command';
import { DiagramModel,DiagramNode,DiagramEdge } from '../../model/worksheet';
import { GenericDiagramNode } from '../../model/worksheet';
import { LineStyle } from '../../model/worksheet';
import { Geometry } from '../../model/geometry';
import { TrackingPoint } from '../../model/tracking-point';

export class ChangeNodeShapeCommand extends Command {
	
	private node:GenericDiagramNode;
	private oldGeometry:Geometry;
	private oldTrackingPointList:TrackingPointInfo[];

	private newGeometry:Geometry;
	private newTrackingPointList:TrackingPointInfo[];

	private ghostNode:GenericDiagramNode;
	
	constructor(node:GenericDiagramNode,newShape:Geometry,ghostNode?:GenericDiagramNode){
		super();
		this.node=node;
		this.oldGeometry=this.node.geometry;
		this.newGeometry=newShape;
		this.ghostNode=ghostNode;

		this.saveOldTrackingPointInfo();
		this.generateNewTrackingPointInfo();
		
	}

	private saveOldTrackingPointInfo(){
		this.oldTrackingPointList=[];
		//store tracking points for all outgoing edges
		for(let edge of this.node.outgoingEdges){
			this.oldTrackingPointList.push(new TrackingPointInfo(edge.fromPoint,edge,true));
		}

		//store tracking points for all incoming edges
		for(let edge of this.node.incomingEdges){
			this.oldTrackingPointList.push(new TrackingPointInfo(edge.toPoint,edge,false));
		}
	}

	private generateNewTrackingPointInfo(){
		this.newTrackingPointList=[];
		//generate new tracking points for all outgoing edges
		for(let edge of this.node.outgoingEdges){
			let converted=this.convertToNewTrackingPointType(edge.fromPoint);
			this.newTrackingPointList.push(new TrackingPointInfo(converted,edge,true));
		}

		//generate new tracking points for all incoming edges
		for(let edge of this.node.incomingEdges){
			let converted=this.convertToNewTrackingPointType(edge.toPoint);
			this.newTrackingPointList.push(new TrackingPointInfo(converted,edge,false));
		}
	}

	private convertToNewTrackingPointType(trackingPoint:TrackingPoint):TrackingPoint{
		let newTrackingPoint=this.newGeometry.getTrackingPoint();

		//find the point to gravitate towards
		let point=trackingPoint.pointOnGeometry();
		newTrackingPoint.gravitateTowards(point);

		return newTrackingPoint;
	}

	private apply(trackingPointInfoList:TrackingPointInfo[]){
		for(let trackingPointInfo of trackingPointInfoList){
			trackingPointInfo.apply();
		}
	}

	execute():void{
		this.node.geometry=this.newGeometry;
		this.apply(this.newTrackingPointList);
		this.letGhostCopyFromOriginal();
	}

	unExecute():void{
		this.node.geometry=this.oldGeometry;
		this.apply(this.oldTrackingPointList);
		this.letGhostCopyFromOriginal();
	}

	letGhostCopyFromOriginal(){
		if(this.ghostNode!=null){
			//ghost should retain its position
			let oldPosition=this.ghostNode.geometry.getCenter();
			this.ghostNode.geometry=this.node.geometry.clone().setPosition(oldPosition);
		}
	}

	getName():string{
		return "Change node's shape";
	}
}

class TrackingPointInfo{
	constructor(
		public trackingPoint:TrackingPoint,
		public edge:DiagramEdge,
		public isFromPoint:boolean
		){}

	apply(){
		if(this.isFromPoint){
			this.edge.fromPoint=this.trackingPoint;
		}else{
			this.edge.toPoint=this.trackingPoint;
		}
	}
}