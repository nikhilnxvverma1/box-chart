import { Pipe, PipeTransform } from '@angular/core';
import { AccessSpecifier } from '../model/semantic-model';

/*
 * Gives the symbol for an access specifier
 * 
 * Usage:
 *   value | accessSymbol
*/
@Pipe({name: 'accessSymbol'})
export class AccessSymbol implements PipeTransform {
  transform(value:AccessSpecifier): string {
	  switch(value){
			case AccessSpecifier.Private:
				return "-";
			case AccessSpecifier.Protected:
				return "#";
			case AccessSpecifier.Public:
				return "+";
			case AccessSpecifier.Default:
			default:
				return " ";
		}	
	}
}
