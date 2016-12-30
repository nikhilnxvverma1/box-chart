import { Geometry,Rect } from './geometry';

//the following constants are used to identify objects of this data model in JSON
export const WorksheetType="Worksheet";//TODO may not be required

export class Worksheet{
	typeList:TypeDefinition[]=[];
	commentList:Comment[]=[];
}

export interface VisualBlock{
	getGeometry():Geometry;
}

export enum PrimitiveType{//minding the name collisions
	IntType=1,//this helps us when using this in templates and jsons where enums are not registered
	FloatType,
	CharType,
	BoolType,
	StringType
}

export class PrimitiveWrapper implements TypeDefinition{
	type:PrimitiveType;

	getName():string{
		switch(this.type){
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
}

export enum AccessSpecifier{//minding the name collisions
	Private=1,//this helps us when using this in templates and jsons where enums are not registered
	Protected,
	Public,
	Default
}

export class MethodDefinition{
	accessSpecifier:AccessSpecifier;
	identifier:string;
	argumentList:VariableDefinition[]=[];
	returnType:TypeDefinition;
}

export class VariableDefinition{
	name:string;
	type:TypeDefinition;
	value:any;//TODO after introducing models for storing objects in type diagram this will be revised
}

export class FieldDefinition extends VariableDefinition{
	accessSpecifier:AccessSpecifier;
	isStatic:boolean;
}

export interface TypeDefinition{
	getName():string;
}

export class ClassDefinition implements TypeDefinition,VisualBlock{
	
	name:string;
	isAbstract:boolean;
	fieldList:FieldDefinition[]=[];
	methodList:MethodDefinition[]=[];
	rect:Rect;

	getName():string{
		return this.name;
	}

	getGeometry():Geometry{
		return this.rect;
	}
}

export class InterfaceDefinition implements TypeDefinition,VisualBlock{

	name:string;
	methodList:MethodDefinition[]=[];
	rect:Rect;

	getName():string{
		return this.name;
	}

	getGeometry():Geometry{
		return this.rect;
	}
}

export class Comment implements VisualBlock{

	isMultiLine:boolean;
	comment:string;
	rect:Rect;

	getGeometry():Geometry{
		return this.rect;
	}
}