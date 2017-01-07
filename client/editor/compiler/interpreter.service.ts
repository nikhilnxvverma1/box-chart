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

		this.testDummyGrammer('',this.makeDummyGrammer());
		return null;
	}

	makeDummyGrammer():parser.ContextFreeGrammer{
		var s=new parser.NonTerminal(0);
		var a=new parser.NonTerminal(1);

		var ta=new parser.Terminal(lexer.LexemeType.Minus);
		var tb=new parser.Terminal(lexer.LexemeType.Plus);

		var cfg=new parser.ContextFreeGrammer(s);
		cfg.variableList.push(s,a);
		cfg.terminalList.push(ta,tb);

		cfg.relation.push(new parser.Rule(s,a,a));
		cfg.relation.push(new parser.Rule(a,ta,a));
		cfg.relation.push(new parser.Rule(a,tb));
		cfg.augumentGrammer();
		return cfg;
	}

	testDummyGrammer(input:string,cfg:parser.ContextFreeGrammer):parser.ParseTree{
		

		return null;
		
	}
}
