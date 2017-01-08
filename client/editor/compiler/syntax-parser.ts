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
	/** Index of this node in parser tables. This should only be set by the ParserTable class */
	tableIndex:number;

	constructor(id:number){
		this.id=id;
	}
	
	isTerminal():boolean{
		return false;
	}
}

export class Terminal implements SyntaxElement{
	token:LexemeType;
	/** Index of this node in parser tables. This should only be touched by the ParserTable class */
	tableIndex:number;

	constructor(tokenType:LexemeType){
		this.token=tokenType;
	}

	isTerminal():boolean{
		return true;
	}

	isEndOfFile():boolean{
		return false;
	}
}

/** Indicates the terminating point in a string. This is also treated as a terminal. Only used internally. */
export class EndOfFile extends Terminal{

	constructor(){
		super(LexemeType.Unknown);
	}

	isEndOfFile():boolean{
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

	/**
	 * Inserts a new starting rule that goes to the current starting rule adding new non terminal in the proceess.
	 * Returns the said starting Non Terminal
	 */
	augumentGrammer():NonTerminal{
		var sPrime=new NonTerminal(-1);
		this.relation.push(new Rule(sPrime,this.start));
		this.start=sPrime;
		return sPrime; 
	}

	/** Parses a string to give an appropriate parse tree which can be used to retrieve information from(semantic analysis)*/
	parseString(input:string):ParseTree{
		return null;//TODO
	}

	/** Loops through the terminal list to return a terminal which matches the given type */
	getTerminalBy(type:LexemeType):Terminal{
		for(let terminal of this.terminalList){
			if(terminal.token==type){
				return terminal;
			}
		}
		return null;
	}

	/** Loops through the variable list to return a variable which matches the given id */
	getNonTerminalBy(id:number):NonTerminal{
		for(let variable of this.variableList){
			if(variable.id==id){
				return variable;
			}
		}
		return null;
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

/** Type of action in the parser table */
export enum ParserTableValueType{
	Blank=1,
	Shift,
	Reduce,
	Goto,
	Accept
}

/**  Inidivual cell value of the 2d parse table. */
export class ParserTableValue{
	type:ParserTableValueType;
	n:number;

	constructor(type:ParserTableValueType,n:number){
		this.type=type;
		this.n=n;
	}
}

/** Holds a 2d table that dictates the shift reduce algorithm. */
export class ParserTable{
	private terminalList:Terminal[];
	private variableList:NonTerminal[];
	private eof:EndOfFile;
	private table:ParserTableValue[][];
	private rowCount=0;

	constructor(terminalList:Terminal[],variableList:NonTerminal[],eof:EndOfFile,rows=20){
		this.terminalList=terminalList;
		this.variableList=variableList;
		
		//set the indices and get table length
		this.setIndices();

		//initialize the 2d table
		//make the specified amount of rows, we can grow rows later as needed
		for(var i=0;i<rows;i++){
			this.makeNewRow();
		}
	}

	/** Sets the indices of the terminal and variable elements and */
	private setIndices():number{
		var index=0;
		for(;index<this.terminalList.length;index++){
			this.terminalList[index].tableIndex=index;
		}

		this.eof.tableIndex=index;

		for(var j=0;j<this.variableList.length;j++){
			this.variableList[j].tableIndex=index++;
		}
		return this.terminalList.length + 1 + this.variableList.length;
	}

	/** Returns total column length of the parser table */
	private totalColumns(){
		return this.terminalList.length + 1 + this.variableList.length;
	}

	/** Creates new row in the table column */
	private makeNewRow(){
		var totalColumns=this.totalColumns();
		for(var j=0;j<totalColumns;j++){
				this.table[this.rowCount++][j]=new ParserTableValue(ParserTableValueType.Blank,0);
		}
	}

	getAction(row:number,terminal:Terminal):ParserTableValue{
		return this.table[row][terminal.tableIndex];
	}

	setAction(row:number,terminal:Terminal,type:ParserTableValueType,n:number){
		this.table[row][terminal.tableIndex].type=type;
		this.table[row][terminal.tableIndex].n=n;
	}

	getGoto(row:number,variable:NonTerminal):ParserTableValue{
		return this.table[row][variable.tableIndex];
	}

	setGoto(row:number,variable:NonTerminal,n:number){
		this.table[row][variable.tableIndex].type=ParserTableValueType.Goto;
		this.table[row][variable.tableIndex].n=n;
	}

}