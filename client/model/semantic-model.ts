

export class SemanticModel{
	classDefinitionList:ClassDefinition[]=[];
	interfaceDefinitionList:InterfaceDefinition[]=[];

	/** Finds the class for the given name in the class definition list */
	getClassByName(name:string):ClassDefinition{
		for(let classDefinition of this.classDefinitionList){
			if(classDefinition.getName()==name){
				return classDefinition;
			}
		}
		return null;
	}

	/** Finds the interface for the given name in the interface definition list */
	getInterfaceByName(name:string):InterfaceDefinition{
		for(let interfaceDefinition of this.interfaceDefinitionList){
			if(interfaceDefinition.getName()==name){
				return interfaceDefinition;
			}
		}
		return null;
	}
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

/** 
 * Type fpr holdind primitive data like int,char,bool and also(exceptionally) string. 
 * Refrain from creating new ones as these type are predefined and already exist as
 * static variable in the SemanticModel class  
 */
export class PrimitiveWrapper implements TypeNode{
	type:PrimitiveType;

	constructor(type:PrimitiveType){
		this.type=type;
	}

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
	isStatic:boolean=false;
	isFinal:boolean=false;
	isAbstract:boolean=false;
	methodPrototype:MethodPrototype;

	constructor(identifier:string,returnType:TypeNode,accessSpecifier:AccessSpecifier=AccessSpecifier.Public){
		this.methodPrototype=new MethodPrototype(identifier,returnType);
		this.accessSpecifier=accessSpecifier;
	}
}

export class MethodPrototype{
	identifier:string;
	argumentList:VariableDefinition[]=[];
	returnType:TypeNode;

	constructor(identifier:string,returnType:TypeNode){
		this.identifier=identifier;
		this.returnType=returnType;
	}
}

export class FieldMember{
	accessSpecifier:AccessSpecifier;
	isStatic:boolean;
	isFinal:boolean;
	variableDefinition:VariableDefinition

	constructor(name:string,type:TypeNode,accessSpecifier:AccessSpecifier=AccessSpecifier.Public){
		this.accessSpecifier=accessSpecifier;
		this.variableDefinition=new VariableDefinition(name,type);
	}
}

export class VariableDefinition{
	name:string;
	type:TypeNode;

	constructor(name:string,type:TypeNode){
		this.name=name;
		this.type=type;
	}
}

export class ClassDefinition implements TypeNode{
	
	name:string;
	isAbstract:boolean;
	fieldList:FieldMember[]=[];
	methodList:MethodMember[]=[];

	parentClass:ClassDefinition;
	subClasses:ClassDefinition[]=[];
	interfacesImplemented:InterfaceDefinition[]=[];

	constructor(name:string,parentClass:ClassDefinition=null){
		this.name=name;
		this.parentClass=parentClass;
	}

	getName():string{
		return this.name;
	}

	addSubClasses(...subClasses:ClassDefinition[]){
		for(var i=0;i<subClasses.length;i++){
			this.subClasses.push(subClasses[i]);
		}
	}
}

export class InterfaceDefinition implements TypeNode{

	name:string;
	methodList:MethodPrototype[]=[];//it can be assumed that all the methods are non static public

	parentInterface:InterfaceDefinition;
	subInterfaces:InterfaceDefinition[]=[];
	implementingClasses:ClassDefinition[]=[];

	constructor(name:string){
		this.name=name;
	}

	getName():string{
		return this.name;
	}

	addImplementingClasses(...implementations:ClassDefinition[]){
		for(var i=0;i<implementations.length;i++){
			this.implementingClasses.push(implementations[i]);
		}
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

export const IntWrapper=new PrimitiveWrapper(PrimitiveType.IntType);
export const CharWrapper=new PrimitiveWrapper(PrimitiveType.CharType);
export const BoolWrapper=new PrimitiveWrapper(PrimitiveType.BoolType);
export const FloatWrapper=new PrimitiveWrapper(PrimitiveType.FloatType);
export const StringWrapper=new PrimitiveWrapper(PrimitiveType.StringType);