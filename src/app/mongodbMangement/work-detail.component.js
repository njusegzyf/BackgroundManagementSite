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
var WorkDetailComponent = (function () {
    function WorkDetailComponent() {
        // this.gridOptions = <GridOptions>{};
        // this.gridOptions.enableSorting = true;
        // this.gridOptions.enableFilter = true;
        // this.gridOptions.enableColResize = true;
        // this.gridOptions.columnDefs = this.createColumnDefs();
    }
    WorkDetailComponent.prototype.agInit = function (params) {
        this.parentWork = params.node.parent.data;
    };
    // Sometimes the gridReady event can fire before the angular component is ready to receive it, so in an angular
    // environment its safer to on you cannot safely rely on AfterViewInit instead before using the API
    WorkDetailComponent.prototype.ngAfterViewInit = function () {
        // this.gridOptions.api.setRowData(this.parentWork.callRecords);
        // this.gridOptions.api.sizeColumnsToFit();
    };
    WorkDetailComponent.prototype.onSearchTextChange = function (newData) {
        // this.gridOptions.api.setQuickFilter(newData);
    };
    // private createColumnDefs() {
    //     return [{headerName: 'Call ID', field: 'callId', cellClass: 'call-record-cell'},
    //         {headerName: 'Direction', field: 'direction', cellClass: 'call-record-cell'},
    //         {headerName: 'Number', field: 'number', cellClass: 'call-record-cell'},
    //         {
    //             headerName: 'Duration',
    //             field: 'duration',
    //             cellClass: 'call-record-cell',
    //             cellFormatter: this.secondCellFormatter
    //         },
    //         {headerName: 'Switch', field: 'switchCode', cellClass: 'call-record-cell'}];
    // }
    // private secondCellFormatter(params) {
    //     return params.value.toLocaleString() + 's';
    // };
    // if we don't do this, then the mouse wheel will be picked up by the main
    // grid and scroll the main grid and not this component. this ensures that
    // the wheel move is only picked up by the text field
    WorkDetailComponent.prototype.consumeMouseWheelOnDetailGrid = function (event) {
        event.stopPropagation();
    };
    return WorkDetailComponent;
}());
WorkDetailComponent = __decorate([
    core_1.Component({
        selector: 'work-detail',
        templateUrl: './work-detail.component.html'
    }),
    __metadata("design:paramtypes", [])
], WorkDetailComponent);
exports.WorkDetailComponent = WorkDetailComponent;
//# sourceMappingURL=work-detail.component.js.map