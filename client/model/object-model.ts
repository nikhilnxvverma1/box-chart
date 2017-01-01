import { TypeNode,FieldMember,PrimitiveType,VariableDefinition } from './semantic-model';
import { ClassDefinition,InterfaceDefinition } from './semantic-model';

/** Denotes data value weather represented by primitives, class objects or interface objects */
export interface Data{
	isPrimitive():boolean;
	stringRepresentation():string;
}

export class PrimitiveData implements Data{
	value:string;
	type:PrimitiveType;

	formatted():string{
		return this.value;// TODO format as per the data type eg: 'char',"string", 34.0, 23, true/false etc.
	}

	isPrimitive():boolean{
		return true;
	}

	stringRepresentation():string{
		return this.formatted();
	}
}

export abstract class ObjectData implements Data{
	description:string;

	abstract getTypeNode():TypeNode;
	isPrimitive():boolean{
		return true;
	}

	stringRepresentation():string{
		return this.description;
	}
}

export class InterfaceObjectData extends ObjectData{
	interfaceDefinition:InterfaceDefinition;
	
	getTypeNode():InterfaceDefinition{
		return this.interfaceDefinition;
	}
}

export class ClassObjectData extends ObjectData{

	classDefinition:ClassDefinition;
	description:string;
	fieldDataList:DataHolder[]=[];

	getTypeNode():ClassDefinition{
		return this.classDefinition;
	}
}

export class DataHolder{
	private variable:VariableDefinition;
	private data:Data;

	constructor(variable:VariableDefinition){
		this.variable=variable;
	}
}