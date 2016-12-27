import { Injectable } from '@angular/core';
import { Point } from '../model/geometry';
@Injectable()
export class TransformService{

	toModelSpace(p:Point):Point{
		return new Point(p.x,p.y);//TODO
	}

	lengthInModelSpace(l:number):number{
		return l;//TODO
	}

	toViewSpace(p:Point):Point{
		return new Point(p.x,p.y);//TODO
	}

	lengthInViewSpace(l:number):number{
		return l;//TODO
	}
}
