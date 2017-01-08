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

		var eof=new parser.EndOfFile();
		var table=new parser.ParserTable(cfg.terminalList,cfg.variableList,eof,10);
		
		var s=cfg.getNonTerminalBy(0);
		var a=cfg.getNonTerminalBy(1);

		var ta=cfg.getTerminalBy(lexer.LexemeType.Minus);
		var tb=cfg.getTerminalBy(lexer.LexemeType.Plus);

		//table rigging
		//final result from https://www.youtube.com/watch?v=APJ_Eh60Qwo
		table.setAction(0,ta,parser.ParserTableValueType.Shift,3);
		table.setAction(0,tb,parser.ParserTableValueType.Shift,4);
		table.setGoto(0,a,2);
		table.setGoto(0,s,1);

		table.setAction(1,eof,parser.ParserTableValueType.Accept,0);
		
		table.setAction(2,ta,parser.ParserTableValueType.Shift,3);
		table.setAction(2,tb,parser.ParserTableValueType.Shift,4);
		table.setGoto(2,a,5);

		table.setAction(3,ta,parser.ParserTableValueType.Shift,3);
		table.setAction(3,tb,parser.ParserTableValueType.Shift,4);
		table.setGoto(3,a,6);

		table.setAction(4,ta,parser.ParserTableValueType.Reduce,3);
		table.setAction(4,tb,parser.ParserTableValueType.Reduce,3);
		table.setAction(4,eof,parser.ParserTableValueType.Reduce,3);

		table.setAction(5,ta,parser.ParserTableValueType.Reduce,1);
		table.setAction(5,tb,parser.ParserTableValueType.Reduce,1);
		table.setAction(5,eof,parser.ParserTableValueType.Reduce,1);

		table.setAction(6,ta,parser.ParserTableValueType.Reduce,2);
		table.setAction(6,tb,parser.ParserTableValueType.Reduce,2);
		table.setAction(6,eof,parser.ParserTableValueType.Reduce,2);
		
		return null;
		
	}
}
