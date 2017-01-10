import { ContextFreeGrammer,Rule } from './syntax-parser';
import { Terminal,NonTerminal,SyntaxElement,SyntaxElementType } from './syntax-parser';
import * as util from '../../utility/common';

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

	toString():string{
		switch(this.type){
			case ParserTableValueType.Blank:return "  ";
			case ParserTableValueType.Shift:return "S"+this.n;
			case ParserTableValueType.Reduce:return "R"+this.n;
			case ParserTableValueType.Goto:return "G"+this.n;
			case ParserTableValueType.Accept:return "Ac";
		}
		return null;
	}
}

/** Holds a 2d table that drives the shift reduce algorithm. */
export class ParserTable{
	private cfg:ContextFreeGrammer;
	private table:ParserTableValue[][]=[];
	private rowCount=0;

	constructor(cfg:ContextFreeGrammer){
		this.cfg=cfg;
		
		//set the indices and get table length
		this.setIndices();

		this.constructUsingLR1();
	}

	/** Sets the indices of the terminal and variable elements and */
	private setIndices():number{
		var index=0;
		for(;index<this.cfg.terminalList.length;index++){
			this.cfg.terminalList[index].tableIndex=index;
		}
		// this.cfg.eof.tableIndex=index;

		for(var j=0;j<this.cfg.variableList.length;j++){
			this.cfg.variableList[j].tableIndex=index++;
		}
		return this.cfg.terminalList.length + 1 + this.cfg.variableList.length;
	}

	/** Returns total column length of the parser table */
	private totalColumns(){
		return this.cfg.terminalList.length + this.cfg.variableList.length;
	}

	/** Creates new row in the table column */
	private makeNewRow(){
		var totalColumns=this.totalColumns();
		this.table[this.rowCount]=[];
		for(var j=0;j<totalColumns;j++){
			this.table[this.rowCount][j]=new ParserTableValue(ParserTableValueType.Blank,0);
		}
		this.rowCount++;
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

	/** Constructs the parser table using LR1 construction algorithm */
	private constructUsingLR1(){
		
		//used in marking the indices of all the states
		var stateCount=0;

		//these two stack help in tracking which all states have got their transitions found
		var processedStates:ParsingState[]=[];
		var unprocessedStates:ParsingState[]=[];

		//create the first state by finding the closure of the first rule
		var firstItem=new LR1Item(this.cfg.relation[0],0);
		firstItem.lookaheads.push(this.cfg.eof);

		//closure is found internally inside the constructor
		var firstState=new ParsingState(firstItem,this.cfg);

		//find the outgoing transitions for all the unprocessed states 
		unprocessedStates.push(firstState);
		while(unprocessedStates.length!=0){

			//pop from unprocessed and push to processed before  adding new states
			var state=unprocessedStates.pop();
			processedStates.push(state);
			state.stateNo=stateCount++;

			//for each LR(1) item of this state, find outgoing states 
			for(let item of state.itemList){
				var outgoing=item.proceed(this.cfg);
				if(outgoing!=null){
					//add this transition to the current state's transition list
					outgoing.from=state;
					state.transitions.push(outgoing);//note that this is a transition and not a state

					//check if this state already exists
					var existing=this.findMatchingState(outgoing.to,processedStates);
					if(existing!=null){
						//use existing state if they exist, 
						outgoing.to=existing;
					}else{
						//otherwise add the new state to unprocessed list
						unprocessedStates.push(outgoing.to);
					}
				}
			}
		}

		this.fillTableUsing(processedStates);

		//output
		util.printList(processedStates);//only states
		this.printStateDiagram(processedStates);
		this.printParsingTable();
	}


	/** Uses the LR(1) state diagram to fill entries in the parsing table */
	private fillTableUsing(stateDiagram:ParsingState[]){

		//initialize the 2d table
		for(var i=0;i<stateDiagram.length;i++){//as many row as are states
			this.makeNewRow();
		}

		//for each state
		for(let state of stateDiagram){

			if(state.isFinalState()){
				//get the only first entry from the state
				var item=state.itemList[0];
				if(item.rule.ruleIndex==0){//accept entry (starting rule)
					this.setAction(
						state.stateNo,
						this.cfg.eof,
						ParserTableValueType.Accept,
						-1);
				}else{//reduce entry

					// set the reduce entries only under the lookahead symbols
					for(let lookahead of item.lookaheads){
						this.setAction(
							state.stateNo,
							lookahead,
							ParserTableValueType.Reduce,
							item.rule.ruleIndex);
					}
				}
			}else{
				//check all its transitions 
				for(let transition of state.transitions){
					//if the outgoing symbol is a non terminal
					if(transition.syntaxElement.getType()==SyntaxElementType.NonTerminal){//goto entry 
						this.setGoto(
							state.stateNo,
							<NonTerminal>transition.syntaxElement,
							transition.to.stateNo);
					}else{//(terminal or epsilon) : shift entry
						this.setAction(
							state.stateNo,
							<Terminal>transition.syntaxElement,
							ParserTableValueType.Shift,
							transition.to.stateNo);
					}
				}
				
			}
		}
	}

	/** Prints the entire state diagram with the transitions */
	private printStateDiagram(stateList:ParsingState[]){
		console.log("LR(1) State Diagram. Total States: "+stateList.length);

		//go to each state
		for(let state of stateList){			
			//print transition between states for this state
			for(let transition of state.transitions){
				console.log(state.stateNo+" "+
				transition.syntaxElement.toString()+
				" > "+
				transition.to.stateNo);
			}
		}
	}


	/** Prints the entire table held by this object */
	private printParsingTable(){
		console.log("Parsing table");

		var headerString="	";
		for(var i=0;i<this.cfg.terminalList.length;i++){
			headerString+=this.cfg.terminalList[i].toString()+"		";
		}
		// headerString+=this.cfg.eof.toString()+"  ";

		for(var j=0;j<this.cfg.variableList.length;j++){
			headerString+=this.cfg.variableList[j].toString()+"		";
		}

		console.log(headerString);

		for(i=0;i<this.table.length;i++){
			var rowString=i+"	";
			for(let cell of this.table[i]){
				rowString+=cell.toString()+"|		";
			}
			console.log(rowString);
		}
	}

	/** Finds the matching state from a list of states, if exists */
	private findMatchingState(parsingState:ParsingState,list:ParsingState[]):ParsingState{
		for(let stateInList of list){
			if(parsingState!=stateInList && parsingState.equals(stateInList)){
				return stateInList;
			}
		}
		return null;
	}
}

/** An LR(1) item is a combination of rule, position of cursor(dot) and lookahead symbols */
class LR1Item{

	rule:Rule;
	/** Denotes cursor position which is specified by index in the rule's RHS.*/
	dot:number;
	lookaheads:Terminal[]=[];

	constructor(rule:Rule,dot:number){
		this.rule=rule;
		this.dot=dot;
	}

	/** Checks if the two items are same by comparing their attributes */
	equals(other:LR1Item):boolean{
		var lookaheadsMatch=true;
		if(this.lookaheads.length==other.lookaheads.length){
			//matches lookaheads in both items 
			for(let lookahead of this.lookaheads){
				//using two loops ensure order of lookaheads in each doesn't matter
				//if both lookahead lists are in same order, this will take O(n) time anyway
				var found=false;
				for(let otherLookahead of other.lookaheads){
					if(lookahead==otherLookahead){
						found=true;
						break;
					}
				}
				if(!found){
					lookaheadsMatch=false;
					break;
				}
			}
		}else{
			lookaheadsMatch=false;
		}
		return this.rule==other.rule && this.dot==other.dot && lookaheadsMatch;
	}

	/**
	 * Proceeds the cursor(dot) one step to produce a parsing transition
	 * to a new state . The transition returned has an empty 'from' state.
	 */
	proceed(cfg:ContextFreeGrammer):ParsingTransition{
		if(this.dot<this.rule.rhs.length){
			return new ParsingTransition(this,cfg);
		}
		return null;
	}

	/** 
	 * Gives the element after dot.Optionally, you can also skip elements(default is 0).
	 * Gives null if dot(plus skip) is beyond the length of RHS
	 */
	elementAfterDot(skip=0):SyntaxElement{
		if(this.dot+skip<this.rule.rhs.length){
			return this.rule.rhs[this.dot+skip];
		}
		return null;
	}

	/** Returns true if dot exists before a variable or terminal, false otherwise */
	dotBeforeSyntaxElement():boolean{
		return this.dot<this.rule.rhs.length;//TODO what about epsilon
	}

	toString():string{
		var rhsProgress="";
		for(var i=0;i<this.dot;i++){
			rhsProgress+=this.rule.rhs[i].toString();//+" ";
		}
		rhsProgress+=".";
		while(i<this.rule.rhs.length){
			rhsProgress+=this.rule.rhs[i].toString();//+" ";
			i++;
		}
		return this.rule.lhs.toString()+"->"+rhsProgress+","+util.csv(this.lookaheads," ");
	}
}

/** A collection of LR(1) item set along with transitions to other states */
class ParsingState{
	stateNo:number;
	itemList:LR1Item[]=[];
	transitions:ParsingTransition[]=[];

	constructor(firstItem:LR1Item,cfg:ContextFreeGrammer){
		this.itemList.push(firstItem);
		this.closure(firstItem,cfg);//only first item is not derived
	}

	/** A final state is one which has a single item where the dot is at the end */
	isFinalState():boolean{
		return this.itemList.length==1 && !this.itemList[0].dotBeforeSyntaxElement();
	}

	/** Checks if the two states are same by comparing only their LR(1) item set */
	equals(other:ParsingState):boolean{
		var itemsMatch=true;
		if(this.itemList.length==other.itemList.length){
			//matches LR(1) items in both states
			for(let item of this.itemList){
				//using two loops ensure order of LR(1) items in each doesn't matter
				//if both item lists are in same order, this will take O(n) time anyway
				var found=false;
				for(let otherItem of other.itemList){
					if(item.equals(otherItem)){
						found=true;
						break;
					}
				}
				if(!found){
					itemsMatch=false;
					break;
				}
			}
		}else{
			itemsMatch=false;
		}
		return itemsMatch;
	}

	/** Recursively finds and adds all LR(1) items by looking at the position of the dot */
	private closure(item:LR1Item,cfg:ContextFreeGrammer){
		if(item.dotBeforeSyntaxElement()){

			//check the item after the dot
			var afterDot=item.elementAfterDot();
			if(afterDot.getType()==SyntaxElementType.NonTerminal){
				
				//find all rules for this non terminal
				var variableRules=cfg.rulesFor(<NonTerminal>afterDot);

				//for each variable rule, 
				for(let variableRule of variableRules){

					//make an LR(1) item with dot placed at the beginning,
					var derived=new LR1Item(variableRule,0);

					//find the lookaheads for the derived item
					var derivedsLookaheads:Terminal[];
					var followingAfterDot=item.elementAfterDot(1);//it is item's follow after dot

					if(followingAfterDot!=null){

						if(followingAfterDot.getType()==SyntaxElementType.NonTerminal){
							//find first and store in a list
							var firstTerminals:Terminal[]=[];
							cfg.first(<NonTerminal>followingAfterDot,firstTerminals,false);//we intentionally don't find first recursively

							//if the first list is empty, 
							if(firstTerminals.length==0){
								//use the first from existing item
								derivedsLookaheads=item.lookaheads;
							}else{
								//remove eof from first terminal if exist
								var eofIndex=firstTerminals.indexOf(cfg.eof);
								if(eofIndex!=-1){
									firstTerminals.splice(eofIndex,1);
								}
								derivedsLookaheads=firstTerminals;
							}
						}else if(followingAfterDot.getType()==SyntaxElementType.Terminal){
							//only add that terminal in the deriveds lookahead
							derivedsLookaheads=[];
							derivedsLookaheads.push(<Terminal>followingAfterDot);
						}
					}else{
						derivedsLookaheads=item.lookaheads;//TODO same object may cause problems later if changes are made
					}

					//set the lookaheads for the derived items 
					derived.lookaheads=derivedsLookaheads;

					//add this item to the set
					this.itemList.push(derived);

					//and find its closure recursively
					this.closure(derived,cfg);
				}
			}
		}
	}

	toString():string{
		var itemSets="";
		for(let item of this.itemList){
			itemSets+=item.toString();
			itemSets+=", ";
		}
		return this.stateNo+":"+itemSets;
	}
}

/** Denotes transition from one parsing state to another for a given syntax element */
class ParsingTransition{
	syntaxElement:SyntaxElement;
	from:ParsingState;
	to:ParsingState;

	constructor(item:LR1Item,cfg:ContextFreeGrammer){
		if(item.dotBeforeSyntaxElement()){

			//set the syntax element as the current position of the dot
			this.syntaxElement=item.elementAfterDot();

			//create a new LR(1) item which is a proceeded version of given item
			var proceededItem=new LR1Item(item.rule,item.dot+1);

			//while transitioning, the lookaheads dont change
			for(let lookahead of item.lookaheads){
				proceededItem.lookaheads.push(lookahead);
			}

			//create a new outgoing state for the proceeded item
			this.to=new ParsingState(proceededItem,cfg);
		}
	}

	toString():string{
		return this.from.stateNo+":"+this.syntaxElement.toString()+":"+this.to.toString();
	}
}