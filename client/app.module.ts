import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './component/app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home.component';
import { LoginComponent } from './component/login.component';
import { SignupComponent } from './component/signup.component';
import { DashboardModule } from './dashboard.module';
import { WorkspaceModule } from './workspace.module';
import { AccountComponent } from './component/account.component';
import { UserService } from './utility/user.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
	imports:[ 
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		DashboardModule
	],
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		SignupComponent,
		AccountComponent
		],
	providers:[UserService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
