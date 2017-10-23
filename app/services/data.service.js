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
var http_1 = require("@angular/http");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.accounts = [
            {
                "id": "AAA - 0029",
                "cash_onhand": 39160334.42,
                "cash_yesterday": 31435.87
            },
            {
                "id": "IRA - 0146",
                "cash_onhand": 15884302.39,
                "cash_yesterday": 7430.83
            },
            {
                "id": "AAA - 1812",
                "cash_onhand": 2010926.10,
                "cash_yesterday": 38881.63
            },
            {
                "id": "REG - 2019",
                "cash_onhand": 13465679.34,
                "cash_yesterday": 0.00
            },
            {
                "id": "AAA - 3810",
                "cash_onhand": 10050054.07,
                "cash_yesterday": 8916.69
            },
            {
                "id": "IRA - 5200",
                "cash_onhand": 5763.36,
                "cash_yesterday": 8916.69
            }
        ];
        console.log('Data service connected...');
    }
    DataService.prototype.getAccounts = function () {
        var _this = this;
        this.allAccountsCount = this.accounts.length;
        this.aSynchPass = false;
        return new Promise(function (resolve, reject) {
            _this.aSynchPass = !_this.aSynchPass;
            if (_this.aSynchPass)
                resolve(_this.accounts);
            else
                reject('error');
        });
    };
    DataService.prototype.getAccountsCount = function () {
        var _this = this;
        this.aSynchPass = false;
        return new Promise(function (resolve, reject) {
            _this.aSynchPass = !_this.aSynchPass;
            if (_this.aSynchPass)
                resolve(_this.allAccountsCount);
            else
                reject('error');
        });
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
