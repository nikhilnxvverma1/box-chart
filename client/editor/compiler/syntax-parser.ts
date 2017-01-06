import { Lexeme,LexemeType } from './lexical-analyzer';


export enum CodeContext{
	GenericBox,
	FieldMember,
	MethodMember,
	InterfaceMethod,
	EnumType,
	FieldAssignment
}

export interface SyntaxElement{
	isTerminal():boolean;
}

export class NonTerminal implements SyntaxElement{
	id:number;

	constructor(id:number){
		this.id=id;
	}
	
	isTerminal():boolean{
		return false;
	}
}

export class Terminal implements SyntaxElement{
	token:LexemeType;

	constructor(tokenType:LexemeType){
		this.token=tokenType;
	}

	isTerminal():boolean{
		return true;
	}
}

export class Epsilon implements SyntaxElement{
	isTerminal():boolean{
		return false;
	}
}

export class Rule{
	from:NonTerminal;
	goesTo:SyntaxElement[];

	constructor(from:NonTerminal,...goesTo:SyntaxElement[]){
		this.from=from;
		this.goesTo=goesTo;
	}
}

export class ContextFreeGrammer{
	variableList:NonTerminal[]=[];
	terminalList:Terminal[]=[];
	relation:Rule[]=[];
	start:NonTerminal;

	constructor(start:NonTerminal){
		this.start=start;
	}

	/** Parses a string to give an appropriate parse tree which can be used to retrieve information from(semantic analysis)*/
	parseString(input:string):ParseTree{
		return null;//TODO
	}
}

/** Tree Structure for containing the Parse tree */
export class ParseTree{
	root:NonTerminal;
	input:string;
}

/** A single node in the parse tree containing links to left, right and parent */
export class ParseTreeNode{
	parent:NonTerminal;
	left:SyntaxElement;
	right:SyntaxElement;
}