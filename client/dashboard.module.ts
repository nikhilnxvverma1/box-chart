import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard.component';
import { DashboardContainerComponent } from './component/dashboard-container.component';
import { WorkspaceComponent } from './component/workspace.component';
import { WorkspaceModule } from './workspace.module';
import { DashboardService } from './utility/dashboard.service';

@NgModule({
	imports:[ 
		BrowserModule,
		FormsModule,
		DashboardRoutingModule,
		WorkspaceModule
	],
	declarations: [
			DashboardComponent,
			DashboardContainerComponent,
		],
	providers:[DashboardService],
})
export class DashboardModule { }