import { Lexeme,LexemeType,getLexemeList,stringForLexemeType } from './lexical-analyzer';
import { ParserTable,ParserTableValue,ParserTableValueType } from './parser-table';
import  * as util from '../../utility/common';

/** Different types of syntax elements that can exists in a CFG */
export enum SyntaxElementType{
	NonTerminal,
	Terminal,
	Epsilon
}

/** A single element in the CFG rule: Terminal, Non Terminal or Epsilon */
export interface SyntaxElement{
	getType():SyntaxElementType;
}

/** A variable in the context free grammer */
export class NonTerminal implements SyntaxElement{
	/** Used for representational purposes. For augumented variable, this should always be -1 */
	id:number;
	/** Index of this node in parser tables. This should only be set by the ParserTable class */
	tableIndex:number;

	/**
	 * Constructs a non terminal with a representational id.
	 * For augumented variable, this should always be -1 
	 */
	constructor(id:number){
		this.id=id;
	}
	
	getType():SyntaxElementType{
		return SyntaxElementType.NonTerminal;
	}

	toString():string{
		if(this.isAugumentedVariable()){
			return "A'";
		}
		var startLetter="A";
		return String.fromCharCode(startLetter.charCodeAt(0)+this.id);
	}

	isAugumentedVariable():boolean{
		return this.id==-1;
	}
}

/** An ending symbol in the context free grammer */
export class Terminal implements SyntaxElement{
	token:LexemeType;
	/** Index of this node in parser tables. This should only be touched by the ParserTable class */
	tableIndex:number;

	constructor(tokenType:LexemeType){
		this.token=tokenType;
	}

	getType():SyntaxElementType{
		return SyntaxElementType.Terminal;
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
	getType():SyntaxElementType{
		return SyntaxElementType.Epsilon;
	}

	toString():string{
		return "\E";
	}
}

/** Container that holds the LHS and RHS of a CFG rule */
export class Rule{
	lhs:NonTerminal;
	rhs:SyntaxElement[];
	/** 
	 * Identifies the rule number(starting from 0) as an index in the rule set.
	 * Used by the parsing table and shift reduce algorithm. 
	 * This should NOT be changed once set(by the setRuleIndices() method).
	 */
	ruleIndex:number;

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

	readonly eof:Terminal=new Terminal(LexemeType.EOF);

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

	/** Augments the grammer with a starting rule,adds EOF, creates the parsing table etc.*/
	finalizeGrammer():ParserTable{
		this.augumentGrammer();
		this.terminalList.push(this.eof);
		this.setRuleIndices();
		this.parserTable=new ParserTable(this);
		return this.parserTable;
	}

	/** Finds the possible first terminals for the given non terminal in this Grammer */
	first(variable:NonTerminal,found:Terminal[],recursive=true){

		//for each rule where lhs matches the given variable
		for(let rule of this.relation){
			if(rule.lhs==variable){
				var element=rule.rhs[0];
				if(element.getType()==SyntaxElementType.NonTerminal &&
					element!=variable && recursive){

					//for a new non terminal recursively find and add its first element
					this.first(<NonTerminal>element,found);
				}else if(element.getType()==SyntaxElementType.Terminal && 
					!util.existsInList(element,found)){
					
					//for a newly discovered terminal, add to list
					found.push(<Terminal>element);
				}
			}
		}
	}

	/** Returns all rules where supplied variable is the LHS */
	rulesFor(variable:NonTerminal):Rule[]{
		var ruleList:Rule[]=[];
		for(let rule of this.relation){
			if(rule.lhs==variable){
				ruleList.push(rule);
			}
		}
		return ruleList;
	}

	/**
	 * Inserts a new starting rule that goes to the current starting rule adding new non terminal in the proceess.
	 * Returns the said starting Non Terminal
	 */
	private augumentGrammer():NonTerminal{
		var sPrime=new NonTerminal(-1);//-1 indicates augumented start rule
		//its IMPORTANT to insert the new augumented rule at the start
		this.variableList.unshift(sPrime);
		this.relation.unshift(new Rule(sPrime,this.start));
		this.start=sPrime;
		return sPrime; 
	}

	/** Sets the indices on the rules of the context free grammer. */
	private setRuleIndices(){
		for(let rule of this.relation){
			rule.ruleIndex=this.relation.indexOf(rule);
		}
	}

	/** Parses a string to give an appropriate parse tree which can be used to retrieve information from(semantic analysis)*/
	parse(input:string):ParsingResult{
		var parsingResult=new ParsingResult(input);
		parsingResult.lexemeList=getLexemeList(input);
		this.setRespectiveTerminalIndices(parsingResult.lexemeList);
		var stack:ParseTreeNode[]=[];
		stack.push(new StateParseTreeNode(0));

		while(parsingResult.status==ParsingStatus.InProgress){
			var lexeme=parsingResult.lexemeList[parsingResult.pointer];
			var terminal=this.terminalList[lexeme.terminalIndex];
			
			//get the state from whatever is on top of stack
			var state=stack[stack.length-1].getStateNumber();
			var action=this.parserTable.getAction(state,terminal);

			if(action.type==ParserTableValueType.Shift){
				//perform shift operation
				this.shift(action,stack,parsingResult);
			}else if(action.type==ParserTableValueType.Reduce){
				//perform reduce operation
				this.reduce(action,stack,parsingResult);
			}else if(action.type==ParserTableValueType.Accept){
				//success (accepted)
				parsingResult.status=ParsingStatus.Passed;
			}else if(action.type==ParserTableValueType.Blank){
				//error
				parsingResult.status=ParsingStatus.Failed;
			}
		}
		return parsingResult;
	}

	/** Shifts the pointer once and adds the symbol and that state on top of stack. Returns the new shifted pointer */
	private shift(action:ParserTableValue,stack:ParseTreeNode[],parsingResult:ParsingResult){
		var lexeme=parsingResult.lexemeList[parsingResult.pointer];
		var terminal=this.terminalList[lexeme.terminalIndex];
		var symbolElement=new LeafParseTreeNode(lexeme);
		var stateElement=new StateParseTreeNode(action.n); 
		stack.push(symbolElement,stateElement);
		parsingResult.pointer++;
	}

	/** Pops appropriate elements from stack and turns it into a rule */
	private reduce(action:ParserTableValue,stack:ParseTreeNode[],parsingResult:ParsingResult){
		
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

		//the LHS now becomes the new root of the parse tree
		parsingResult.root=lhsNode;

		//use the top state and the LHS to get the 'goto state'
		var topAfterPops=stack[stack.length-1].getStateNumber();
		var gotoStateNumber=this.parserTable.getGoto(topAfterPops,rule.lhs);
		var gotoStateElement=new StateParseTreeNode(gotoStateNumber);

		//push the LHS and the goto on stack and perform the goto operation immediately
		stack.push(lhsNode,gotoStateElement);
		this.gotoStateAndPerformAction(stack,parsingResult,parsingResult.pointer);
	}

	/** 
	 * Goto part of the reduce step that occurs after the main reduce step is performed.
	 * It is assumed that the top elemen on the stack is a goto action. 
	 */
	private gotoStateAndPerformAction(stack:ParseTreeNode[],parsingResult:ParsingResult,pointer:number){
		var lexeme=parsingResult.lexemeList[pointer];
		var terminal=this.terminalList[lexeme.terminalIndex];

		//get the state from whatever is on top of stack
		var state=stack[stack.length-1].getStateNumber();
		var action=this.parserTable.getAction(state,terminal);

		if(action.type==ParserTableValueType.Shift){
			//perform shift operation
			this.shift(action,stack,parsingResult);
		}else if(action.type==ParserTableValueType.Reduce){
			//perform reduce operation again. This recursively builds the parse tree bottom up.
			this.reduce(action,stack,parsingResult);
		}else if(action.type==ParserTableValueType.Accept){
			//success (accepted)
			parsingResult.status=ParsingStatus.Passed;
		}else if(action.type==ParserTableValueType.Blank){
			//error
			parsingResult.status=ParsingStatus.Failed;
		}
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
	private constructParserTableUsingLR1(){

		this.parserTable=this.makeDummyParserTable();//TODO
	}

	/** Rigs a parser table from the final result of https://www.youtube.com/watch?v=APJ_Eh60Qwo */
	private makeDummyParserTable():ParserTable{

		var table=new ParserTable(this);
		
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

		table.setAction(1,this.eof,ParserTableValueType.Accept,0);
		
		table.setAction(2,ta,ParserTableValueType.Shift,3);
		table.setAction(2,tb,ParserTableValueType.Shift,4);
		table.setGoto(2,a,5);

		table.setAction(3,ta,ParserTableValueType.Shift,3);
		table.setAction(3,tb,ParserTableValueType.Shift,4);
		table.setGoto(3,a,6);

		table.setAction(4,ta,ParserTableValueType.Reduce,3);
		table.setAction(4,tb,ParserTableValueType.Reduce,3);
		table.setAction(4,this.eof,ParserTableValueType.Reduce,3);

		table.setAction(5,ta,ParserTableValueType.Reduce,1);
		table.setAction(5,tb,ParserTableValueType.Reduce,1);
		table.setAction(5,this.eof,ParserTableValueType.Reduce,1);

		table.setAction(6,ta,ParserTableValueType.Reduce,2);
		table.setAction(6,tb,ParserTableValueType.Reduce,2);
		table.setAction(6,this.eof,ParserTableValueType.Reduce,2);

		return table;
	}
}

export enum ParsingStatus{
	Passed=1,
	Failed,
	InProgress
}

/** Tree Structure for containing the Parse tree */
export class ParsingResult{
	/** The root of the parsing table */
	root:ParentParseTreeNode;
	/** The raw input string that was supplied */
	input:string;
	/** Wheater the input passed,failed or is currently being computed */
	status:ParsingStatus;
	/** Internal progress in the shift reduce algorithm's input buffer */
	pointer:number;
	/** List of lexemes created from the raw input */
	lexemeList:Lexeme[];

	constructor(input:string){
		this.input=input;
		this.status=ParsingStatus.InProgress;
		this.pointer=0;
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
