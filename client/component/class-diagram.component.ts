import { Component } from '@angular/core';
import { ClassDiagramNode } from '../model/worksheet';

@Component({
  selector: 'class-diagram',
  templateUrl: '../view/class-diagram.component.html',
})
export class ClassDiagramComponent  {
	classDiagram:ClassDiagramNode;

	
}