import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Worksheet } from '../model/worksheet';
import { DiagramEdge,DiagramNode,GenericDiagramNode } from '../model/worksheet';
import { Http,Headers,RequestOptions,Response,URLSearchParams } from '@angular/http';
import { WorksheetAccess } from '../shared-codes';

@Injectable()
/**contains methods that deal with interaction with backend pertaining to worksheet*/
export class WorksheetService{

	private static readonly WORKSHEET_URL="api/get-worksheet";

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
		if(json.access!=WorksheetAccess.Granted){
			return null;
		}
		let worksheet=new Worksheet();
		worksheet.title=json.worksheet.title;
		worksheet.description=json.worksheet.description;
		worksheet.rid=json.worksheet['@rid'];
		return worksheet;
	}
	
}