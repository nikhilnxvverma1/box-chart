import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './component/app.component';
import { LoginComponent }  from './component/login.component';
import { SignupComponent }  from './component/signup.component';
import { DocumentListComponent }  from './component/document-list.component';
import { WorkspaceComponent } from './component/workspace.component';
import { ArtboardComponent } from './component/artboard.component';
import { SidebarComponent } from './component/sidebar.component';
import { AreaComponent } from './component/area.component';
import { BoxComponent } from './component/box.component';
import { LineSegmentComponent } from './component/line-segment.component';
import { ResizeHandleComponent } from './component/resize-handle.component';
import { TransformService } from './utility/transform.service';
import { FocusDirective } from './directive/focus.directive';
import { MyRectDirective } from './directive/my-rect.directive';
import { MyCircleDirective } from './directive/my-circle.directive';

const MyRoutes=RouterModule.forRoot([
    {path:'',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'all-docs',component:DocumentListComponent},
    {path:'all-docs/document',component:WorkspaceComponent},
]);

@NgModule({
    imports:      [ 
        BrowserModule,
		FormsModule,
        MyRoutes
     ],
    declarations: [
         FocusDirective,
         MyRectDirective,
         MyCircleDirective,
         AppComponent,
         LoginComponent,
         SignupComponent,
         DocumentListComponent,
         WorkspaceComponent,
         SidebarComponent,
         ArtboardComponent,
         AreaComponent,
         BoxComponent,
         LineSegmentComponent,
         ResizeHandleComponent
         ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    providers:[TransformService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
