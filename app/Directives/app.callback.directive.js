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
var CallbackDirective = (function () {
    function CallbackDirective() {
    }
    Object.defineProperty(CallbackDirective.prototype, "condition", {
        set: function (value) {
            if (value == false)
                return;
            if (this.callback) {
                this.callback();
                console.log("callback called");
            }
            else
                console.error("callback is null");
        },
        enumerable: true,
        configurable: true
    });
    return CallbackDirective;
}());
__decorate([
    core_1.Input('callback'),
    __metadata("design:type", Function)
], CallbackDirective.prototype, "callback", void 0);
__decorate([
    core_1.Input('callback-condition'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CallbackDirective.prototype, "condition", null);
CallbackDirective = __decorate([
    core_1.Directive({
        selector: '[callback]'
    }),
    __metadata("design:paramtypes", [])
], CallbackDirective);
exports.CallbackDirective = CallbackDirective;
