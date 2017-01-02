import { Component } from '@angular/core';
import { Rect } from '../model/geometry';

@Component({
  selector: 'input-box',
  templateUrl: '../view/input-box.component.html',
})
export class InputBoxComponent  {
	keyboardInput:string;
	rect:Rect;
}