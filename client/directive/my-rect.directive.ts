import {Directive, Input, ElementRef,Inject} from '@angular/core';
import { Rect } from '../model/geometry';

@Directive({
    selector: '[myRect]'
})
export class MyRectDirective {
    @Input() myRect:Rect;
	@Input() background="white";
	@Input('borderColor') strokeColor='black';
	@Input('borderWidth') strokeWidth=2;
	@Input('borderStyle') strokeStyle='solid';
	@Input() opacity=1;

    constructor(@Inject(ElementRef) private element: ElementRef) {}
	
    protected ngOnChanges() {
        this.element.nativeElement.style.position="absolute";
        this.element.nativeElement.style.left=this.myRect.x+"px";
        this.element.nativeElement.style.top=this.myRect.y+"px";
        this.element.nativeElement.style.width=this.myRect.width+"px";
        this.element.nativeElement.style.height=this.myRect.height+"px";
		this.element.nativeElement.style.background=this.background;
		this.element.nativeElement.style.borderColor=this.strokeColor;
		this.element.nativeElement.style.borderWidth=this.strokeWidth+"px";
		this.element.nativeElement.style.borderStyle=this.strokeStyle;
		this.element.nativeElement.style.opacity=this.opacity;
    }
}