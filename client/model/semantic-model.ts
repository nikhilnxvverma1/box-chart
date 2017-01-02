

export class SemanticGraph{
	typeNodeList:TypeNode[]=[];
}

export interface TypeNode{
	getName():string;
}

export enum PrimitiveType{//minding the name collisions
	IntType=1,//this helps us when using this in templates and jsons where enums are not registered
	FloatType,
	CharType,
	BoolType,
	StringType
}

export class PrimitiveWrapper implements TypeNode{
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

export class ClassDefinition implements TypeNode{
	
	name:string;
	isAbstract:boolean;
	fieldList:FieldMember[]=[];
	methodList:MethodMember[]=[];

	parentClass:ClassDefinition;
	subClasses:ClassDefinition[];

	getName():string{
		return this.name;
	}
}

export class InterfaceDefinition implements TypeNode{

	name:string;
	methodList:MethodPrototype[]=[];//it can be assumed that all the methods are non static public

	parentInterface:InterfaceDefinition;
	subInterfaces:InterfaceDefinition;
	implementingClasses:ClassDefinition;

	getName():string{
		return this.name;
	}
}

export enum CollectionType{
	Array=1,
	LinkedList,
	Stack,
	Queue,
	Graph
}

export class GenericCollection implements TypeNode{
	type:CollectionType;
	generic:TypeNode;

	static getCollectionName(type:CollectionType,generic:TypeNode):string{
		var genericTypeName="object"
		if(generic!=null){
			genericTypeName=generic.getName();
		}

		var collectionName:string;
		switch(type){
			case CollectionType.Array:
				collectionName="Array";
			case CollectionType.LinkedList:
				collectionName="LinkedList";
			case CollectionType.Stack:
				collectionName="Stack";
			case CollectionType.Queue:
				collectionName="Queue";
			case CollectionType.Graph:
				collectionName="Graph";
			default:
				collectionName="Unknown Collection";
		}
		return collectionName+"<"+genericTypeName+">";
	}

	getName():string{
		return GenericCollection.getCollectionName(this.type,this.generic);
	}
}