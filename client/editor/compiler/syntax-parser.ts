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

export class Variable implements SyntaxElement{
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
	from:Variable;
	goesTo:SyntaxElement[];

	constructor(from:Variable,...goesTo:SyntaxElement[]){
		this.from=from;
		this.goesTo=goesTo;
	}
}

export class ContextFreeGrammer{
	variableList:Variable[]=[];
	terminalList:Terminal[]=[];
	relation:Rule[]=[];
	start:Variable;

	constructor(start:Variable){
		this.start=start;
	}
}