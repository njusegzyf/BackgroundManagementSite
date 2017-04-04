"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var main_1 = require("ag-grid-angular/main");
var shared_module_1 = require("../shared/shared.module");
var mongodb_management_routing_module_1 = require("./mongodb-management-routing.module");
var mongodb_dashboard_component_1 = require("./mongodb-dashboard.component");
var work_table_cell_component_1 = require("./work-table-cell.component");
var work_table_component_1 = require("./work-table.component");
var work_detail_component_1 = require("./work-detail.component");
var message_table_component_1 = require("./message-table.component");
var message_reply_component_1 = require("./message-reply.component");
var agGridComponents = [
    work_table_component_1.WorkTableComponent,
    work_table_cell_component_1.WorkTableCellComponent,
    work_detail_component_1.WorkDetailComponent,
    message_table_component_1.MessageTableComponent,
    message_reply_component_1.MessageReplyComponent
];
var MongodbManagementModule = (function () {
    function MongodbManagementModule() {
    }
    return MongodbManagementModule;
}());
MongodbManagementModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            main_1.AgGridModule.withComponents(agGridComponents),
            shared_module_1.SharedModule,
            mongodb_management_routing_module_1.MongodbManagementRoutingModule
        ],
        declarations: [
            mongodb_dashboard_component_1.MongodbDashboardComponent,
        ].concat(agGridComponents),
        providers: [],
        exports: [
            mongodb_dashboard_component_1.MongodbDashboardComponent,
            work_table_component_1.WorkTableComponent
        ]
    })
], MongodbManagementModule);
exports.MongodbManagementModule = MongodbManagementModule;
//# sourceMappingURL=mongodb-management.module.js.map