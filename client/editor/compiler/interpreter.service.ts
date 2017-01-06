import { Injectable } from '@angular/core';
import { FieldMember,MethodMember,MethodPrototype } from '../../model/semantic-model';
import * as lexer from './lexical-analyzer';
import * as parser from './syntax-parser';
@Injectable()
export class InterpreterService{
	
	parseFieldMember(input:string):FieldMember{
		console.log("Parsing for field member "+input);
		var lexemeList=lexer.getLexemeList(input);
		for(var lexeme of lexemeList){
			console.log(lexeme);
		}
		return null;
	}
}
