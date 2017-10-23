import { Component, ChangeDetectorRef, ViewChild, Input, Output, EventEmitter, ElementRef, Renderer } from '@angular/core';
import { DataService } from './../services/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouterModule, Routes }  from '@angular/router';
import { SortPipe } from "./../Pipes/app.sortPipe";
import { CallbackDirective } from "./../directives/app.callback.directive";

@Component({
  selector: 'app-main',
  templateUrl: './app/Views/app.view.html'
})
export class MainComponent {
    accounts: any;
    arrayMiddle: number;
    sizeOfArray: number;
    sort: string = 'id';
    order: boolean [] =  [false, false, false];
    expanded: boolean = false;
    caret1State: number = 0;    //States are as follow for a caret:
    caret2State: number = 0;    //[0] = 'glyphicon-menu-up', [1] = 'glyphicon-menu-down'

    @ViewChild("tref", {read: ElementRef}) tref: ElementRef;    //Template Reference to accounts list UL

    constructor(private cdr: ChangeDetectorRef, private dService: DataService, private renderer : Renderer, private element : ElementRef) {
        this.dService.getAccounts().then((results: any) => {
          this.accounts = results;
        }).catch((error) => console.log(error));
        this.dService.getAccountsCount().then((results: any) => {
          this.sizeOfArray = results;
          this.arrayMiddle = this.sizeOfArray / 2;
        }).catch((error) => console.log(error));
    }

    ngAfterViewInit() {
      this.cdr.detectChanges();
    }

    sortWith(sortMode: string): void{
       this.sort = sortMode;

       if(this.sort === "id"){
         this.order[1] = this.order[0] = !this.order[1];      //Reverse list order

         //Toggle the caret
         if(this.caret1State < 1)
          this.caret1State++;
         else if(this.caret1State > 0)
          this.caret1State--;
       }
       else if(this.sort === "cash_onhand"){
         this.order[2] = this.order[0] = !this.order[2];      //Reverse list order

         //Toggle the caret
         if(this.caret2State < 1)
          this.caret2State++;
         else if(this.caret2State > 0)
          this.caret2State--;
       }
    }

    getCSSCaret1(): any{
      let cssClasses;

      cssClasses = {
        'glyphicon': true,
        'hide-caret': (this.sort === "id") ? false : true,
        'arrow': true,
        'left-arrow': true,
        'glyphicon-menu-up': (this.caret1State < 1) ? true : false,
        'glyphicon-menu-down': (this.caret1State > 0) ? true : false
      }

      return cssClasses;
    }

    getCSSCaret2(): any{
        let cssClasses;

        cssClasses = {
          'glyphicon': true,
          'hide-caret': (this.sort === "cash_onhand") ? false : true,
          'arrow': true,
          'right-arrow': true,
          'glyphicon-menu-up': (this.caret2State < 1) ? true : false,
          'glyphicon-menu-down': (this.caret2State > 0) ? true : false
        }

        return cssClasses;
     }

    //Triggered from the directive's parent component when ngFor finishes iterating
    public toggleListItem = () => {       //ES6 style arrow function, So that it preserves the context of the Component instead of the Directive
      if(this.expanded){
          this.listExpandFull();
      }else if(!this.expanded){
          this.listExpandPartial();
      }
    }

    expand(){
      this.expanded = true;
      this.toggleListItem();
    }

    collapse(){
      this.expanded = false;
      this.toggleListItem();
    }

    listExpandFull(){
      for(var i: number = 0; i< this.sizeOfArray; i++){
        this.renderer.setElementClass(this.tref.nativeElement.getElementsByTagName("LI")[i], "hide-line", false);
      }
    }

    listExpandPartial(){
      this.listHideFull();    //Setting all list items to hidden, if this doesn't get done will get more items visible than supposed to.

      //Unhidding only half the items
      for(var j: number = 0; j < this.arrayMiddle; j++){
        this.renderer.setElementClass(this.tref.nativeElement.getElementsByTagName("LI")[j], "hide-line", false);
      }
    }

    listHideFull(){
      for(var k = 0; k< this.sizeOfArray; k++){
        this.renderer.setElementClass(this.tref.nativeElement.getElementsByTagName("LI")[k], "hide-line", true);
      }
    }
}
