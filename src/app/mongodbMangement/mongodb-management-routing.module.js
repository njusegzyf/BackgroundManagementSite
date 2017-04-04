"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var work_table_component_1 = require("./work-table.component");
var mongodb_dashboard_component_1 = require("./mongodb-dashboard.component");
var message_table_component_1 = require("./message-table.component");
var MongodbManagementRoutingModule = (function () {
    function MongodbManagementRoutingModule() {
    }
    return MongodbManagementRoutingModule;
}());
MongodbManagementRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild([
                // { path: 'mongodb', redirectTo: 'mongodb/dashboard', pathMatch: 'full' }
                // { path: 'mongodb/dashboard', component: MongodbDashboardComponent, pathMatch: 'full' },
                // { path: 'mongodb/works', component: WorkTableComponent, pathMatch: 'full' },
                {
                    path: 'mongodb',
                    children: [
                        { path: 'dashboard', component: mongodb_dashboard_component_1.MongodbDashboardComponent, },
                        { path: 'works', component: work_table_component_1.WorkTableComponent }
                    ]
                },
                {
                    path: 'messageReply',
                    component: message_table_component_1.MessageTableComponent,
                    pathMatch: 'full'
                }
            ])],
        exports: [router_1.RouterModule]
    })
], MongodbManagementRoutingModule);
exports.MongodbManagementRoutingModule = MongodbManagementRoutingModule;
//# sourceMappingURL=mongodb-management-routing.module.js.map