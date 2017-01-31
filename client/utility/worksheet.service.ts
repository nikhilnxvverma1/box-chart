import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Worksheet } from '../model/worksheet';
import { DiagramModel,DiagramEdge,DiagramNode } from '../model/worksheet';
import { GenericDiagramNode,GenericDiagramNodeType } from '../model/worksheet';
import { Http,Headers,RequestOptions,Response,URLSearchParams } from '@angular/http';
import { Access } from '../shared-codes';

@Injectable()
/**contains methods that deal with interaction with backend pertaining to worksheet*/
export class WorksheetService{

	private static readonly WORKSHEET_URL="api/get-worksheet";
	private static readonly UPDATE_DIAGRAM_MODEL_URL="api/update-diagram-model";

	constructor(private http:Http){}

	/** 
	 * Gets the worksheet only if associated with the logged in user,otherwise null.
	 * 'rid' specifies the record id.
	 */
	getWorksheet(rid:string):Observable<Worksheet>{
		let params=new URLSearchParams();
		params.set('worksheetRid',rid);
		return this.http.get(WorksheetService.WORKSHEET_URL,{search:params}).map((response:Response)=>{return this.worksheetAccess(response)});
	}

	private worksheetAccess(response:Response):Worksheet{
		let json=response.json();
		if(json.access!=Access.Granted){
			return null;
		}
		let worksheet=new Worksheet();
		worksheet.title=json.worksheet.title;
		worksheet.description=json.worksheet.description;
		worksheet.rid=json.worksheet['@rid'];
		let jsonDataString:string=json.worksheet["diagramModel"];
		// console.debug(jsonDataString);
		if(jsonDataString!=null && jsonDataString.trim()!=''){
			let jsonData=JSON.parse(jsonDataString);
			worksheet.diagramModel=this.unpackDiagramModelFromJson(jsonData);
		}else{
			worksheet.diagramModel=new DiagramModel();
		}
		return worksheet;
	}

	/** Updates the diagram model for the given worksheet rid. */
	updateDiagramModel(worksheetRid:string,diagramModelInJson:any):Observable<boolean>{
		let body={
			"worksheetRid":worksheetRid,
			"diagramModel":diagramModelInJson
		}
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options=new RequestOptions({headers:headers});
		return this.http.post(WorksheetService.UPDATE_DIAGRAM_MODEL_URL,body,options).map((res:Response)=>{return res.json()});
	}

	unpackDiagramModelFromJson(json:any):DiagramModel{
		let diagramModel=new DiagramModel();
		for(let jsonNode of json.nodeList){
			diagramModel.nodeList.push(DiagramNode.objectFromJSON(jsonNode));
		}

		for(let jsonEdge of json.edgeList){
			let from=this.nodeWithId(jsonEdge.fromId,diagramModel.nodeList);
			let to=this.nodeWithId(jsonEdge.toId,diagramModel.nodeList);
			
			let edge=DiagramEdge.objectFromJSON(jsonEdge);
			edge.from=from;
			from.outgoingEdges.push(edge);
			let fromTrackingPoint=from.geometry.getTrackingPoint();
			fromTrackingPoint.copyInformationFrom(edge.fromPoint);
			edge.fromPoint=fromTrackingPoint;

			edge.to=to;
			to.incomingEdges.push(edge);
			let toTrackingPoint=to.geometry.getTrackingPoint();
			toTrackingPoint.copyInformationFrom(edge.toPoint);
			edge.toPoint=toTrackingPoint;

			diagramModel.edgeList.push(edge);

		}
		return diagramModel;
	}

	private nodeWithId(id:number,list:DiagramNode[]):DiagramNode{
		for(let node of list){
			if(node.id==id){
				return node;
			}
		}
		return null;
	}
	
}