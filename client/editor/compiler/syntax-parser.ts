import { Lexeme,LexemeType,getLexemeList } from './lexical-analyzer';

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

/** Denotes an empty string */
export class Epsilon implements SyntaxElement{
	isTerminal():boolean{
		return false;
	}
}

export class Rule{
	lhs:NonTerminal;
	rhs:SyntaxElement[];

	constructor(from:NonTerminal,...goesTo:SyntaxElement[]){
		this.lhs=from;
		this.rhs=goesTo;
	}
}

/** 
 * Holds a Context Free Grammer and provides methods for parsing a string.
 * For the sake of reliable parsing results unambigous grammer should be supplied.
 */
export class ContextFreeGrammer{
	variableList:NonTerminal[]=[];
	terminalList:Terminal[]=[];
	relation:Rule[]=[];
	start:NonTerminal;

	/** Parsing table is constructed once and used several times */
	private parserTable:ParserTable;

	constructor(start:NonTerminal){
		this.start=start;
	}

	/** Augments the grammer with a starting rule and creates the parsing table */
	finalizeGrammer():ParserTable{
		this.augumentGrammer();
		this.constructParserTableUsingLR1();
		return this.parserTable;
	}

	/**
	 * Inserts a new starting rule that goes to the current starting rule adding new non terminal in the proceess.
	 * Returns the said starting Non Terminal
	 */
	private augumentGrammer():NonTerminal{
		var sPrime=new NonTerminal(-1);
		this.relation.push(new Rule(sPrime,this.start));
		this.start=sPrime;
		return sPrime; 
	}

	/** Parses a string to give an appropriate parse tree which can be used to retrieve information from(semantic analysis)*/
	parseString(input:string):ParseTree{
		var lexemeList=getLexemeList(input);
		this.setRespectiveTerminalIndices(lexemeList);
		var stack:StackElement[]=[];
		var startingElement=new StackElement(StackElementType.State);
		startingElement.state=0;
		var pointer=0;
		var processing=true;
		var successfullyParsed=false;
		while(processing){
			var lexeme=lexemeList[pointer];
			var terminal=this.terminalList[lexeme.terminalIndex];
			
			//get the state from whatever is on top of stack
			var state=stack[stack.length-1].state;
			var action=this.parserTable.getAction(state,terminal);

			if(action.type==ParserTableValueType.Shift){
				//shift once and add the symbol and that state on top of stack
				pointer++;

				var symbolElement=new StackElement(StackElementType.Terminal);
				symbolElement.lexeme=lexeme;

				var stateElement=new StackElement(StackElementType.State); 
				stateElement.state=action.n;

				stack.push(symbolElement,stateElement);
			}else if(action.type==ParserTableValueType.Reduce){

				//get the associated rule that we want to reduce to
				var rule=this.relation[action.n];

				//pop twice as many elements from stack as there are elements in the rhs
				var elementsToPop=2 * rule.rhs.length;
				for(var i=0;i<elementsToPop;i++){
					stack.pop();
				}

				//use the top state and the lhs to get the 'goto state'
				var topAfterPops=stack[stack.length-1].state;
				var gotoStateNumber=this.parserTable.getGoto(topAfterPops,rule.lhs);

				//push the rule's lhs and the goto on stack
				var nonTerminalElement=new StackElement(StackElementType.NonTerminal);
				nonTerminalElement.nonTerminal=rule.lhs;

				var gotoStateElement=new StackElement(StackElementType.State);
				gotoStateElement.state=gotoStateNumber;
				
				stack.push(nonTerminalElement,gotoStateElement);
			}else if(action.type==ParserTableValueType.Accept){
				//success (accepted)
				successfullyParsed=true;
				processing=false;
			}else if(action.type==ParserTableValueType.Blank){
				//error
				successfullyParsed=false;
				processing=false;
			}
		}
		return null;//TODO
	}

	/** Sets the indices of terminal in each lexeme for matching lexeme types*/
	setRespectiveTerminalIndices(lexemeList:Lexeme[]){
		for(let lexeme of lexemeList){
			for(var i=0;i<this.terminalList.length;i++){
				if(this.terminalList[i].token==lexeme.type){
					lexeme.terminalIndex=i;
					break;
				}
			}
		}
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


	/** Constructs the parser table using LR1 construction algorithm */
	private constructParserTableUsingLR1():ParserTable{
		return this.makeDummyParserTable();//TODO
	}

	/** Rigs the parser table from the final result of https://www.youtube.com/watch?v=APJ_Eh60Qwo */
	private makeDummyParserTable():ParserTable{

		var eof=new EndOfFile();
		var table=new ParserTable(this.terminalList,this.variableList,eof,10);
		
		var s=this.getNonTerminalBy(0);
		var a=this.getNonTerminalBy(1);

		var ta=this.getTerminalBy(LexemeType.Minus);
		var tb=this.getTerminalBy(LexemeType.Plus);

		//table rigging
		//final result from https://www.youtube.com/watch?v=APJ_Eh60Qwo
		table.setAction(0,ta,ParserTableValueType.Shift,3);
		table.setAction(0,tb,ParserTableValueType.Shift,4);
		table.setGoto(0,a,2);
		table.setGoto(0,s,1);

		table.setAction(1,eof,ParserTableValueType.Accept,0);
		
		table.setAction(2,ta,ParserTableValueType.Shift,3);
		table.setAction(2,tb,ParserTableValueType.Shift,4);
		table.setGoto(2,a,5);

		table.setAction(3,ta,ParserTableValueType.Shift,3);
		table.setAction(3,tb,ParserTableValueType.Shift,4);
		table.setGoto(3,a,6);

		table.setAction(4,ta,ParserTableValueType.Reduce,3);
		table.setAction(4,tb,ParserTableValueType.Reduce,3);
		table.setAction(4,eof,ParserTableValueType.Reduce,3);

		table.setAction(5,ta,ParserTableValueType.Reduce,1);
		table.setAction(5,tb,ParserTableValueType.Reduce,1);
		table.setAction(5,eof,ParserTableValueType.Reduce,1);

		table.setAction(6,ta,ParserTableValueType.Reduce,2);
		table.setAction(6,tb,ParserTableValueType.Reduce,2);
		table.setAction(6,eof,ParserTableValueType.Reduce,2);

		return table;
	}
}

enum StackElementType{
	Terminal,
	State,
	NonTerminal
}

class StackElement{
	lexeme:Lexeme;
	state:number;
	nonTerminal:NonTerminal;
	readonly type:StackElementType;

	constructor(type:StackElementType ){
		this.type=type;
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

	getGoto(row:number,variable:NonTerminal):number{
		return this.table[row][variable.tableIndex].n;
	}

	setGoto(row:number,variable:NonTerminal,n:number){
		this.table[row][variable.tableIndex].type=ParserTableValueType.Goto;
		this.table[row][variable.tableIndex].n=n;
	}

}