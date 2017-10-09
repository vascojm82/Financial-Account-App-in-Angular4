"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, args, reverse) {
        if (reverse === void 0) { reverse = false; }
        if (array === undefined)
            return;
        var m = reverse ? -1 : 1;
        if (args === "id") {
            array.sort(function (a, b) {
                if (a[args].match(/\d+/) < b[args].match(/\d+/)) {
                    return -1 * m;
                }
                else if (a[args].match(/\d+/) > b[args].match(/\d+/)) {
                    return 1 * m;
                }
                else {
                    return 0;
                }
            });
        }
        else {
            array.sort(function (a, b) {
                if (a[args] < b[args]) {
                    return -1 * m;
                }
                else if (a[args] > b[args]) {
                    return 1 * m;
                }
                else {
                    return 0;
                }
            });
        }
        return array;
    };
    return SortPipe;
}());
SortPipe = __decorate([
    core_1.Pipe({
        name: "sortBy"
    })
], SortPipe);
exports.SortPipe = SortPipe;
