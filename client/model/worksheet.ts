
//the following constants are used to identify objects of this data model in JSON
export const WorksheetType="Worksheet";

export class Worksheet{
	type=WorksheetType;
	//TODO
}

export enum PrimitiveType{
	IntType=1,//this helps us when parsing from JSON
	FloatType,
	CharType,
	BoolType,
	StringType
}

export enum AccessSpecifier{
	Private=1,//this helps us when parsing from JSON
	Protected,
	Public,
	Default
}

export class MethodDefinition{
	accessSpecifier:AccessSpecifier;
	identifier:string;
	returnType:TypeDefinition;
}

export abstract class TypeDefinition{
	
}