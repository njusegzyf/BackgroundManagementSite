import { Component, AfterViewInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { ObjectID } from 'mongodb';

import { WorkDetailComponent } from './work-detail.component';
import { WorkTableCellComponent } from './work-table-cell.component';

import { IWork } from '../dataModel/work';
import { WorkMockService } from '../dataServiceMock/work.mock-service';

class ChildWork {
    parentWork: any;

    constructor(parentWorkPar: any) {
        this.parentWork = parentWorkPar;
    }
}

@Component({
    selector: 'work-table',
    templateUrl: './work-table.component.html'
})
export class WorkTableComponent implements AfterViewInit {
    private gridOptions: GridOptions;
    private dataService: WorkMockService = new WorkMockService();

    constructor() {
        this.gridOptions = <GridOptions>{};

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
                cellRendererFramework: WorkTableCellComponent,
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

    public isFullWidthCell(rowNode: any) {
        return rowNode.level === 1;
    }

    ngAfterViewInit() {
        // this.gridOptions.api.sizeColumnsToFit();
    }

    public getFullWidthCellRenderer() {
        return WorkDetailComponent;
    }

    public getRowHeight(params: any) {
        let rowIsDetailRow = params.node.level === 1;
        // return 100 when detail row, otherwise return 25
        return rowIsDetailRow ? 60 : 25;
    }

    public getNodeChildDetails(rowItem: any): any {
        // @see http://stackoverflow.com/questions/42605168/ag-grid-try-to-make-tree-demo-work-using-own-data
        if (!(rowItem instanceof ChildWork)) {
            return {
                group: true,
                // the key is used by the default group cellRenderer
                key: rowItem.name,
                // provide ag-Grid with the children of this group
                children: [new ChildWork(rowItem)],
                // for demo, expand the third row by default
                // expanded: true //record.account === 177002
            };
        } else {
            return null;
        }
    }

}
