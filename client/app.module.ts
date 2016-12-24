import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './component/app.component';
import { LoginComponent }  from './component/login.component';
import { SignupComponent }  from './component/signup.component';
import { DocumentListComponent }  from './component/document-list.component';
import { WorkspaceComponent } from './component/workspace.component';
import { ArtboardComponent } from './component/artboard.component';
import { SidebarComponent } from './component/sidebar.component';
import { AreaComponent } from './component/area.component';
import { TransformService } from './service/transform.service';

const MyRoutes=RouterModule.forRoot([
    {path:'',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'all-docs',component:DocumentListComponent},
    {path:'all-docs/document',component:WorkspaceComponent},
]);

@NgModule({
    imports:      [ 
        BrowserModule,
        MyRoutes
     ],
    declarations: [
         AppComponent,
         LoginComponent,
         SignupComponent,
         DocumentListComponent,
         WorkspaceComponent,
         SidebarComponent,
         ArtboardComponent,
         AreaComponent
         ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    providers:[TransformService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
