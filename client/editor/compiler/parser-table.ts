import { ContextFreeGrammer,Terminal,NonTerminal,Rule } from './syntax-parser';

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
		//TODO
	}
}

/** A combination of rule, position of cursor(dot) and lookahead symbols */
class LR1Item{

	rule:Rule;
	/** Denotes cursor position which is specified by index in the rule's RHS.*/
	dot:number;
	lookaheads:Terminal[]=[];

	constructor(rule:Rule,dot:number,...lookaheads:Terminal[]){
		this.rule=rule;
		this.dot=dot;
		for(let lookahead of lookaheads){
			this.lookaheads.push(lookahead);
		}
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
}

class ParsingState{
	stateNo:number;
	itemList:LR1Item[]=[];
	transitions:ParsingTransition[]=[];

	constructor(stateNo:number,firstItem:LR1Item){
		this.stateNo=stateNo;
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

class ParsingTransition{
	terminal:Terminal;
	from:ParsingState;
	to:ParsingState;
}