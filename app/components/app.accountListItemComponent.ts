import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CallbackDirective } from "./../directives/app.callback.directive";

@Component({
  selector: 'account-list-item',
  template: `
                      <div class="acct-no">
                        <h2>{{account.id}}</h2>
                      </div>
                      <div class="acct-cash">
                          <h2>{{account.cash_onhand | currency:'USD':true}}</h2>
                          <h5 [style.color]="percColor" [callback]="perc(account)"> {{percentage}}&#37; / {{account.cash_yesterday | currency:'USD':true}}</h5>
                      </div>
  `
})
export class AccountListItemComponent {
    @Input() account: any;
    percDiff: number = 0;
    percentage: string;
    percColor: string = "grey";

    constructor() {
    }

    ngAfterViewInit() {
      this.setColor();
    }

    perc(account: any): void{
      this.percDiff = parseFloat((((account.cash_onhand - account.cash_yesterday ) / account.cash_onhand) * 100).toFixed(2));

      if(this.percDiff > 0)
        this.percentage = "+" + this.percDiff.toString();
      else if(this.percDiff < 0)
        this.percentage = this.percDiff.toString();
      else
        this.percentage = "0.00";
    }

    setColor(){
      if(this.percDiff < 0)
        this.percColor = "red";
      if (this.percDiff > 0)
        this.percColor = "green";
      if (this.percDiff === 0)
        this.percColor = "grey";
    }
}
