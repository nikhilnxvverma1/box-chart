import { Component,Input,Output,EventEmitter } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core';
import { ViewChildren,QueryList,OnInit,OnChanges,SimpleChanges } from '@angular/core';
import { animate,trigger,state,style,transition } from '@angular/core';
import { Point,Rect,Circle,Geometry,GeometryType } from '../model/geometry';
import { Workspace } from '../editor/workspace';
import { Direction,PressDragReleaseProcessor } from '../utility/common';
import { ResizeHandleComponent } from './resize-handle.component';
import { DiagramNode,DiagramEdge,GenericDiagramNode,InteractiveAppearance,GenericDiagramNodeType } from '../model/worksheet';
import { LinkNodesCommand } from '../editor/command/link-nodes';
import { ChangeNodeContentCommand } from '../editor/command/change-node-content';
import { ChangeNodeOutlineCommand } from '../editor/command/change-node-outline';
import { MoveListener } from '../editor/command/move';
import { ChangeNodeShapeCommand } from '../editor/command/change-node-shape';

//TODO move outside to a special 'variables' file 
const SELECTION_COLOR='#2BA3FC';
const PULL_LINKER_FROM_COLOR='#2B93C1';
const POINTING_LINKER_TO_COLOR='#D98BC3';
const GHOST_COLOR='#D2D2D2';
const WIDTH=200;
const HEIGHT=70;

const DOUBLE_BORDER_FLAT_OFFSET=5;

@Component({
	selector: 'generic-node',
	templateUrl: '../view/generic-node.component.html',
	animations: [
		trigger('selection', [
			state('selected', style({
				borderColor: "#2BA3FC"
			})),
			state('unselected', style({
				borderColor: "black"
			})),
			transition('selected => unselected', animate('100ms ease-in')),
			transition('unselected => selected', animate('100ms ease-out'))
		]),
		trigger('contentEditingOpen',[
        state('open',style({
            width:WIDTH+"px",
            height:HEIGHT+"px"
        })),
        state('closed', style({
            width:0+"px",
            height:0+"px"
        })),
        transition('open => closed', animate('100ms ease-in')),
        transition('closed => open', animate('200ms ease-out'))
    ])
	]
})
export class GenericNodeComponent implements OnInit,MoveListener{//,OnChanges

	@Input('workspace') workspace:Workspace;
	@Input("soloSelected") soloSelected:boolean;
	@Input('genericNode') node:GenericDiagramNode;
	@Output() requestDragging=new EventEmitter<GenericNodeComponent>();
	@Output('linkNodes') linkNodes=new EventEmitter<LinkNodesCommand>();
	@Output() removeMe=new EventEmitter<DiagramNode>();
	@ViewChildren(ResizeHandleComponent) resizeHandlers:QueryList<ResizeHandleComponent>;
	@ViewChild ('contentEditingField') contentEditingField:ElementRef;

	private nodeMoving=false;
	prepared:DiagramEdge;
	ghostNode:GenericDiagramNode;
	editedContent:string;

	ngOnInit(){
		this.prepareNewEdgeAndGhost();
		this.editedContent=this.node.content;
	}

	mousedown(event:MouseEvent){
		if(!event.shiftKey){
			if(!this.workspace.contentEditingIsOpen){
				this.requestDragging.emit(this);
			}
		}else {
			if(this.workspace.selectionContainsNode(this.node)){
				this.workspace.removeNodeFromSelection(this.node);
			}else{
				this.workspace.addNodeToSelection(this.node);
			}
		}
	}

	updateAllResizeHandlers(resizeHandler:ResizeHandleComponent){
		this.resizeHandlers.forEach((item)=>{
			item.updateHandlePosition();
		});
	}

	editContent(event:MouseEvent){
		this.workspace.contentEditingIsOpen=true;
		this.editedContent=this.node.content;
		this.focusAndSelectEditableContent();
		event.stopPropagation();
	}

	focusAndSelectEditableContent(){
		//its possible that the input never got loaded in because its contingent on editability
		if(this.contentEditingField!=null){
		// focus on the input box and select the entire text inside
			this.contentEditingField.nativeElement.focus();
			this.contentEditingField.nativeElement.select();
		}
	}

	toggleOutline(event:MouseEvent){

		// this.node.dashedBorder=!this.node.dashedBorder;
		let outlineStyle=this.getNextOutlineStyle();
		this.workspace.commit(
			new ChangeNodeOutlineCommand(
			this.node,
			outlineStyle.doubleBorder,
			outlineStyle.dashedBorder,
			this.ghostNode),true);


		event.stopPropagation();
	}

	private getNextOutlineStyle():OutlineStyle{
		if(!this.node.doubleBorder && !this.node.dashedBorder){// 00
			return new OutlineStyle(false,true);//00 goes to 11
		}else if(!this.node.doubleBorder && this.node.dashedBorder){// 01
			return new OutlineStyle(true,false);//01 goes to 10
		}else if(this.node.doubleBorder && !this.node.dashedBorder){// 10
			return new OutlineStyle(true,true);//10 goes to 11
		}else{//11
			return new OutlineStyle(false,false);//11 goes to 00
		}
	}

	private doubleBorderPercentForFlatOffsetInWidth():string{
		return (DOUBLE_BORDER_FLAT_OFFSET/this.node.geometry.getBoundingBox().width)*100+"%";
	}

	private doubleBorderPercentForFlatOffsetInHeight():string{
		return (DOUBLE_BORDER_FLAT_OFFSET/this.node.geometry.getBoundingBox().height)*100+"%";
	}

	private doubleBorderPercentForWidthWithFlatReduction():string{
		return ((this.node.geometry.getBoundingBox().width-2*DOUBLE_BORDER_FLAT_OFFSET)/
			this.node.geometry.getBoundingBox().width)*100+"%";
	}

	private doubleBorderPercentForHeightWithFlatReduction():string{
		return ((this.node.geometry.getBoundingBox().height-2*DOUBLE_BORDER_FLAT_OFFSET)/
			this.node.geometry.getBoundingBox().height)*100+"%";
	}

	toggleShape(event:MouseEvent){
		let nextShape=this.getNextShape();
		this.workspace.commit(new ChangeNodeShapeCommand(
			this.node,
			GenericDiagramNode.geometryForType(nextShape,this.node.geometry.getCenter()),
			this.ghostNode),true);
		event.stopPropagation();
	}

	private getNextShape():GeometryType{
		if(this.node.geometry.type==GeometryType.Rect){
			return GeometryType.Circle;
		}else if(this.node.geometry.type==GeometryType.Circle){
			return GeometryType.Rect;
		}
	}

	strokeColor(){
		return this.node.selected ? SELECTION_COLOR : this.node.stroke.hashCode();
	}

	fillColor():string{
		if(this.node.appearance==InteractiveAppearance.PullingLinkerFrom){
			return PULL_LINKER_FROM_COLOR;
		}else if(this.node.appearance==InteractiveAppearance.PointingLinkerTo){
			return POINTING_LINKER_TO_COLOR;
		}else if(this.node.appearance==InteractiveAppearance.Ghost){
			return GHOST_COLOR;
		}
		return this.node.background.hashCode();
	}

	strokeDashArray():string{
		if(this.node.dashedBorder){
			return "7";
		}else{
			return "0";
		}
	}

	opacity():number{
		return this.node.appearance==InteractiveAppearance.Ghost?0.2:1;
	}

	private prepareNewEdgeAndGhost(){
		console.debug("Setting new prepared edge in generic node component");
		this.prepared=new DiagramEdge();
		this.prepared.from=this.node;
		this.prepared.fromPoint=this.node.geometry.getTrackingPoint();
		this.ghostNode=this.node.clone(true);
		this.ghostNode.appearance=InteractiveAppearance.Ghost;
	}

	preventClosingOfOptions(event:MouseEvent){
		event.stopPropagation();
	}

	changeContent(event:KeyboardEvent){
		if(event.keyCode==13){//commit
			console.debug("User changed content to "+this.editedContent);
			this.workspace.contentEditingIsOpen=false;
			this.workspace.commit(new ChangeNodeContentCommand(this.node,this.editedContent,this.ghostNode),true);
		}else if(event.keyCode==27){//cancel
			this.workspace.contentEditingIsOpen=false;
		}
	}

	
	moveStarted():void{
		this.nodeMoving=true;
	}
	
	moveInProgress(dPoint:Point):void{

	}

	moveEnded(displacementMade:boolean):void{
		this.nodeMoving=false;
	}

}

class OutlineStyle{
	doubleBorder:boolean;
	dashedBorder:boolean;

	constructor(double:boolean,dashed:boolean){
		this.doubleBorder=double;
		this.dashedBorder=dashed;
	}
}