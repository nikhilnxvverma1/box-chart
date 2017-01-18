import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard.component';
import { WorkspaceComponent } from './component/workspace.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path:'dashboard',
                component:DashboardComponent
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule {}