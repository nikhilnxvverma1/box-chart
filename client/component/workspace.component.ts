import { Component } from '@angular/core';
import { TransformService,Point } from '../service/transform.service';

@Component({
    selector: 'workspace',
    templateUrl: '../view/workspace.component.html',
})
export class WorkspaceComponent  {

    constructor(private transformService:TransformService){
      console.log("Workspace instantiated");
      console.log("p="+this.transformService.toModelSpace(new Point(43,54)));
    }
}