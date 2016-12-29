import {Directive, Input, ElementRef,Inject} from '@angular/core';
import { Circle } from '../model/geometry';

@Directive({
    selector: '[myCircle]'
})
export class MyCircleDirective {
    @Input() myCircle:Circle;
	@Input() background="white";
	@Input('borderColor') strokeColor='black';
	@Input('borderWidth') strokeWidth=2;
	@Input('borderStyle') strokeStyle='solid';
	@Input() opacity=1;

    constructor(@Inject(ElementRef) private element: ElementRef) {}
	
    protected ngOnChanges() {
        this.element.nativeElement.style.borderRadius="50%";

        this.element.nativeElement.style.position="absolute";
        this.element.nativeElement.style.left=this.myCircle.x+"px";
        this.element.nativeElement.style.top=this.myCircle.y+"px";
        this.element.nativeElement.style.width=this.myCircle.radius*2+"px";
        this.element.nativeElement.style.height=this.myCircle.radius*2+"px";
		this.element.nativeElement.style.background=this.background;
		this.element.nativeElement.style.borderColor=this.strokeColor;
		this.element.nativeElement.style.borderWidth=this.strokeWidth+"px";
		this.element.nativeElement.style.borderStyle=this.strokeStyle;
		this.element.nativeElement.style.opacity=this.opacity;

    }
}