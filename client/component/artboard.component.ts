import { Component,Output,EventEmitter } from '@angular/core';
import { Rect } from '../model/geometry';

export const ArtboardWidth=3200;
export const ArtboardHeight=(3/2)*ArtboardWidth;

@Component({
  selector: 'artboard',
  styleUrls:['../style/artboard.component.scss'],
  templateUrl: '../view/artboard.component.html',
})
export class ArtboardComponent  {
    massiveArea:Rect;

    @Output() mousedownEvent=new EventEmitter<MouseEvent>();
    @Output() mousemoveEvent=new EventEmitter<MouseEvent>();
    @Output() mouseupEvent=new EventEmitter<MouseEvent>();


    constructor(){
      this.massiveArea=new Rect(0,0,ArtboardWidth,ArtboardHeight);
    }
}