import { Component,Input,Output,EventEmitter,ViewChildren,QueryList } from '@angular/core';
import { animate,trigger,state,style,transition } from '@angular/core';
import { Rect,Point } from '../model/geometry';
import { Direction,PressDragReleaseProcessor } from '../utility/common';
import { Workspace } from '../editor/workspace';
import { DragAndDropCommand } from '../editor/command/drag-and-drop';
import { CreationDrawerItem,creationDrawerList } from '../editor/creation-item';

export const WIDTH=200;
export const HEIGHT=250;

@Component({
  selector: 'creation-drawer',
  templateUrl: '../view/creation-drawer.component.html',
  animations:[
    trigger('isDrawerOpen',[
        state('open',style({
            width:WIDTH+"px",
            height:HEIGHT+"px",
			transform:"scale(1,1)"
        })),
        state('closed', style({
            width:WIDTH+"px",
            height:HEIGHT+"px",
			transform:"scale(0,0)"
        })),
        transition('open => closed', animate('100ms ease-in')),
        transition('closed => open', animate('200ms ease-out'))
    ])
  ]
})
export class CreationDrawerComponent implements PressDragReleaseProcessor {
    
	@Input('workspace') workspace:Workspace;
	@Input('position') position:Point;
	@Output() requestDragging=new EventEmitter<PressDragReleaseProcessor>();
	private creationDrawerList=creationDrawerList;
    
	handleMousePress(event:MouseEvent):void{
		console.debug("creation drawer press");
	}
	
	handleMouseDrag(event:MouseEvent):void{
		console.debug("creation drawer drag");
	}

	handleMouseRelease(event:MouseEvent):void{
		console.debug("creation drawer release");
	}

	registerDragIntention(dragProcessor:PressDragReleaseProcessor){
		this.requestDragging.emit(dragProcessor);
	}

	provideDragAndDropFor(creationItem:CreationDrawerItem,event:MouseEvent){
		let dragAndDrop=new DragAndDropCommand(this.workspace,creationItem.diagramModel(),this.position);
		this.requestDragging.emit(dragAndDrop);
	}
}