import { Component,ViewChild } from '@angular/core';
import { animate,style,trigger,transition,state } from '@angular/core';
import { TransformService,Point } from '../service/transform.service';
import { SidebarComponent } from './sidebar.component';

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
export class WorkspaceComponent  {

    @ViewChild(SidebarComponent)
    private sidebar:SidebarComponent;

    constructor(private transformService:TransformService){
      console.log("Workspace instantiated");
      console.log("p="+this.transformService.toModelSpace(new Point(43,54)));
    }

    toggleSidebar(){
        this.sidebar.open=!this.sidebar.open;
    }
}