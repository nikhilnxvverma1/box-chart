import { Component } from '@angular/core';
import { trigger,state,transition,style,animate } from '@angular/core';

@Component({
    selector: 'sidebar',
    styleUrls:['../style/sidebar.component.scss'],
    templateUrl: '../view/sidebar.component.html',
    animations: [
    trigger('sidebarOpen', [
      state('close', style({
        left: '-300px'
      })),
      state('open', style({
        left: '0px'
      })),
      transition('close => open', animate('100ms ease-in')),
      transition('open => close', animate('100ms ease-out'))
    ])
  ]
})
export class SidebarComponent  {
    open=false;
}