import { Component,Input,Output } from '@angular/core';
import { Point } from '../model/geometry';
import { SemanticModel } from '../model/semantic-model';
import { ObjectModel } from '../model/object-model';

@Component({
	selector: 'auto-completion',
	templateUrl: '../view/auto-completion.component.html',
	styleUrls:['../style/auto-completion.component.scss']
})
export class AutoCompletionComponent  {
	position:Point=new Point(1200,900);
	@Input('semanticModel') semanticModel:SemanticModel;
	@Input('objectModel') objectModel:ObjectModel;
}