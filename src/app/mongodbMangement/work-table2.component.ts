import { Component, AfterViewInit } from '@angular/core';
import { GridOptions, IDatasource, IGetRowsParams } from 'ag-grid';

import { WorkDetailComponent } from './work-detail.component';
import { WorkTableCellComponent } from './work-table-cell.component';

import { IWork } from '../dataModel/work';
import { WorkMockService } from '../dataServiceMock/work.mock-service';

class TableDataSource implements IDatasource {

  private mockDataService = new WorkMockService();
  rowCount: number = this.mockDataService.mockWorks.length;
  // rowCount: null, // behave as infinite scroll

  constructor() { }

  // In a nutshell, every time the grid wants more rows, it will call getRows() on the datasource.
  // The datasource responds with the rows requested. Your datasource for infinite scrolling should implement the following interface: 
  getRows(params: IGetRowsParams): void {
    /*
     The getRows() method takes the following parameters:
    
    // Params for the above IDatasource.getRows()
    interface IGetRowsParams {
    
        // The first row index to get.
        startRow: number;
    
        // The first row index to NOT get.
        endRow: number;
    
        // If doing server side sorting, contains the sort model
        sortModel: any,
    
        // If doing server side filtering, contains the filter model
        filterModel: any;
    
        // The grid context object
        context: any;
    
        // Callback to call for the result when successful.
        successCallback(rowsThisPage: any[], lastRow?: number): void;
    
        // Callback to call for the result when successful.
        failCallback(): void;
    }
    */

    params.successCallback(
      this.mockDataService.mockWorks.slice(params.startRow, params.endRow),
      params.endRow);

    // console.log('asking for ' + params.startRow + ' to ' + params.endRow);
    //       // At this point in your code, you would call the server, using $http if in AngularJS 1.x.
    //       // To make the demo look real, wait for 500ms before returning
    //       setTimeout( function() {
    //           // take a slice of the total rows
    //           var rowsThisPage = allOfTheData.slice(params.startRow, params.endRow);
    //           // if on or after the last page, work out the last row.
    //           var lastRow = -1;
    //           if (allOfTheData.length <= params.endRow) {
    //               lastRow = allOfTheData.length;
    //           }
    //           // call the success callback
    //           params.successCallback(rowsThisPage, lastRow);
    //       }, 500);
  }
}

class ChildWork {
  parentWork: any;

  constructor(parentWorkPar: any) {
    this.parentWork = parentWorkPar;
  }
}

/**
 * Another work table component using infinite scrolling row model.
 * 
 * @see https://www.ag-grid.com/javascript-grid-infinite-scrolling/?framework=all
 * @class WorkTableComponent
 * @implements {AfterViewInit}
 */
@Component({
  selector: 'work-table2',
  templateUrl: './work-table.component.html'
})
export class WorkTable2Component implements AfterViewInit {
  private gridOptions: GridOptions;
  private dataSource: IDatasource = new TableDataSource();

  constructor() {
    this.gridOptions = <GridOptions>{};

    // before grid initialised
    this.gridOptions = {
      enableColResize: true,
      debug: true,
      rowSelection: 'multiple',
      rowDeselection: true,
      // tell grid we want virtual row model type
      rowModelType: 'infinite',
      // how big each page in our page cache will be, default is 100
      paginationPageSize: 100,
      // how many extra blank rows to display to the user at the end of the dataset,
      // which sets the vertical scroll and then allows the grid to request viewing more rows of data.
      // default is 1, ie show 1 row.
      paginationOverflowSize: 2,
      // how many server side requests to send at a time. if user is scrolling lots, then the requests
      // are throttled down
      maxConcurrentDatasourceRequests: 2,
      // how many rows to initially show in the grid. having 1 shows a blank row, so it looks like
      // the grid is loading from the users perspective (as we have a spinner in the first col)
      infiniteInitialRowCount: 1,
      // how many pages to store in cache. default is undefined, which allows an infinite sized cache,
      // pages are never purged. this should be set for large data to stop your browser from getting
      // full of data
      maxPagesInCache: 2
    };
    this.gridOptions.datasource = this.dataSource;

    this.gridOptions.columnDefs = [
      {
        headerName: '#',
        width: 30,
        checkboxSelection: true,
        suppressSorting: true,
        // suppressMenu: true,
        pinned: true
      },
      {
        headerName: 'Name',
        field: 'name',
        width: 100,
        filterParams: { newRowsAction: 'keep' },

        // Aggregation and grouping are not available in infinite scrolling. 
        // This is because to do such would require the grid knowing the entire data set, which is not possible when using the infinite row model.
        // left column is going to act as group column, with the expand / contract controls
        // cellRenderer: 'group',
        // we don't want the child count - it would be one each time anyway as each parent not has exactly one child node
        // cellRendererParams: { suppressCount: true },
      },
      {
        headerName: 'Source Path',
        field: 'sourcePath',
        cellRendererFramework: WorkTableCellComponent,
        width: 100,
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: 'Description',
        field: 'description',
        width: 100,
        // we don't want to sort by the row index, this doesn't make sense as the point
        // of the row index is to know the row index in what came back from the server
        suppressSorting: true,
        suppressMenu: true,
        suppressFilter: true
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
