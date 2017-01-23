import { Injectable } from '@angular/core';
import * as semantic from '../model/semantic-model';
import * as worksheet from '../model/worksheet';
import * as object from '../model/object-model';
import { ArtboardWidth,ArtboardHeight } from '../component/artboard.component';

@Injectable()
export class MockDataService{
	vehicleUml():semantic.SemanticModel{

		//Vehicle abstract class
		var vehicle=new semantic.ClassDefinition("Vehicle");
		vehicle.isAbstract=true;
		vehicle.fieldList.push(new semantic.FieldMember("weight",semantic.FloatWrapper));
		vehicle.fieldList.push(new semantic.FieldMember("passengerCapacity",semantic.IntWrapper));
		vehicle.methodList.push(new semantic.MethodMember("estimatedTotalWeight",semantic.FloatWrapper));
		var getOwnerName=new semantic.MethodMember("getOwnerName", semantic.StringWrapper);
		getOwnerName.isAbstract=true;
		vehicle.methodList.push(getOwnerName);

		//Land, Water, Air sub abstract classes
		var land=new semantic.ClassDefinition("Land",vehicle);
		land.isAbstract=true;
		land.fieldList.push(new semantic.FieldMember("numberOfWheels",semantic.IntWrapper));

		var water=new semantic.ClassDefinition("Water",vehicle);
		water.isAbstract=true;
		water.methodList.push(new semantic.MethodMember("getDockingInformation",semantic.StringWrapper));
		
		var air=new semantic.ClassDefinition("Air",vehicle);
		air.isAbstract=true;
		land.fieldList.push(new semantic.FieldMember("takeOffDistance",semantic.FloatWrapper));
		
		vehicle.subClasses.push(land,water,air);

		//concrete classes
		var truck=new semantic.ClassDefinition("Truck",land);
		var car=new semantic.ClassDefinition("Car",land);
		vehicle.addSubClasses(truck,car);

		var boat=new semantic.ClassDefinition("Boat",water);
		var ship=new semantic.ClassDefinition("Ship",water);
		water.addSubClasses(boat,ship);

		var plane=new semantic.ClassDefinition("Plane",air);
		var helicopter=new semantic.ClassDefinition("Helicopter",air);
		air.addSubClasses(plane,helicopter);

		//cargo interface
		var cargo=new semantic.InterfaceDefinition("Cargo");
		cargo.methodList.push(new semantic.MethodPrototype("weightRequirement",semantic.FloatWrapper));
		cargo.methodList.push(new semantic.MethodPrototype("areaRequirement",semantic.FloatWrapper));

		// Simple luggage concrete class
		var luggage=new semantic.ClassDefinition("Luggage");
		luggage.fieldList.push(new semantic.FieldMember("weight",semantic.FloatWrapper));
		luggage.fieldList.push(new semantic.FieldMember("area",semantic.FloatWrapper));
		luggage.fieldList.push(new semantic.FieldMember("fragile",semantic.BoolWrapper));
		luggage.interfacesImplemented.push(cargo);
		cargo.addImplementingClasses(luggage);
		
		//CargoCarier interface
		var cargoCarrier=new semantic.InterfaceDefinition("CargoCarier");
		cargoCarrier.methodList.push(new semantic.MethodPrototype("maximumAllowedWeight",semantic.FloatWrapper));
		cargoCarrier.methodList.push(new semantic.MethodPrototype("carryCargo",cargo));

		// Vehicle also implements cargo
		vehicle.interfacesImplemented.push(cargo);
		cargo.addImplementingClasses(vehicle);

		truck.interfacesImplemented.push(cargoCarrier);
		plane.interfacesImplemented.push(cargoCarrier);
		ship.interfacesImplemented.push(cargoCarrier);
		cargoCarrier.addImplementingClasses(truck,plane,ship);

		var semanticModel=new semantic.SemanticModel();
		semanticModel.classDefinitionList.push(vehicle,land,water,air,truck,car,ship,boat,plane,helicopter,luggage);
		semanticModel.interfaceDefinitionList.push(cargo,cargoCarrier);
		return semanticModel;
	}

	vehicleWorksheet():worksheet.Worksheet{
		var width=ArtboardWidth;
		var height=ArtboardHeight;
		
		var softwareDesign=this.vehicleUml();

		var vehicle=softwareDesign.getClassByName("Vehicle");
		var vehicleClassDiagram=new worksheet.ClassDiagramNode(vehicle,width/2,height/2);

		var cargoCarrier=softwareDesign.getInterfaceByName("CargoCarier");
		var cargoCarrierDiagram=new worksheet.InterfaceDiagramNode(cargoCarrier,width/2+250,height/2+200);

		var luggage=softwareDesign.getClassByName("Luggage");
		var weight=luggage.getFieldByName("weight");
		var area=luggage.getFieldByName("area");
		var fragile=luggage.getFieldByName("fragile");
		
		var luggageObject=new object.ClassObjectData("luggage",luggage);
		luggageObject.fieldDataList.push(new object.DataHolder(weight.variableDefinition,
				new object.PrimitiveData(semantic.PrimitiveType.FloatType,"23.4")));

		luggageObject.fieldDataList.push(new object.DataHolder(area.variableDefinition,
				new object.PrimitiveData(semantic.PrimitiveType.FloatType,"13.4")));

		luggageObject.fieldDataList.push(new object.DataHolder(weight.variableDefinition,
				new object.PrimitiveData(semantic.PrimitiveType.BoolType,"true")));
		
		var luggageObjectDiagram=new worksheet.ClassObjectDiagram(luggageObject,width/2+100,height/2-300);

		var document=new worksheet.Worksheet();
		
		// the new design does not have these fields
		// document.semanticModel=softwareDesign;
		// document.classDiagramList.push(vehicleClassDiagram);
		// document.interfaceDiagramList.push(cargoCarrierDiagram);
		// document.classObjectDiagramList.push(luggageObjectDiagram);
		return document;
	}
}
