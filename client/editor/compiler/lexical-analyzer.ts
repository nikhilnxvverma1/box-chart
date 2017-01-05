

/** Each lexeme can be identified by its type. These help in easily categorising the different tokens in a string. */
export enum LexemeType{
	Identifier,
	AccessModifer,
	Colon,
	Int,
	Float,
	Bool,
	Char,
	String,
	Void,
	Star,
	OpeningSquareBracket,
	ClosingSquareBracket,
	OpeningAngularBracket,
	ClosingAngularBracket
	//TODO add more as needed
	
}

/** A token in the string that qualifies as an identified symbol in the grammer */
export class Lexeme{
	type:LexemeType;
	start:number;
	end:number;
}

export function getLexemeList(input:string):Lexeme[]{
	
	return null;
}