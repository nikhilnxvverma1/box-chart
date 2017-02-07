import { Pipe, PipeTransform } from '@angular/core';
import { EndpointStyle } from '../model/worksheet';

/*
 * Gives the filename(with the complete path) for the specified edge endpoint.
 * @deprecated Will not work inside img src attribute because
 * webpack could'nt understand the dependency on that image
 * Usage:
 *   value | edgeEndpointImage:'../assets/edge-endpoints/'
*/
@Pipe({name: 'edgeEndpointImage'})
export class EdgeEndpointImage implements PipeTransform {
  transform(value:EndpointStyle,pathPrefix:string): string {
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
