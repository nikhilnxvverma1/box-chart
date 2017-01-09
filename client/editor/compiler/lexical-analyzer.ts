

/** Each lexeme can be identified by its type. These help in easily categorising the different tokens in a string. */
export enum LexemeType{ //debugging tip: use this line number to derive the number for the enum constant
	Identifier=1,	//alphanumeric starting with a letter,underscore accepted
	Number,// any integer number
	Unknown,// just anything, this has the lease priority 
	Minus,//-
	Plus,//+
	HashTag,//#
	Tilde,//~
	Colon,//:
	Comma,//,
	Int,//int
	Float,//float
	Bool,//bool
	Char,//char
	String,//string
	Void,//void
	Star,//*
	OpeningSquareBracket,//[
	ClosingSquareBracket,//]
	OpeningAngularBracket,//<
	ClosingAngularBracket,//>
	OpeningCurvedBracket,//(
	ClosingCurvedBracket,//)
	DoubleOpeningSquareBracket,//[[
	DoubleClosingSquareBracket,//]]
	DoubleOpeningAngularBracket,//<<
	DoubleClosingAngularBracket,//>>
	DoubleOpeningCurvedBracket,//((
	DoubleClosingCurvedBracket,//))
	Interface,//interface
	Enumeration,//enumeration
	UserSymbol,//o<<
	DatabaseSymbol,//o((
	Arrow,//-->
	Line,//---
	Dotted,//...
	DoubleSlash,// //
	OpeningMultiLineComment,// /*
	ClosingMultiLineComment,// */
	EOF//End of File, artificial and used exclusively by parser

	//NOTE: For each addition or change, make sure to revise the string representation method below
	
}

/** Returns string representation of the lexeme type. Used only for development purposes */
export function stringForLexemeType(type:LexemeType):string{
	
	switch(type){
		case LexemeType.Identifier:	return "id";
		case LexemeType.Number:return "num";
		case LexemeType.Unknown:return "'unknown'";
		case LexemeType.Minus:return "-";
		case LexemeType.Plus:return "+";
		case LexemeType.HashTag:return "#";
		case LexemeType.Tilde:return "~";
		case LexemeType.Colon:return ":";
		case LexemeType.Comma:return ",";
		case LexemeType.Int:return "int";
		case LexemeType.Float:return "float";
		case LexemeType.Bool:return "bool";
		case LexemeType.Char:return "char";
		case LexemeType.String:return "string";
		case LexemeType.Void:return "void";
		case LexemeType.Star:return "*";
		case LexemeType.OpeningSquareBracket:return "[";
		case LexemeType.ClosingSquareBracket:return "]";
		case LexemeType.OpeningAngularBracket:return "<";
		case LexemeType.ClosingAngularBracket:return ">";
		case LexemeType.OpeningCurvedBracket:return "(";
		case LexemeType.ClosingCurvedBracket:return ")";
		case LexemeType.DoubleOpeningSquareBracket:return "[[";
		case LexemeType.DoubleClosingSquareBracket:return "]]";
		case LexemeType.DoubleOpeningAngularBracket:return "<<";
		case LexemeType.DoubleClosingAngularBracket:return ">>";
		case LexemeType.DoubleOpeningCurvedBracket:return "((";
		case LexemeType.DoubleClosingCurvedBracket:return "))";
		case LexemeType.Interface:return "interface";
		case LexemeType.Enumeration:return "enumeration";
		case LexemeType.UserSymbol:return "o<<";
		case LexemeType.DatabaseSymbol:return "o((";
		case LexemeType.Arrow:return "-->";
		case LexemeType.Line:return "---";
		case LexemeType.Dotted:return "...";
		case LexemeType.DoubleSlash:return "//";
		case LexemeType.OpeningMultiLineComment:return "/*";
		case LexemeType.ClosingMultiLineComment:return "*/";

		case LexemeType.EOF:return "EOF";
	}

	return null;
}

/** 
 * A token in the string that qualifies as an identified symbol in the grammer .
 * A Lexeme should be thought of as an instance of a terminal in the CFG.
 */
export class Lexeme{
	type:LexemeType;
	start:number;
	length:number;

	/**
	 * Index in the terminal list of the context free grammer. This is set and read 
	 * by the parsing algorithm and as such should not be touched.
	 */
	terminalIndex:number;

	constructor(type:LexemeType,startIndex:number,length:number){
		this.type=type;
		this.start=startIndex;
		this.length=length;
	}

	toString():string{
		return this.type+" ";
	}
}

class Keyword{
	word:string;
	type:LexemeType;

	constructor(word:string,type:LexemeType){
		this.word=word;
		this.type=type;
	}

	lexemeMatch(container:string,fromIndex:number):Lexeme{
		if(fromIndex+this.word.length>container.length){
			return null;
		}
		var fromHere=container.substring(fromIndex,fromIndex+this.word.length);
		if(this.word==fromHere){
			return new Lexeme(this.type,fromIndex,this.word.length);
		}else{
			return null;
		}
	}

	toString():string{
		return this.word+" ("+this.type+")";
	}
}

var keywordList:Keyword[]=[
	new Keyword("interface",LexemeType.Interface),
	new Keyword("enumeration",LexemeType.Enumeration),
	new Keyword("int",LexemeType.Int),
	new Keyword("char",LexemeType.Char),
	new Keyword("bool",LexemeType.Bool),
	new Keyword("float",LexemeType.Float),
	new Keyword("string",LexemeType.String),
	new Keyword("void",LexemeType.Void),
	new Keyword("+",LexemeType.Plus),
	new Keyword("-",LexemeType.Minus),
	new Keyword("#",LexemeType.HashTag),
	new Keyword("~",LexemeType.Tilde),
	new Keyword(":",LexemeType.Colon),
	new Keyword(",",LexemeType.Comma),
	new Keyword("*",LexemeType.Star),
	new Keyword("o<<",LexemeType.UserSymbol),
	new Keyword("o((",LexemeType.DatabaseSymbol),
	new Keyword("-->",LexemeType.Arrow),
	new Keyword("---",LexemeType.Line),
	new Keyword("...",LexemeType.Dotted),
	new Keyword("//",LexemeType.DoubleSlash),
	new Keyword("/*",LexemeType.OpeningMultiLineComment),
	new Keyword("*/",LexemeType.ClosingMultiLineComment),
	new Keyword("[",LexemeType.OpeningSquareBracket),
	new Keyword("]",LexemeType.ClosingSquareBracket),
	new Keyword("(",LexemeType.OpeningCurvedBracket),
	new Keyword(")",LexemeType.ClosingCurvedBracket),
	new Keyword("<",LexemeType.OpeningAngularBracket),
	new Keyword(">",LexemeType.ClosingAngularBracket),
	new Keyword("[[",LexemeType.DoubleOpeningSquareBracket),
	new Keyword("]]",LexemeType.DoubleClosingSquareBracket),
	new Keyword("((",LexemeType.DoubleOpeningCurvedBracket),
	new Keyword("))",LexemeType.DoubleClosingCurvedBracket),
	new Keyword("<<",LexemeType.DoubleOpeningAngularBracket),
	new Keyword(">>",LexemeType.DoubleClosingAngularBracket),
	
]

//sort the keyword list in descending order because
//longer keywords are prioritised over shorter ones during ambiguities. 
//Example: 'interface' before 'int' 
keywordList.sort((a:Keyword,b:Keyword)=>{
	return b.word.length-a.word.length;
});

/** 
 * Performs lexical analysis algorithm to yield a list of lexeme(of various categories).
 */
export function getLexemeList(input:string):Lexeme[]{
	var lexemeList:Lexeme[]=[];

	var inputLength=input.length;
	var i=0;
	while(i<inputLength){

		//check for match with any keyword
		//this is an O(1) operation since the keyword list is finitely defined
		//in other words, think of this as multiple if else statements
		var keywordMatch:Lexeme=null;
		for(let keyword of keywordList){

			//if there is a match, store the result, and break from this inner loop
			var keywordMatch=keyword.lexemeMatch(input,i);
			if(keywordMatch!=null){
				break;
			}
		}
		
		//for a keyword match, push to lexeme list and increment the index by that much length for the next iteration
		if(keywordMatch!=null){
			lexemeList.push(keywordMatch);
			i+=keywordMatch.length;
			continue;
		}

		//if no keywords matched by now, check to see if it is any other type of symbol
		if(isAlpha(input.charAt(i))){ //identifier check (alphanumeric with _ accepted)
			var startIndex=i;
			while (i < inputLength &&
				(isAlpha(input.charAt(i)) ||
					isDigit(input.charAt(i))) ||
				"_" == input.charAt(i)
			) {
				i++;
			}
			var length = i - startIndex;
			var identifier = new Lexeme(LexemeType.Identifier, startIndex, length);
			lexemeList.push(identifier);
		} else if (isDigit(input.charAt(i))) { // number check
			var startIndex = i;
			while (i < inputLength && isDigit(input.charAt(i))){
				i++;
			}
			var length = i - startIndex;
			var digitsOnly = new Lexeme(LexemeType.Number, startIndex, length);
			lexemeList.push(digitsOnly);
		} else if (" "==input.charAt(i)){ // skip whitespaces
			//simply skip whitespaces
			while (i < inputLength && (" "==input.charAt(i))){
				i++;
			}
		} else{ // all unknowns symbols are thrown as unknown lexeme types
			var unknown=new Lexeme(LexemeType.Unknown,i,1);
			lexemeList.push(unknown);
			i++;
		}
	}

	//at the very end, append the EOF symbol
	lexemeList.push(new Lexeme(LexemeType.EOF,input.length,0));
	return lexemeList;
}

function isAlpha(str:string):boolean{
	return /^[a-zA-Z]+$/.test(str);
}

function isDigit(str:string):boolean{
	return /^\d+$/.test(str);
}

