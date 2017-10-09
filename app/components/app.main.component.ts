import { Component, ChangeDetectorRef, Input, Output, EventEmitter   } from '@angular/core';
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
    listDone: boolean = false;
    sort: string = 'id';
    order: boolean [] =  [false, false, false];
    expanded: boolean = false;

    constructor(private cdr: ChangeDetectorRef, private dService: DataService) {
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
       let caret = document.querySelector('#caret');
       let caret2 = document.querySelector('#caret2');

       if(this.sort === "id"){
           if(caret.classList.contains('hide-caret'))
           {
             caret.classList.remove("hide-caret");
             caret2.classList.add("hide-caret");
           }

           this.order[1] = this.order[0] = !this.order[1];
           caret.classList.toggle('glyphicon-triangle-top');
           caret.classList.toggle('glyphicon-triangle-bottom');
       }
       else if(this.sort === "cash_onhand"){
           if(caret2.classList.contains('hide-caret'))
             {
               caret2.classList.remove("hide-caret");
               caret.classList.add("hide-caret");
             }

           this.order[2] = this.order[0] = !this.order[2];
           caret2.classList.toggle('glyphicon-triangle-top');
           caret2.classList.toggle('glyphicon-triangle-bottom');
       }
    }

    //Triggered from the directive's parent component when ngFor finishes iterating
    public toggleListItem = () => {       //ES6 style arrow function, So that it preserves the context of the Component instead of the Directive
        this.listDone = true;
        var list: any = document.querySelector(".accounts-list");

        if(!this.expanded)
          $('.app-line').addClass('hide-line');

        for(var j: number = 0; j < this.arrayMiddle; j++)
        {
            list.getElementsByTagName("LI")[j].classList.remove('hide-line');
        }
    }

    toggle_btn_expand(){
      console.log("List Done: " + this.listDone);
      return this.listDone;
    }

    toggle_btn_collapse(){
      return this.expanded;
    }

    expand(){
      $('.app-line').removeClass('hide-line');
      $('#expand-btn').addClass('hide-line');
      this.expanded = true;
    }

    collapse(){
      $('#collapse-btn').addClass('hide-line');
      $('#expand-btn').removeClass('hide-line');
      this.expanded = false;
      this.toggleListItem();
    }
}
