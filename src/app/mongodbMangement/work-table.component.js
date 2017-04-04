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
var work_detail_component_1 = require("./work-detail.component");
var work_table_cell_component_1 = require("./work-table-cell.component");
var work_mock_service_1 = require("../dataServiceMock/work.mock-service");
var ChildWork = (function () {
    function ChildWork(parentWorkPar) {
        this.parentWork = parentWorkPar;
    }
    return ChildWork;
}());
var WorkTableComponent = (function () {
    function WorkTableComponent() {
        this.dataService = new work_mock_service_1.WorkMockService();
        this.gridOptions = {};
        this.gridOptions.rowData = this.dataService.getAllSync();
        // this.dataService.getAllAsync()
        // .then(data => { this.gridOptions.rowData = data; });
        this.gridOptions.columnDefs = [
            {
                headerName: '#',
                width: 30,
                checkboxSelection: true,
                suppressSorting: true,
                suppressMenu: true,
                pinned: true
            },
            {
                headerName: 'Name',
                field: 'name',
                // left column is going to act as group column, with the expand / contract controls
                cellRenderer: 'group',
                // we don't want the child count - it would be one each time anyway as each parent not has exactly one child node
                cellRendererParams: { suppressCount: true },
                width: 100
            },
            {
                headerName: 'Source Path',
                field: 'sourcePath',
                cellRendererFramework: work_table_cell_component_1.WorkTableCellComponent,
                width: 100
            },
            {
                headerName: 'Description',
                field: 'description',
                width: 100
            },
            {
                headerName: 'Author',
                field: 'author',
                width: 100
            },
            {
                headerName: 'Upload Time',
                field: 'uploadTime',
                width: 100
            },
            {
                headerName: 'Up Count',
                field: 'upCount',
                width: 100
            }
        ];
        // this.gridOptions.columnDefs = [
        //     {
        //         headerName: 'ID',
        //         field: 'id',
        //         width: 100
        //     },
        //     {
        //         headerName: 'Value',
        //         field: 'value',
        //         cellRendererFramework: WorkTableCellComponent,
        //         width: 100
        //     },
        // ];
        // this.gridOptions.rowData = [
        //     { id: 5, value: 10 },
        //     { id: 10, value: 15 },
        //     { id: 15, value: 20 }
        // ];
    }
    WorkTableComponent.prototype.isFullWidthCell = function (rowNode) {
        return rowNode.level === 1;
    };
    WorkTableComponent.prototype.ngAfterViewInit = function () {
        // this.gridOptions.api.sizeColumnsToFit();
    };
    WorkTableComponent.prototype.getFullWidthCellRenderer = function () {
        return work_detail_component_1.WorkDetailComponent;
    };
    WorkTableComponent.prototype.getRowHeight = function (params) {
        var rowIsDetailRow = params.node.level === 1;
        // return 100 when detail row, otherwise return 25
        return rowIsDetailRow ? 60 : 25;
    };
    WorkTableComponent.prototype.getNodeChildDetails = function (rowItem) {
        // @see http://stackoverflow.com/questions/42605168/ag-grid-try-to-make-tree-demo-work-using-own-data
        if (!(rowItem instanceof ChildWork)) {
            return {
                group: true,
                // the key is used by the default group cellRenderer
                key: rowItem.name,
                // provide ag-Grid with the children of this group
                children: [new ChildWork(rowItem)],
            };
        }
        else {
            return null;
        }
    };
    return WorkTableComponent;
}());
WorkTableComponent = __decorate([
    core_1.Component({
        selector: 'work-table',
        templateUrl: './work-table.component.html'
    }),
    __metadata("design:paramtypes", [])
], WorkTableComponent);
exports.WorkTableComponent = WorkTableComponent;
//# sourceMappingURL=work-table.component.js.map