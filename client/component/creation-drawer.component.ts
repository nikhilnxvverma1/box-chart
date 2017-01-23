import { Component,Input,Output,EventEmitter,ViewChildren,QueryList } from '@angular/core';
import { animate,trigger,state,style,transition } from '@angular/core';
import { Rect,Point } from '../model/geometry';
import { Direction,PressDragReleaseProcessor } from '../utility/common';
import { Workspace } from '../editor/workspace';

export const WIDTH=200;
export const HEIGHT=250;

@Component({
  selector: 'creation-drawer',
  templateUrl: '../view/creation-drawer.component.html',
  animations:[
    trigger('isDrawerOpen',[
        state('open',style({
            width:WIDTH+"px",
            height:HEIGHT+"px"
        })),
        state('closed', style({
            width:"0px",
            height:"0px"
        })),
        transition('open => closed', animate('100ms ease-in')),
        transition('closed => open', animate('100ms ease-out'))
    ])
  ]
})
export class CreationDrawerComponent implements PressDragReleaseProcessor {
    
	@Input('workspace') workspace:Workspace;
	@Input('position') position:Point;
	@Output() requestDragging=new EventEmitter<PressDragReleaseProcessor>();
    
	handleMousePress(event:MouseEvent):void{

	}
	
	handleMouseDrag(event:MouseEvent):void{

	}

	handleMouseRelease(event:MouseEvent):void{

	}

	registerDragIntention(dragProcessor:PressDragReleaseProcessor){
		this.requestDragging.emit(dragProcessor);
	}
}