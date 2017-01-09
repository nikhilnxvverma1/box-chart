import { ContextFreeGrammer,Terminal,NonTerminal,Rule,SyntaxElement } from './syntax-parser';

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

/** Holds a 2d table that drives the shift reduce algorithm. */
export class ParserTable{
	private cfg:ContextFreeGrammer;
	private table:ParserTableValue[][]=[];
	private rowCount=0;

	constructor(cfg:ContextFreeGrammer){
		this.cfg=cfg;
		
		//set the indices and get table length
		this.setIndices();

		//initialize the 2d table
		//make the specified amount of rows, we can grow rows later as needed
		for(var i=0;i<20;i++){
			this.makeNewRow();
		}
	}

	/** Sets the indices of the terminal and variable elements and */
	private setIndices():number{
		var index=0;
		for(;index<this.cfg.terminalList.length;index++){
			this.cfg.terminalList[index].tableIndex=index;
		}
		this.cfg.eof.tableIndex=index;

		for(var j=0;j<this.cfg.variableList.length;j++){
			this.cfg.variableList[j].tableIndex=index++;
		}
		return this.cfg.terminalList.length + 1 + this.cfg.variableList.length;
	}

	/** Returns total column length of the parser table */
	private totalColumns(){
		return this.cfg.terminalList.length + 1 + this.cfg.variableList.length;
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
		var firstState=new ParsingState(firstItem);

		//find the outgoing transitions for all the unprocessed states 
		unprocessedStates.push(firstState);
		while(unprocessedStates.length!=0){

			//pop from unprocessed and push to processed before  adding new states
			var state=unprocessedStates.pop();
			processedStates.push(state);
			state.stateNo=stateCount++;

			//for each LR(1) item of this state, find outgoing states 
			for(let item of state.itemList){
				var outgoing=item.proceed();
				if(outgoing!=null){
					//add this transition to the current state's transition list
					outgoing.from=state;
					state.transitions.push(outgoing);

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
		
	}

	private findMatchingState(parsingState:ParsingState,list:ParsingState[]):ParsingState{
		for(let stateInList of list){
			if(parsingState!=stateInList && parsingState.equals(stateInList)){
				return stateInList;
			}
		}
		return null;
	}
}

/** A combination of rule, position of cursor(dot) and lookahead symbols */
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
	proceed():ParsingTransition{
		if(this.dot<this.rule.rhs.length){
			return new ParsingTransition(this);
		}
		return null;
	}
}

/** A collection of LR(1) item set along with transitions to other states */
class ParsingState{
	stateNo:number;
	itemList:LR1Item[]=[];
	transitions:ParsingTransition[]=[];

	constructor(firstItem:LR1Item){
		this.itemList.push(firstItem);
		this.closure(firstItem);
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

	private closure(item:LR1Item){
		//TODO
	}
}

/** Denotes transition from one parsing state to another for a given syntax element */
class ParsingTransition{
	syntaxElement:SyntaxElement;
	from:ParsingState;
	to:ParsingState;

	constructor(item:LR1Item){
		if(item.dot<item.rule.rhs.length){

			//set the syntax element as the current position of the dot
			this.syntaxElement=item.rule.rhs[item.dot];

			//create a new LR(1) item which is a proceeded version of given item
			var proceededItem=new LR1Item(item.rule,item.dot+1);

			//while transitioning, the lookaheads dont change
			for(let lookahead of item.lookaheads){
				proceededItem.lookaheads.push(lookahead);
			}

			//create a new outgoing state for the proceeded item
			this.to=new ParsingState(proceededItem);
		}
	}
}