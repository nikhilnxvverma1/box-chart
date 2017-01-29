import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard.component';
import { DashboardContainerComponent } from './component/dashboard-container.component';
import { WorkspaceComponent } from './component/workspace.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path:'dashboard',
                component:DashboardContainerComponent,
				children:[
					{
						path:'',
						component:DashboardComponent
					},
					{
						path:'worksheet/:rid',
						component:WorkspaceComponent
					}
				]
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule {}