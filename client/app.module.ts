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
import { LinkerComponent } from './component/linker.component';
import { InputBoxComponent } from './component/input-box.component';
import { AutoCompletionComponent } from './component/auto-completion.component';
import { ClassDiagramComponent } from './component/class-diagram.component';
import { ClassObjectComponent } from './component/class-object-diagram.component';
import { InterfaceDiagramComponent } from './component/interface-diagram.component';
import { InterfaceObjectDiagramComponent } from './component/interface-object-diagram.component';
import { LinkedSegmentsComponent } from './component/linked-segments.component';
import { TransformService } from './utility/transform.service';
import { InterpreterService } from './editor/compiler/interpreter.service';
import { MockDataService } from './utility/mock-data.service';
import { FocusDirective } from './helper/focus.directive';
import { MyRectDirective } from './helper/my-rect.directive';
import { MyCircleDirective } from './helper/my-circle.directive';
import { AccessSymbol } from './helper/access-symbol.pipe';

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
		 AccessSymbol,
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
         ResizeHandleComponent,
         InputBoxComponent,
         AutoCompletionComponent,
		 ClassDiagramComponent,
		 ClassObjectComponent,
		 InterfaceDiagramComponent,
		 InterfaceObjectDiagramComponent,
		 LinkedSegmentsComponent,
         LinkerComponent
         ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    providers:[TransformService,InterpreterService,MockDataService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
