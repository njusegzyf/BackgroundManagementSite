"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var shared_module_1 = require("./shared/shared.module");
var core_module_1 = require("./core/core.module");
var mongodb_management_module_1 = require("./mongodbMangement/mongodb-management.module");
var app_routing_module_1 = require("./app-routing.module");
var core_module_2 = require("./core/core.module");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            shared_module_1.SharedModule,
            core_module_1.CoreModule,
            mongodb_management_module_1.MongodbManagementModule,
            app_routing_module_1.AppRoutingModule,
        ],
        declarations: [
            core_module_2.NavbarComponent,
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent
        ],
        providers: [],
        exports: [app_component_1.AppComponent],
        entryComponents: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map