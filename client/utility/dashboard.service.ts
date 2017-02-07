import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user-account';
import { Worksheet } from '../model/worksheet';
import { Http,Headers,RequestOptions,Response } from '@angular/http';

@Injectable()
export class DashboardService{

	//TODO move these urls in the shared-codes file
	private static readonly DASHBOARD_URL="api/dashboard";
	private static readonly CREATE_WORKSHEET_URL="api/create-worksheet";
	private static readonly REMOVE_WORKSHEET_URL="api/remove-worksheet";
	private static readonly MODIFY_WORKSHEET_URL="api/modify-worksheet-info";

	constructor(private http:Http){}

	/** 
	 * Gets the list of worksheets associated with the logged in user.
	 * Will return null(Observable) if the user is not in session. 
	 */
	worksheetListForLoggedInUser():Observable<Worksheet[]>{
		return this.http.get(DashboardService.DASHBOARD_URL).map((response:Response)=>{return this.toWorksheetList(response)});
	}

	private toWorksheetList(response:Response):Worksheet[]{
		let worksheetList:Worksheet[]=[];
		let arrayBody=response.json();

		for(let i=0;i<arrayBody.length;i++){
			worksheetList[i]=this.worksheetFromJson(arrayBody[i]);
		}

		return worksheetList;
	}

	private worksheetFromJson(json:any):Worksheet{
		let worksheet=new Worksheet();
		worksheet.title=json.title;
		worksheet.description=json.description;
		worksheet.rid=json['@rid'];
		return worksheet;
	}

	/** Creates a worksheet for the logged in user. */
	createWorksheet(title:string,description:string):Observable<Worksheet>{
		let body={
			"title":title,
			"description":description
		}
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options=new RequestOptions({headers:headers});
		return this.http.post(DashboardService.CREATE_WORKSHEET_URL,body,options).map((res:Response)=>{return this.worksheetFromJson(res.json())});
	}

	/** 
	 * Removes the specified worksheet from the logged in user.
	 * Returns false in case the worksheet is not associated with the user. 
	 */
	removeWorksheet(worksheet:Worksheet):Observable<boolean>{
		let body={
			"worksheetRid":worksheet.rid
		}
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options=new RequestOptions({
			headers:headers,
			body:body
		});
		return this.http.delete(DashboardService.REMOVE_WORKSHEET_URL,options).map((res:Response)=>{return (res.json())});
	}

	/** Creates a worksheet for the logged in user. */
	modifyWorksheetInfo(worksheet:Worksheet,title:string,description:string):Observable<Worksheet>{
		let body={
			"worksheetRid":worksheet.rid,
			"title":title,
			"description":description
		}
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options=new RequestOptions({headers:headers});
		return this.http.put(DashboardService.MODIFY_WORKSHEET_URL,body,options).map((res:Response)=>{return this.worksheetFromJson(res.json())});
	}
}