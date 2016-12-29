import { Component,Input,Output,EventEmitter,ViewChildren,QueryList } from '@angular/core';
import { animate,trigger,state,style,transition } from '@angular/core';
import { Rect } from '../model/geometry';
import { Direction,PressDragReleaseProcessor } from '../utility/common';
import { ResizeHandleComponent } from './resize-handle.component';

@Component({
  selector: 'box',
  templateUrl: '../view/box.component.html',
  animations:[
    trigger('selection',[
        state('selected',style({
            borderColor:"#2BA3FC"
        })),
        state('unselected', style({
            borderColor:"black"
        })),
        transition('selected => unselected', animate('100ms ease-in')),
        transition('unselected => selected', animate('100ms ease-out'))
    ])
  ]
})
export class BoxComponent implements PressDragReleaseProcessor {
    
	@Input('rect') rect:Rect;
	@Output() requestDragging=new EventEmitter<PressDragReleaseProcessor>();
	@ViewChildren(ResizeHandleComponent) resizeHandlers:QueryList<ResizeHandleComponent>;
    
    isSelected=false;

    toggleSelection(){
        this.isSelected=!this.isSelected;
    }	

	handleMousePress(event:MouseEvent):void{

	}
	
	handleMouseDrag(event:MouseEvent):void{

	}

	handleMouseRelease(event:MouseEvent):void{

	}

	registerDragIntention(dragProcessor:PressDragReleaseProcessor){
		this.requestDragging.emit(dragProcessor);
	}

	updateAllResizeHandlers(resizeHandler:ResizeHandleComponent){
		this.resizeHandlers.forEach((item)=>{
			item.updateHandlePosition();
		});
	}
}