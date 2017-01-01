

export class SemanticGraph{
	typeNodeList:TypeNode[]=[];
}

export abstract class TypeNode{
	incomingEdges:TypeEdge[]=[];
	outgoingEdges:TypeEdge[]=[];
	abstract getName():string;
}

export class TypeEdge{
	from:TypeNode;
	to:TypeNode;
}

export enum PrimitiveType{//minding the name collisions
	IntType=1,//this helps us when using this in templates and jsons where enums are not registered
	FloatType,
	CharType,
	BoolType,
	StringType
}

export class PrimitiveWrapper extends TypeNode{
	type:PrimitiveType;

	static getPrimtiveName(type:PrimitiveType):string{
		switch(type){
			case PrimitiveType.IntType:
				return "int";
			case PrimitiveType.FloatType:
				return "float";
			case PrimitiveType.CharType:
				return "char";
			case PrimitiveType.BoolType:
				return "bool";
			case PrimitiveType.StringType:
				return "string";
			default:
				return "unknown primitive";
		}
	}

	getName():string{
		return PrimitiveWrapper.getPrimtiveName(this.type);
	}
}

export enum AccessSpecifier{//minding the name collisions
	Private=1,//this helps us when using this in templates and jsons where enums are not registered
	Protected,
	Public,
	Default
}

export class MethodMember{
	accessSpecifier:AccessSpecifier;
	isStatic:boolean;
	isFinal:boolean;
	methodPrototype:MethodPrototype;
}

export class MethodPrototype{
	identifier:string;
	argumentList:VariableDefinition[]=[];
	returnType:TypeNode;
}

export class FieldMember{
	accessSpecifier:AccessSpecifier;
	isStatic:boolean;
	isFinal:boolean;
	variableDefinition:VariableDefinition
}

export class VariableDefinition{
	name:string;
	type:TypeNode;
}

export class ClassDefinition extends TypeNode{
	
	name:string;
	isAbstract:boolean;
	fieldList:FieldMember[]=[];
	methodList:MethodMember[]=[];

	getName():string{
		return this.name;
	}
}

export class InterfaceDefinition extends TypeNode{

	name:string;
	methodList:MethodPrototype[]=[];//it can be assumed that all the methods are non static public

	getName():string{
		return this.name;
	}
}