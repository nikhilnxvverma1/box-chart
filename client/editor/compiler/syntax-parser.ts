import { Lexeme,LexemeType,getLexemeList,stringForLexemeType } from './lexical-analyzer';

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

	toString():string{
		var startLetter="B";
		return String.fromCharCode(startLetter.charCodeAt(0)+this.id);
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

	/** Indicates the terminating point in a string. This is also treated as a terminal. */
	isEndOfFile():boolean{
		return this.token==LexemeType.EOF;
	}

	toString():string{
		return stringForLexemeType(this.token);
	}
}

/** Denotes an empty string */
export class Epsilon implements SyntaxElement{
	isTerminal():boolean{
		return false;
	}

	toString():string{
		return "\E";
	}
}

export class Rule{
	lhs:NonTerminal;
	rhs:SyntaxElement[];

	constructor(from:NonTerminal,...goesTo:SyntaxElement[]){
		this.lhs=from;
		this.rhs=goesTo;
	}

	toString():string{
		var line=this.lhs.toString();
		line+=" -> "
		for(let element of this.rhs){
			line+=element.toString()+" ";
		}
		return line;
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

	/** Simply prints out the rules line by line */
	printRules(){
		for(let rule of this.relation){
			console.log(rule.toString());
		}
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
	parse(input:string):ParseTree{
		var lexemeList=getLexemeList(input);
		this.setRespectiveTerminalIndices(lexemeList);
		var stack:ParseTreeNode[]=[];
		var startingElement=new StateParseTreeNode(0);
		startingElement.state=0;
		var pointer=0;
		var processing=true;
		var successfullyParsed=false;
		var parseTree=new ParseTree(input);

		while(processing){
			var lexeme=lexemeList[pointer];
			var terminal=this.terminalList[lexeme.terminalIndex];
			
			//get the state from whatever is on top of stack
			var state=stack[stack.length-1].getStateNumber();
			var action=this.parserTable.getAction(state,terminal);

			if(action.type==ParserTableValueType.Shift){
				//perform shift operation
				pointer=this.shift(action,stack,lexemeList,pointer);
			}else if(action.type==ParserTableValueType.Reduce){
				//perform reduce operation
				this.reduce(action,stack,lexemeList,parseTree);
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
		return parseTree;
	}

	/** Shifts the pointer once and adds the symbol and that state on top of stack. Returns the new shifted pointer */
	private shift(action:ParserTableValue,stack:ParseTreeNode[],lexemeList:Lexeme[],pointer:number):number{
		var lexeme=lexemeList[pointer];
		var terminal=this.terminalList[lexeme.terminalIndex];
		var symbolElement=new LeafParseTreeNode(lexeme);
		var stateElement=new StateParseTreeNode(action.n); 

		stack.push(symbolElement,stateElement);
		return ++pointer;
	}

	/** Pops appropriate elements from stack and turns it into a rule */
	private reduce(action:ParserTableValue,stack:ParseTreeNode[],lexemeList:Lexeme[],parseTree:ParseTree){
		
		//get the associated rule that we want to reduce to
		var rule=this.relation[action.n];

		//create a new parent node that denotes this reduction derivative
		var lhsNode=new ParentParseTreeNode(rule.lhs);

		//pop twice as many elements from stack as there are elements in the rhs
		var elementsToPop=2 * rule.rhs.length;

		//to keep track of all the children arisen from this reduce, hold them in an array
		var descendents:ParseTreeNode[]=[];
		for(var i=0;i<elementsToPop;i++){
			var stackElement=stack.pop();
			if(stackElement.getType()!=ParseTreeNodeType.StateHolder){
				descendents.push(stackElement);
			}
		}

		//because the descendents are popped backwards, reverse the array for the correct order
		descendents.reverse();

		//set as children to the LHS node
		lhsNode.children=descendents;

		//use the top state and the LHS to get the 'goto state'
		var topAfterPops=stack[stack.length-1].getStateNumber();
		var gotoStateNumber=this.parserTable.getGoto(topAfterPops,rule.lhs);
		var gotoStateElement=new StateParseTreeNode(gotoStateNumber);

		//push the LHS and the goto on stack
		stack.push(lhsNode,gotoStateElement);

		//the LHS now becomes the new root of the parse tree
		parseTree.root=lhsNode;
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

		var eof=new Terminal(LexemeType.EOF);
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

/** Tree Structure for containing the Parse tree */
export class ParseTree{
	root:ParentParseTreeNode;
	input:string;

	constructor(input:string){
		this.input=input;
	}

	toString():string{
		return this.root.toString();
	}
}

/** Tells wheather a node denotes a leaf,parent, or a state number(used inside the parsing stack).*/
export enum ParseTreeNodeType{
	Leaf,
	Parent,
	StateHolder
}

/** A abstract single node used in the parse tree */
export interface ParseTreeNode{
	/** Wheater it is leaf, parent or state number holder */
	getType():ParseTreeNodeType;
	/** Returns non terminal, if this node is supposed to contain a non terminal, null otherwise */
	getNonTerminal():NonTerminal;
	/** Returns lexeme, if this node is supposed to contain a lexeme, null otherwise */
	getLexeme():Lexeme;
	/** Returns state number, if this node is supposed to contain a state number, -1 otherwise */
	getStateNumber():number;
}

/** As a parent node in the parse tree, this class holds a non terminal and children */
export class ParentParseTreeNode implements ParseTreeNode{
	nonTerminal:NonTerminal;
	children:ParseTreeNode[];

	constructor(nonTerminal:NonTerminal){
		this.nonTerminal=nonTerminal;
	}

	getType():ParseTreeNodeType{
		return ParseTreeNodeType.Parent;
	}

	/** Finds the child node that contains the supplied non terminal */
	findChildNodeHoldingNonTerminal(nonTerminal:NonTerminal):ParentParseTreeNode{
		
		for(let node of this.children){
			if(node.getNonTerminal()==nonTerminal){
				return <ParentParseTreeNode>node;
			}
		}
		return null;
	}

	/** Returns non terminal, if this node is supposed to contain a non terminal, null otherwise */
	getNonTerminal():NonTerminal{
		return this.nonTerminal;
	}
	
	/** Returns lexeme, if this node is supposed to contain a lexeme, null otherwise */
	getLexeme():Lexeme{
		return null;
	}

	/** Returns state number, if this node is supposed to contain a state number, null otherwise */
	getStateNumber():number{
		return -1;
	}
	
	toString():string{
		return this.nonTerminal.toString();
	}
}

/** As a leaf node in the parse tree, this class holds the lexeme */
export class LeafParseTreeNode implements ParseTreeNode{
	lexeme:Lexeme;

	constructor(lexeme:Lexeme){
		this.lexeme=lexeme;
	}

	getType():ParseTreeNodeType{
		return ParseTreeNodeType.Leaf;
	}

	/** Returns non terminal, if this node is supposed to contain a non terminal, null otherwise */
	getNonTerminal():NonTerminal{
		return null;
	}
	
	/** Returns lexeme, if this node is supposed to contain a lexeme, null otherwise */
	getLexeme():Lexeme{
		return this.lexeme;
	}

	/** Returns state number, if this node is supposed to contain a state number, null otherwise */
	getStateNumber():number{
		return -1;
	}

	toString():string{
		return stringForLexemeType(this.lexeme.type);
	}
}

/** State numbers are also held as parse tree nodes but only for parsing computation purposes */
class StateParseTreeNode implements ParseTreeNode{

	state:number;

	constructor(state:number){
		this.state=state;
	}

	getType():ParseTreeNodeType{
		return ParseTreeNodeType.StateHolder;
	}

	/** Returns non terminal, if this node is supposed to contain a non terminal, null otherwise */
	getNonTerminal():NonTerminal{
		return null;
	}
	
	/** Returns lexeme, if this node is supposed to contain a lexeme, null otherwise */
	getLexeme():Lexeme{
		return null;
	}

	/** Returns state number, if this node is supposed to contain a state number, null otherwise */
	getStateNumber():number{
		return this.state;
	}

	toString():string{
		return "'# "+this.state+" #'";
	}
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
	private eof:Terminal;
	private table:ParserTableValue[][];
	private rowCount=0;

	constructor(terminalList:Terminal[],variableList:NonTerminal[],eof:Terminal,rows=20){
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