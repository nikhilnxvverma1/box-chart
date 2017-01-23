import { Component,ViewChild,OnInit } from '@angular/core';
import { animate,style,trigger,transition,state } from '@angular/core';
import { TransformService } from '../utility/transform.service';
import { Point,Rect } from '../model/geometry';
import { SidebarComponent } from './sidebar.component';
import { ArtboardComponent } from './artboard.component';
import { Workspace } from '../editor/workspace';
import { Worksheet } from '../model/worksheet';

const SpaceKey=32;

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
export class WorkspaceComponent implements OnInit{

    //moving window is a virtual rect that moves across the massive area of the artboard
    private movingWindow:Rect;
    private windowMovementAllowed=false;//allowed only when space is held
	private workspace:Workspace;
    private dragEntered=false;
    private startX=0;
    private startY=0;
    private lastX=0;
    private lastY=0;

    @ViewChild(SidebarComponent)
    private sidebar:SidebarComponent;

    @ViewChild(ArtboardComponent)
    private artboard:ArtboardComponent;    

    constructor(private transformService:TransformService){}

    ngOnInit(){
        //'window' here refers to the window object

        //get the width and height of the 'device' window and get the 
        this.movingWindow=new Rect(
          this.artboard.massiveArea.width/2-window.innerWidth/2,
          this.artboard.massiveArea.height/2-window.innerHeight/2,
          window.innerWidth,
          window.outerHeight);
        this.positionArtboardBasis(this.movingWindow);

		//get the worksheet for the given rid defined in url params
		this.workspace=new Workspace(new Worksheet());
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
        if(event.keyCode==SpaceKey){
            this.windowMovementAllowed=true;
        }
    }

    keyup(event:KeyboardEvent){
        if(event.keyCode==SpaceKey){
            this.windowMovementAllowed=false;
        }
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
        }
        this.lastX=event.clientX;
        this.lastY=event.clientY;
    }

    mouseup(event:MouseEvent){
        this.dragEntered=false;
    }

    resize(event:Event){
        console.log("Window resize changing moving window size");
        this.movingWindow.width=window.innerWidth;//TODO what if the scale is different?
        this.movingWindow.height=window.innerHeight;
    }
}