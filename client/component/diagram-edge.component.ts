import { Component,Input } from '@angular/core';
import { Point } from '../model/geometry';
import { DiagramEdge } from '../model/worksheet';
import { Workspace } from '../editor/workspace';

@Component({
  selector: 'diagram-edge',
  templateUrl: '../view/diagram-edge.component.html',
})
export class DiagramEdgeComponent  {
	@Input('workspace') workspace:Workspace;
	@Input('edge') edge:DiagramEdge;
}