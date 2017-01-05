import { Injectable } from '@angular/core';
import { FieldMember,MethodMember,MethodPrototype } from '../../model/semantic-model';
@Injectable()
export class InterpreterService{
	
	parseFieldMember(input:string):FieldMember{
		console.log("Parsing for field member "+input);
		return null;
	}
}
