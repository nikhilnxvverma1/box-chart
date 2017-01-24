import { Component,Input,Output,OnInit,EventEmitter } from '@angular/core';
import { trigger,state,transition,style,animate } from '@angular/core';
import { Point,Rect } from '../model/geometry';
import { Direction,PressDragReleaseProcessor } from '../utility/common';
import { RectTrackingPoint } from '../model/tracking-point';

@Component({
    selector: 'resize-handle',
    templateUrl: '../view/resize-handle.component.html'
})
export class ResizeHandleComponent implements OnInit,PressDragReleaseProcessor{
	static HandleWidth=8;

	@Input('rect') rect:Rect;
	@Input('placement') placement:Direction;
	@Output() requestDragging=new EventEmitter<PressDragReleaseProcessor>();
	@Output() updateAllResizeHandlers=new EventEmitter<ResizeHandleComponent>();

	private handle:Rect;
	private pointOnSide:RectTrackingPoint;
	private cursor:string;

	//the following private fields are used exclusively to handle the drag event
	private startX=0;
	private startY=0;
	private lastX=0;
	private lastY=0;

	ngOnInit(){
		this.initHandle();
		this.updateHandlePosition();
	}

	private initHandle(){

		//initialize tracking point based on this handles placement
		this.pointOnSide=new RectTrackingPoint(this.rect);
		switch(this.placement){
			case Direction.Top:
				this.pointOnSide.fraction=0.5;
				this.pointOnSide.side=Direction.Top;
				this.cursor="ns-resize";
				break;
			case Direction.TopLeft:
				this.pointOnSide.fraction=0;
				this.pointOnSide.side=Direction.Top;
				this.cursor="nwse-resize";
				break;
			case Direction.TopRight:
				this.pointOnSide.fraction=1;
				this.pointOnSide.side=Direction.Top;
				this.cursor="nesw-resize";
				break;
			case Direction.Bottom:
				this.pointOnSide.fraction=0.5;
				this.pointOnSide.side=Direction.Bottom;
				this.cursor="ns-resize";
				break;
			case Direction.BottomLeft:
				this.pointOnSide.fraction=1;//because fraction of rect with side goes clockwise
				this.pointOnSide.side=Direction.Bottom;
				this.cursor="nesw-resize";
				break;
			case Direction.BottomRight:
				this.pointOnSide.fraction=0;
				this.pointOnSide.side=Direction.Bottom;
				this.cursor="nwse-resize";
				break;
			case Direction.Left:
				this.pointOnSide.fraction=0.5;
				this.pointOnSide.side=Direction.Left;
				this.cursor="ew-resize";
				break;
			case Direction.Right:
				this.pointOnSide.fraction=0.5;
				this.pointOnSide.side=Direction.Right;
				this.cursor="ew-resize";
				break;
		}

		//initialize handle's rect by using the tracking point
		var point=this.pointOnSide.pointOnSide(this.pointOnSide.side,this.pointOnSide.fraction);
		this.handle=new Rect(
			point.x-ResizeHandleComponent.HandleWidth/2,
			point.y-ResizeHandleComponent.HandleWidth/2,
			ResizeHandleComponent.HandleWidth,
			ResizeHandleComponent.HandleWidth);

	}

	updateHandlePosition(){
		var point=this.pointOnSide.pointOnGeometry();
		//shift in the x and y relative to handle's width
		var xShift=-0.5;
		var yShift=-0.5;
		//TODO fix minor visual displacement due to border outsets
		this.handle.x=point.x + xShift * ResizeHandleComponent.HandleWidth;
		this.handle.y=point.y + yShift * ResizeHandleComponent.HandleWidth;
	}

	handleMousePress(event:MouseEvent):void{
		this.startX=event.clientX;
		this.startY=event.clientY;
		this.lastX=event.clientX;
		this.lastY=event.clientY;
	}

	handleMouseDrag(event:MouseEvent):void{
		console.debug("resize handle dragged "+(<HTMLDivElement>event.target).id);
		var dx=event.clientX-this.lastX;
		var dy=event.clientY-this.lastY;
		if(event.buttons==1){//only left mouse button pressed
			//change the transform of the rect basis this handle's placement
			switch(this.placement){
				case Direction.TopLeft:
					this.rect.x+=dx;
					this.rect.y+=dy;
					this.rect.width-=dx;
					this.rect.height-=dy;
					break;
				case Direction.Top:
					this.rect.y+=dy;
					this.rect.height-=dy;
					break;
				case Direction.TopRight:
					this.rect.y+=dy;
					this.rect.width+=dx;
					this.rect.height-=dy;
					break;
				case Direction.Right:
					this.rect.width+=dx;
					break;
				case Direction.BottomRight:
					this.rect.width+=dx;
					this.rect.height+=dy;
					break;
				case Direction.Bottom:
					this.rect.height+=dy;
					break;
				case Direction.BottomLeft:
					this.rect.x+=dx;
					this.rect.width-=dx;
					this.rect.height+=dy;
					break;
				case Direction.Left:
					this.rect.x+=dx;
					this.rect.width-=dx;
					break;
			}
			this.updateAllResizeHandlers.emit(this);
		}
		this.lastX=event.clientX;
		this.lastY=event.clientY;
	}

	handleMouseRelease(event:MouseEvent):void{
		//TODO make command
	}

	modelHasBeenChanged(){
		console.log("Model has been changed")
	}
}