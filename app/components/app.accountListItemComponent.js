"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AccountListItemComponent = (function () {
    function AccountListItemComponent() {
        this.percDiff = 0;
        this.percColor = "grey";
    }
    AccountListItemComponent.prototype.ngAfterViewInit = function () {
        this.setColor();
    };
    AccountListItemComponent.prototype.perc = function (account) {
        this.percDiff = parseFloat((((account.cash_onhand - account.cash_yesterday) / account.cash_onhand) * 100).toFixed(2));
        if (this.percDiff > 0)
            this.percentage = "+" + this.percDiff.toString();
        else if (this.percDiff < 0)
            this.percentage = this.percDiff.toString();
        else
            this.percentage = "0.00";
    };
    AccountListItemComponent.prototype.setColor = function () {
        if (this.percDiff < 0)
            this.percColor = "red";
        if (this.percDiff > 0)
            this.percColor = "green";
        if (this.percDiff === 0)
            this.percColor = "grey";
    };
    return AccountListItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AccountListItemComponent.prototype, "account", void 0);
AccountListItemComponent = __decorate([
    core_1.Component({
        selector: 'account-list-item',
        template: "\n                      <div class=\"acct-no\">\n                        <h2>{{account.id}}</h2>\n                      </div>\n                      <div class=\"acct-cash\">\n                          <h2>{{account.cash_onhand | currency:'USD':true}}</h2>\n                          <h5 [style.color]=\"percColor\" [callback]=\"perc(account)\"> {{percentage}}&#37; / {{account.cash_yesterday | currency:'USD':true}}</h5>\n                      </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], AccountListItemComponent);
exports.AccountListItemComponent = AccountListItemComponent;
