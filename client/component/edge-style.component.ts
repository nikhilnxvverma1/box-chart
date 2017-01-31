import { Component,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { OnChanges,OnInit } from '@angular/core';
import { Point } from '../model/geometry';
import { DiagramEdge,DiagramNode,GenericDiagramNode } from '../model/worksheet';
import { Workspace } from '../editor/workspace';
import { LinkNodesCommand,NodeLinkingStatus } from '../editor/command/link-nodes';

@Component({
  selector: 'edge-style',
  templateUrl: '../view/edge-style.component.html',
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
		console.debug("follow:"+this.follow.toString());
	}
}