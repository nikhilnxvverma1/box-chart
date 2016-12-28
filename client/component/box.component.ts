import { Component,Input } from '@angular/core';
import { animate,trigger,state,style,transition } from '@angular/core';
import { Rect } from '../model/geometry';
import { Direction } from '../utility/common';

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
export class BoxComponent  {
    
	@Input('rect') rect:Rect;
    isSelected=false;

    toggleSelection(){
        this.isSelected=!this.isSelected;
    }	
}