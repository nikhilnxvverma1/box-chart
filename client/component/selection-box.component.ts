import { Component, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/core';
import { Rect, Point } from '../model/geometry';
import { Direction } from '../utility/common';
import { Workspace } from '../editor/workspace';

@Component({
	selector: 'selection-box',
	templateUrl: '../view/selection-box.component.html',
})
export class SelectionBoxComponent {

	@Input('workspace') workspace: Workspace;
	rect: Rect = new Rect(1500, 900, 200, 300);

	//for controlling selection box positioning
	private active = false;
	private originalPress: Point;
	private difference: Point;

	mousePressed(event: MouseEvent): void {
		console.debug("Selection box pressed " + (<HTMLDivElement>event.target).id);
		this.active = true;
		this.rect.x = event.offsetX;
		this.rect.y = event.offsetY;
		this.rect.width = 0;
		this.rect.height = 0;
		this.difference = new Point(0, 0);
		this.originalPress = new Point(this.rect.x, this.rect.y);
	}

	mouseMoved(event: MouseEvent): void {
		if (this.active) {
			console.debug("Selection box dragged " + (<HTMLDivElement>event.target).id + " : " + event.movementX);

			this.difference.x += event.movementX;
			this.difference.y += event.movementY;

			if (this.difference.x < 0) {
				this.rect.x = this.originalPress.x + this.difference.x;
				this.rect.width = this.difference.x * -1;
			} else {
				this.rect.x = this.originalPress.x;
				this.rect.width = this.difference.x;
			}

			if (this.difference.y < 0) {
				this.rect.y = this.originalPress.y + this.difference.y;
				this.rect.height = this.difference.y * -1;
			} else {
				this.rect.y = this.originalPress.y;
				this.rect.height = this.difference.y;
			}
		}
	}

	mouseReleased(event: MouseEvent): void {
		console.debug("Selection box released");
		this.active = false;
	}
}