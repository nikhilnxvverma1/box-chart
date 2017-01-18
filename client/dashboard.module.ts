import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard.component';
import { WorkspaceModule } from './workspace.module';

@NgModule({
	imports:[ 
		BrowserModule,
		FormsModule,
		DashboardRoutingModule
	],
	declarations: [
			DashboardComponent
		],
})
export class DashboardModule { }