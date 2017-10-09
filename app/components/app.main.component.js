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
var data_service_1 = require("./../services/data.service");
var MainComponent = (function () {
    function MainComponent(cdr, dService) {
        var _this = this;
        this.cdr = cdr;
        this.dService = dService;
        this.listDone = false;
        this.sort = 'id';
        this.order = [false, false, false];
        this.expanded = false;
        //Triggered from the directive's parent component when ngFor finishes iterating
        this.toggleListItem = function () {
            _this.listDone = true;
            var list = document.querySelector(".accounts-list");
            if (!_this.expanded)
                $('.app-line').addClass('hide-line');
            for (var j = 0; j < _this.arrayMiddle; j++) {
                list.getElementsByTagName("LI")[j].classList.remove('hide-line');
            }
        };
        this.dService.getAccounts().then(function (results) {
            _this.accounts = results;
        }).catch(function (error) { return console.log(error); });
        this.dService.getAccountsCount().then(function (results) {
            _this.sizeOfArray = results;
            _this.arrayMiddle = _this.sizeOfArray / 2;
        }).catch(function (error) { return console.log(error); });
    }
    MainComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
    };
    MainComponent.prototype.sortWith = function (sortMode) {
        this.sort = sortMode;
        var caret = document.querySelector('#caret');
        var caret2 = document.querySelector('#caret2');
        if (this.sort === "id") {
            if (caret.classList.contains('hide-caret')) {
                caret.classList.remove("hide-caret");
                caret2.classList.add("hide-caret");
            }
            this.order[1] = this.order[0] = !this.order[1];
            caret.classList.toggle('glyphicon-triangle-top');
            caret.classList.toggle('glyphicon-triangle-bottom');
        }
        else if (this.sort === "cash_onhand") {
            if (caret2.classList.contains('hide-caret')) {
                caret2.classList.remove("hide-caret");
                caret.classList.add("hide-caret");
            }
            this.order[2] = this.order[0] = !this.order[2];
            caret2.classList.toggle('glyphicon-triangle-top');
            caret2.classList.toggle('glyphicon-triangle-bottom');
        }
    };
    MainComponent.prototype.toggle_btn_expand = function () {
        console.log("List Done: " + this.listDone);
        return this.listDone;
    };
    MainComponent.prototype.toggle_btn_collapse = function () {
        return this.expanded;
    };
    MainComponent.prototype.expand = function () {
        $('.app-line').removeClass('hide-line');
        $('#expand-btn').addClass('hide-line');
        this.expanded = true;
    };
    MainComponent.prototype.collapse = function () {
        $('#collapse-btn').addClass('hide-line');
        $('#expand-btn').removeClass('hide-line');
        this.expanded = false;
        this.toggleListItem();
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        selector: 'app-main',
        templateUrl: './app/Views/app.view.html'
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef, data_service_1.DataService])
], MainComponent);
exports.MainComponent = MainComponent;
