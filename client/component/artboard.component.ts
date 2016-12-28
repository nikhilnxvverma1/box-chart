import { Component,Output,EventEmitter } from '@angular/core';
import { animate,trigger,state,transition,style } from '@angular/core';
import { Rect } from '../model/geometry';

export const ArtboardWidth=3200;
export const ArtboardHeight=(3/2)*ArtboardWidth;

@Component({
  selector: 'artboard',
  styleUrls:['../style/artboard.component.scss'],
  templateUrl: '../view/artboard.component.html',
  animations:[
    trigger('test',[
        state('opaque',style({
            opacity:"1"
        })),
        state('translucent', style({
            opacity:"0.2"
        })),
        transition('opaque => translucent', animate('1000ms ease-in')),
        transition('translucent => opaque', animate('1000ms ease-out'))
    ])
  ]
})
export class ArtboardComponent  {
    massiveArea:Rect;

    @Output() mousedownEvent=new EventEmitter<MouseEvent>();
    @Output() mousemoveEvent=new EventEmitter<MouseEvent>();
    @Output() mouseupEvent=new EventEmitter<MouseEvent>();


    constructor(){
      this.massiveArea=new Rect(0,0,ArtboardWidth,ArtboardHeight);
    }

    del=new Rect(ArtboardWidth/2,ArtboardHeight/2,200,100);
    testOp=false;

    toggleOpacity(){
        this.testOp=!this.testOp;
    }
}