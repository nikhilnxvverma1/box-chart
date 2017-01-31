import { Component,ViewChild,OnInit } from '@angular/core';
import { animate,style,trigger,transition,state } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorksheetService } from '../utility/worksheet.service';
import { Point,Rect } from '../model/geometry';
import { SidebarComponent } from './sidebar.component';
import { ArtboardComponent } from './artboard.component';
import { Workspace,PostOperationNotification } from '../editor/workspace';
import { Command } from '../editor/command/command';
import { Worksheet,DiagramModel } from '../model/worksheet';

const SPACE_KEY=32;
const Z_KEY=90;
const A_KEY=65;
const ONE_KEY=49;
const EQUALS_KEY=187;
const DASH_KEY=189;

@Component({
    selector: 'workspace',
    styleUrls:['../style/workspace.component.scss'],
    templateUrl: '../view/workspace.component.html',
    animations:[
        trigger('shiftMenuControls',[
            state('unshifted',style({
                left:'20px'
            })),
            state('shifted',style({
                left:'300px'
            })),
            transition('unshifted => shifted', animate('100ms ease-in')),
            transition('shifted => unshifted', animate('100ms ease-out'))
        ])
    ]
})
export class WorkspaceComponent implements OnInit,PostOperationNotification{

    //moving window is a virtual rect that moves across the massive area of the artboard
    private movingWindow:Rect;
    private windowMovementAllowed=false;//allowed only when space is held
	private workspace:Workspace;
	private autosaveStatus=AutoSaveStatus.Saved;
	private autosaveTimerId:NodeJS.Timer=null;
    private dragEntered=false;
    private startX=0;
    private startY=0;
    private lastX=0;
    private lastY=0;

    @ViewChild(SidebarComponent)
    private sidebar:SidebarComponent;

    @ViewChild(ArtboardComponent)
    private artboard:ArtboardComponent;

	constructor(
		private route:ActivatedRoute,
		private worksheetService:WorksheetService){}

	ngOnInit(){

		//get the worksheet for the given rid defined in url params in OnInit method
		this.route.params.subscribe((params:{[key:string]:any})=>{
			
			//get rid from url
			let rid=params['rid'];
			
			//find worksheet using service
			this.worksheetService.getWorksheet(rid).subscribe((worksheet)=>{
				this.workspace=new Workspace(worksheet);
				this.workspace.postOperationListener=this;
			})
		});

		//'window' here refers to the window object
		//get the width and height of the 'device' window and get the 
		this.movingWindow=new Rect(
			this.artboard.massiveArea.width/2-window.innerWidth/2,
			this.artboard.massiveArea.height/2-window.innerHeight/2,
			window.innerWidth,
			window.outerHeight);
		this.positionArtboardBasis(this.movingWindow);

		
	}

    toggleSidebar(){
        this.sidebar.open=!this.sidebar.open;
    }

    positionArtboardBasis(frame:Rect){
        this.artboard.massiveArea.x=-frame.x;
        this.artboard.massiveArea.y=-frame.y;
        this.movingWindow.x=frame.x;
        this.movingWindow.y=frame.y;
    }

    keydown(event:KeyboardEvent){
        if(event.keyCode==SPACE_KEY){
            this.windowMovementAllowed=true;
        }

		if(event.keyCode==Z_KEY && (event.metaKey||event.metaKey)){//cmd + z
			if(event.shiftKey){//cmd+shift+z
				this.workspace.redo();
			}else{
				this.workspace.undo();
			}
		} else if ((event.keyCode == A_KEY || event.keyCode == ONE_KEY) && 
			!this.workspace.contentEditingIsOpen) {
			this.artboard.toggleOpenCreationDrawer();
		}
    }

    keyup(event:KeyboardEvent){
        if(event.keyCode==SPACE_KEY){
            this.windowMovementAllowed=false;
        }
    }

	keypress(event:KeyboardEvent){
        
    }


    mousedown(event:MouseEvent){
        this.dragEntered=true;
        this.startX=event.clientX;
        this.startY=event.clientY;
        this.lastX=event.clientX;
        this.lastY=event.clientY;
    }

    mousemove(event:MouseEvent){
        var dx=event.clientX-this.lastX;
        var dy=event.clientY-this.lastY;
        if(this.dragEntered && this.windowMovementAllowed){
            
            //we inverse the differences because the gesture 'grabs' and pulls the artboard in the other direction
            dx*=-1;
            dy*=-1;

            if(this.movingWindow.x+dx >= this.artboard.massiveArea.x && 
                this.movingWindow.x+dx <= this.artboard.massiveArea.x+this.artboard.massiveArea.width){
                this.movingWindow.x+=dx;
            }

            if(this.movingWindow.y+dy >= this.artboard.massiveArea.y && 
                this.movingWindow.y+dy <= this.artboard.massiveArea.y+this.artboard.massiveArea.height){
                this.movingWindow.y+=dy;
            }
            this.positionArtboardBasis(this.movingWindow);
			this.workspace.currentlyPanning=true;
        }else{
			this.workspace.currentlyPanning=false;
		}
        this.lastX=event.clientX;
        this.lastY=event.clientY;
    }

    mouseup(event:MouseEvent){
        this.dragEntered=false;
		this.workspace.currentlyPanning=false;
    }

    resize(event:Event){
        console.log("Window resize changing moving window size");
        this.movingWindow.width=window.innerWidth;//TODO what if the scale is different?
        this.movingWindow.height=window.innerHeight;
    }

	commandExecuted(command:Command):void{
		this.autoSave();
	}
	
	commandUnexecuted(command:Command):void{
		this.autoSave();
	}

	private autoSave(){
		//issue request to the server after a timeout to update the DiagramModel there
		this.autosaveStatus=AutoSaveStatus.Unsaved;
		if(this.autosaveTimerId!=null){
			clearTimeout(this.autosaveTimerId);
		}
		this.autosaveTimerId=setTimeout(()=>{this.saveNow()},1000);
	}

	private saveNow(){
		this.autosaveStatus=AutoSaveStatus.Saving;
		this.worksheetService.updateDiagramModel(
			this.workspace.worksheet.rid,
			this.workspace.worksheet.diagramModel.toJSON()).
			subscribe((pass:boolean)=>{
				if(pass){
					this.autosaveStatus=AutoSaveStatus.Saved;
				}else{
					this.autosaveStatus=AutoSaveStatus.ServerError;
				}
			},(error:Error)=>{
				this.autosaveStatus=AutoSaveStatus.ServerError;
			});
	}

	private autoSaveStatusString():string{
		if(this.autosaveStatus==AutoSaveStatus.Unsaved){
			// return "Unsaved";
			return "*";
		}else if(this.autosaveStatus==AutoSaveStatus.Saving){
			return "Saving...";
		}else if(this.autosaveStatus==AutoSaveStatus.Saved){
			// return "Saved";
			return "";
		}else if(this.autosaveStatus==AutoSaveStatus.ServerError){
			return "Server Error";
		}else if(this.autosaveStatus==AutoSaveStatus.CantConnectToServer){
			return "Cant Connect to Server";
		}
		return "";
	}
}

enum AutoSaveStatus{
	Unsaved=1,
	Saving=2,
	Saved=3,
	ServerError=4,
	CantConnectToServer=5
}