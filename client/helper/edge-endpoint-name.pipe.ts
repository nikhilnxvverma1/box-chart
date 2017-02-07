import { Pipe, PipeTransform } from '@angular/core';
import { EndpointStyle } from '../model/worksheet';

/*
 * Gives the name for the specified edge endpoint.Useful for alt text
 * 
 * Usage:
 *   value | edgeEndpointName
*/
@Pipe({name: 'edgeEndpointName'})
export class EdgeEndpointName implements PipeTransform {
  transform(value:EndpointStyle): string {
	  switch(value){
			case EndpointStyle.None:
				return "None";
			case EndpointStyle.EmptyArrow:
				return "Empty Arrow";
			case EndpointStyle.FilledArrow:
				return "Filled Arrow";
			case EndpointStyle.EmptyDiamond:
				return "Empty Diamond";
			case EndpointStyle.FilledDiamond:
				return "Filled Diamond";
			
			default:
				return "None";
		}	
	}
}
