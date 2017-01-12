import { Pipe, PipeTransform } from '@angular/core';
import { GenericDiagramNode,GenericDiagramNodeType } from '../model/worksheet';

/*
 * Gives the background(mostly svg) for generic type node 
 * @Deprecated (Using inline svgs now)
 * Usage:
 *   value | nodeBg
*/
@Pipe({name: 'nodeBg'})
export class NodeBackground implements PipeTransform {
  transform(value:GenericDiagramNodeType): string {
	  var pathToBg="";
	  switch(value){
			case GenericDiagramNodeType.Rectangle:
				break;
			case GenericDiagramNodeType.Circle:
				break;
			case GenericDiagramNodeType.Diamond:
				break;
			case GenericDiagramNodeType.Ellipse:
				break;
			case GenericDiagramNodeType.StickFigure:
				break;
			case GenericDiagramNodeType.Database:
		}
		return pathToBg;
	}
}
