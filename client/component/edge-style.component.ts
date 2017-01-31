import { Component,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { OnChanges,OnInit } from '@angular/core';
import { animate,trigger,state,style,transition } from '@angular/core';
import { Point } from '../model/geometry';
import { DiagramEdge,DiagramNode,GenericDiagramNode } from '../model/worksheet';
import { Workspace } from '../editor/workspace';
import { LinkNodesCommand,NodeLinkingStatus } from '../editor/command/link-nodes';

const WIDTH=200;
const HEIGHT=250;


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
		this.workspace.styleOptionsIsOpen=true;
		console.debug("Opened style options");
		event.stopPropagation();
	}
}