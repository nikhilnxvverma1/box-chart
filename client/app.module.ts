import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { LoginComponent }  from './login.component';
import { SignupComponent }  from './signup.component';
import { DocumentListComponent }  from './document-list.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ArtboardComponent } from './workspace/artboard.component';
import { SidebarComponent } from './workspace/sidebar.component';
import { AreaComponent } from './workspace/area.component';
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
