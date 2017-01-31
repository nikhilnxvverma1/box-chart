import { Component,Input } from '@angular/core';
import { Point } from '../model/geometry';
import { DiagramEdge,Color } from '../model/worksheet';
import { Workspace } from '../editor/workspace';

const EDGE_SELECTION_COLOR=new Color(152,185,231);
@Component({
  selector: 'diagram-edge',
  templateUrl: '../view/diagram-edge.component.html',
})
export class DiagramEdgeComponent  {
	@Input('workspace') workspace:Workspace;
	@Input('edge') edge:DiagramEdge;
	@Input("soloSelected") soloSelected:boolean;

	edgeColor():Color{
		if(this.edge.selected){
			return EDGE_SELECTION_COLOR;
		}else{
			return this.edge.style.color;
		}
	}
}