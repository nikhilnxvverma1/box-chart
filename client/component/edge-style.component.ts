import { Component,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { OnChanges,OnInit } from '@angular/core';
import { animate,trigger,state,style,transition,AnimationTransitionEvent } from '@angular/core';
import { Point } from '../model/geometry';
import { DiagramEdge,DiagramNode,GenericDiagramNode } from '../model/worksheet';
import { LineStyle,DashStyle,EndpointStyle } from '../model/worksheet';
import { Workspace } from '../editor/workspace';
import { RemoveCommand } from '../editor/command/remove';
import { ChangeEdgeStyleCommand } from '../editor/command/change-edge-style';
import { ChangeEdgeLabelCommand } from '../editor/command/change-edge-label';

const WIDTH=200;
const HEIGHT=150;


@Component({
  selector: 'edge-style',
  templateUrl: '../view/edge-style.component.html',
  animations:[
    trigger('styleOptionsOpen',[
        state('open',style({
            width:WIDTH+"px",
            height:HEIGHT+"px"
        })),
        state('closed', style({
            width:0+"px",
            height:0+"px"
        })),
        transition('open => closed', animate('100ms ease-in')),
        transition('closed => open', animate('200ms ease-out'))
    ])
  ]
})
export class EdgeStyleComponent implements OnChanges{
	
	@Input() workspace:Workspace;
	@Input() edge:DiagramEdge;
	@Input() positionOfTheCursor:Point;
	editedEdgeLabel:string;

	private follow:Point=new Point(0,0);

	ngOnChanges(changes:SimpleChanges){
		
		if (changes['positionOfTheCursor'] != null ) {//only because of an angular 2 bug
			this.followPoint(changes['positionOfTheCursor'].currentValue);
			
		}
	}

	followPoint(p:Point){
		this.follow=this.edge.lineSegment.getTrackingPoint().gravitateTowards(p,30);
	}

	openStyleOptions(event:MouseEvent){
		this.workspace.edgeStyleOptionsIsOpen=true;
		console.debug("Opened style options");
		event.stopPropagation();
	}

	removeEdge(event:MouseEvent){
		console.debug("Removing edge from diagram model");
		this.workspace.edgeStyleOptionsIsOpen=true;
		this.workspace.commit(new RemoveCommand(this.workspace,this.workspace.copySelection()),true);
		this.workspace.clearSelection();
	}

	changeDashing(dashStyle:DashStyle,event:MouseEvent){
		let newStyle=this.edge.style.clone();
		newStyle.dashStyle=dashStyle;
		this.workspace.commit(new ChangeEdgeStyleCommand(this.edge,newStyle),true);
	}

	preventClosingOfOptions(event:MouseEvent){
		event.stopPropagation();
	}

	changeLabel(event:KeyboardEvent){
		if(event.keyCode==13){//commit
			console.debug("User changed edge content to "+this.editedEdgeLabel);
			this.workspace.edgeStyleOptionsIsOpen=false;
			this.workspace.commit(new ChangeEdgeLabelCommand(this.edge,this.editedEdgeLabel),true);
		}else if(event.keyCode==27){//cancel
			this.workspace.edgeStyleOptionsIsOpen=false;
		}
	}

	afterMenuOpens(event:AnimationTransitionEvent){
		this.editedEdgeLabel=this.edge.label;
	}

	private getNextEndpointAfter(endpointStyle:EndpointStyle):EndpointStyle{
		if(endpointStyle+1<=EndpointStyle.FilledDiamond){
			return endpointStyle+1;
		}else{
			return EndpointStyle.None;
		}
	}

	toggleFromEndpoint(event:MouseEvent){
		let nextEndpoint=this.getNextEndpointAfter(this.edge.style.fromEndpoint);
		let newStyle=this.edge.style.clone();
		newStyle.fromEndpoint=nextEndpoint;
		this.workspace.commit(new ChangeEdgeStyleCommand(this.edge,newStyle),true);
		this.workspace.fromEndpointPreference=nextEndpoint;
	}

	toggleToEndpoint(event:MouseEvent){
		let nextEndpoint=this.getNextEndpointAfter(this.edge.style.toEndpoint);
		let newStyle=this.edge.style.clone();
		newStyle.toEndpoint=nextEndpoint;
		this.workspace.commit(new ChangeEdgeStyleCommand(this.edge,newStyle),true);
		this.workspace.toEndpointPreference=nextEndpoint;
	}

	fromEndpointOptionShouldComeBeforeTo():boolean{
		let from=this.edge.fromPoint.pointOnGeometry();
		let to=this.edge.toPoint.pointOnGeometry();
		if(from.x==to.x){
			return from.y>to.y;//y goes down
		}else{
			return from.x<to.x;
		}
	}

	edgeEndpointImage(value:EndpointStyle){
		let pathPrefix='../assets/edge-endpoints/';
		switch(value){
			case EndpointStyle.None:
				return pathPrefix+"circle-stop.png";
			case EndpointStyle.EmptyArrow:
				return pathPrefix+"empty-arrow.png";
			case EndpointStyle.FilledArrow:
				return pathPrefix+"filled-arrow.png";
			case EndpointStyle.EmptyDiamond:
				return pathPrefix+"empty-diamond.png";
			case EndpointStyle.FilledDiamond:
				return pathPrefix+"filled-diamond.png";
			
			default:
				return pathPrefix+"circle-stop.png";
		}
	}
}