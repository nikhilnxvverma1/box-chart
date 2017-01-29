import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './component/login.component';
import { HomeComponent } from './component/home.component';
import { SignupComponent } from './component/signup.component';
import { DashboardComponent } from './component/dashboard.component';
import { WorkspaceComponent } from './component/workspace.component';
import { AccountComponent } from './component/account.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '',  component: HomeComponent},
      { path: 'signup',  component: SignupComponent },
      { path: 'dashboard',  component: DashboardComponent },
    //   { path: 'worksheet',  component: WorkspaceComponent },
      { path: 'account',  component: AccountComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}