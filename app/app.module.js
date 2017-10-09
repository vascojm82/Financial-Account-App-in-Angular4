"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_main_component_1 = require("./components/app.main.component");
var app_accountListItemComponent_1 = require("./components/app.accountListItemComponent");
var app_notFoundComponent_1 = require("./components/app.notFoundComponent");
var app_callback_directive_1 = require("./directives/app.callback.directive");
var data_service_1 = require("./services/data.service");
var app_sortPipe_1 = require("./Pipes/app.sortPipe");
var appRoutes = [
    { path: '', component: app_main_component_1.MainComponent },
    { path: '**', component: app_notFoundComponent_1.NotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_sortPipe_1.SortPipe,
            app_component_1.AppComponent,
            app_main_component_1.MainComponent,
            app_accountListItemComponent_1.AccountListItemComponent,
            app_notFoundComponent_1.NotFoundComponent,
            app_callback_directive_1.CallbackDirective
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        providers: [
            data_service_1.DataService,
            { provide: common_1.APP_BASE_HREF, useValue: '/' }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
