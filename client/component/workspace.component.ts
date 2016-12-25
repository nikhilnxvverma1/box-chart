import { Component,ViewChild } from '@angular/core';
import { animate,style,trigger,transition,state } from '@angular/core';
import { TransformService,Point,Rect } from '../service/transform.service';
import { SidebarComponent } from './sidebar.component';
import { ArtboardComponent } from './artboard.component';

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
export class WorkspaceComponent{

    //moving window is a virtual rect that moves across the massive area of the artboard
    private movingWindow:Rect;

    @ViewChild(SidebarComponent)
    private sidebar:SidebarComponent;

    @ViewChild(ArtboardComponent)
    private artboard:ArtboardComponent;    

    constructor(private transformService:TransformService){

      //get the width and height of the device window and get the 
      this.movingWindow=new Rect(0,0,window.innerWidth,window.outerHeight);
    }

    toggleSidebar(){
        this.sidebar.open=!this.sidebar.open;
    }

    keydown(event:Event){
        console.log("key held down");
    }
}