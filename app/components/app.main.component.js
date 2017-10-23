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
    function MainComponent(cdr, dService, renderer, element) {
        var _this = this;
        this.cdr = cdr;
        this.dService = dService;
        this.renderer = renderer;
        this.element = element;
        this.sort = 'id';
        this.order = [false, false, false];
        this.expanded = false;
        this.caret1State = 0; //States are as follow for a caret:
        this.caret2State = 0; //[0] = 'glyphicon-menu-up', [1] = 'glyphicon-menu-down'
        //Triggered from the directive's parent component when ngFor finishes iterating
        this.toggleListItem = function () {
            if (_this.expanded) {
                _this.listExpandFull();
            }
            else if (!_this.expanded) {
                _this.listExpandPartial();
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
        if (this.sort === "id") {
            this.order[1] = this.order[0] = !this.order[1]; //Reverse list order
            //Toggle the caret
            if (this.caret1State < 1)
                this.caret1State++;
            else if (this.caret1State > 0)
                this.caret1State--;
        }
        else if (this.sort === "cash_onhand") {
            this.order[2] = this.order[0] = !this.order[2]; //Reverse list order
            //Toggle the caret
            if (this.caret2State < 1)
                this.caret2State++;
            else if (this.caret2State > 0)
                this.caret2State--;
        }
    };
    MainComponent.prototype.getCSSCaret1 = function () {
        var cssClasses;
        cssClasses = {
            'glyphicon': true,
            'hide-caret': (this.sort === "id") ? false : true,
            'arrow': true,
            'left-arrow': true,
            'glyphicon-menu-up': (this.caret1State < 1) ? true : false,
            'glyphicon-menu-down': (this.caret1State > 0) ? true : false
        };
        return cssClasses;
    };
    MainComponent.prototype.getCSSCaret2 = function () {
        var cssClasses;
        cssClasses = {
            'glyphicon': true,
            'hide-caret': (this.sort === "cash_onhand") ? false : true,
            'arrow': true,
            'right-arrow': true,
            'glyphicon-menu-up': (this.caret2State < 1) ? true : false,
            'glyphicon-menu-down': (this.caret2State > 0) ? true : false
        };
        return cssClasses;
    };
    MainComponent.prototype.expand = function () {
        this.expanded = true;
        this.toggleListItem();
    };
    MainComponent.prototype.collapse = function () {
        this.expanded = false;
        this.toggleListItem();
    };
    MainComponent.prototype.listExpandFull = function () {
        for (var i = 0; i < this.sizeOfArray; i++) {
            this.renderer.setElementClass(this.tref.nativeElement.getElementsByTagName("LI")[i], "hide-line", false);
        }
    };
    MainComponent.prototype.listExpandPartial = function () {
        this.listHideFull(); //Setting all list items to hidden, if this doesn't get done will get more items visible than supposed to.
        //Unhidding only half the items
        for (var j = 0; j < this.arrayMiddle; j++) {
            this.renderer.setElementClass(this.tref.nativeElement.getElementsByTagName("LI")[j], "hide-line", false);
        }
    };
    MainComponent.prototype.listHideFull = function () {
        for (var k = 0; k < this.sizeOfArray; k++) {
            this.renderer.setElementClass(this.tref.nativeElement.getElementsByTagName("LI")[k], "hide-line", true);
        }
    };
    return MainComponent;
}());
__decorate([
    core_1.ViewChild("tref", { read: core_1.ElementRef }),
    __metadata("design:type", core_1.ElementRef)
], MainComponent.prototype, "tref", void 0);
MainComponent = __decorate([
    core_1.Component({
        selector: 'app-main',
        templateUrl: './app/Views/app.view.html'
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef, data_service_1.DataService, core_1.Renderer, core_1.ElementRef])
], MainComponent);
exports.MainComponent = MainComponent;
