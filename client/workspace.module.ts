import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { WorkspaceComponent } from './component/workspace.component';
import { ArtboardComponent } from './component/artboard.component';
import { SidebarComponent } from './component/sidebar.component';
import { AreaComponent } from './component/area.component';
import { BoxComponent } from './component/box.component';
import { GenericNodeComponent } from './component/generic-node.component';
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
import { CreationDrawerComponent } from './component/creation-drawer.component';
import { SelectionBoxComponent } from './component/selection-box.component';
import { MultipleSelectionComponent } from './component/multiple-selection.component';
import { DiagramEdgeComponent } from './component/diagram-edge.component';
import { GizmoEdgeComponent } from './component/gizmo-edge.component';
import { EdgeStyleComponent } from './component/edge-style.component';
import { TransformService } from './utility/transform.service';
import { InterpreterService } from './editor/compiler/interpreter.service';
import { MockDataService } from './utility/mock-data.service';
import { WorksheetService } from './utility/worksheet.service';
import { FocusDirective } from './helper/focus.directive';
import { MyRectDirective } from './helper/my-rect.directive';
import { MyCircleDirective } from './helper/my-circle.directive';
import { EdgeEndpointImage } from './helper/edge-endpoint-image.pipe';
import { EdgeEndpointName } from './helper/edge-endpoint-name.pipe';
import { AccessSymbol } from './helper/access-symbol.pipe';
import { NodeBackground } from './helper/node-background.pipe';

@NgModule({
	imports:[ 
		BrowserModule,
		FormsModule,
		RouterModule,
	],
	declarations: [
		FocusDirective,
		MyRectDirective,
		MyCircleDirective,
		EdgeEndpointImage,
		EdgeEndpointName,
		AccessSymbol,
		NodeBackground,
		WorkspaceComponent,
		SidebarComponent,
		ArtboardComponent,
		AreaComponent,
		BoxComponent,
		GenericNodeComponent,
		LineSegmentComponent,
		ResizeHandleComponent,
		InputBoxComponent,
		AutoCompletionComponent,
		ClassDiagramComponent,
		ClassObjectComponent,
		InterfaceDiagramComponent,
		InterfaceObjectDiagramComponent,
		LinkedSegmentsComponent,
		LinkerComponent,
		GizmoEdgeComponent,
		EdgeStyleComponent,
		CreationDrawerComponent,
		SelectionBoxComponent,
		MultipleSelectionComponent,
		DiagramEdgeComponent,
		],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
	providers:[TransformService,InterpreterService,WorksheetService,MockDataService]
})
export class WorkspaceModule { }
