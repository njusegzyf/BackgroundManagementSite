import { Component, AfterViewInit } from '@angular/core';
import { GridOptions } from 'ag-grid';

import { MessageReplyComponent } from './message-reply.component';

import { IMessage } from '../dataModel/message';
import { MOCK_MESSAGES } from '../dataServiceMock/message.mock-service';

class MessageReplyData {
  parentMessage: IMessage;

  constructor(parentMessage: IMessage) {
    this.parentMessage = parentMessage;
  }
}

@Component({
  selector: 'message-table',
  templateUrl: './message-table.component.html'
})
export class MessageTableComponent implements AfterViewInit {
  private gridOptions: GridOptions;
  private data: IMessage[] = MOCK_MESSAGES;

  constructor() {
    this.gridOptions = <GridOptions>{};

    this.gridOptions.rowData = this.data;

    this.gridOptions.columnDefs = [
      {
        headerName: '#',
        width: 50,
        checkboxSelection: true,
        suppressSorting: true,
        suppressMenu: true,
        pinned: true,
        // left column is going to act as group column, with the expand / contract controls
        cellRenderer: 'group',
        // we don't want the child count - it would be one each time anyway as each parent not has exactly one child node
        cellRendererParams: { suppressCount: true }
      },
      {
        headerName: 'Title',
        field: 'title',
        width: 180
      },
      {
        headerName: 'Author',
        field: 'author',
        width: 100
      },
      {
        headerName: 'Email',
        field: 'email',
        width: 100
      },
      {
        headerName: 'Tel',
        field: 'tel',
        width: 100
      },
      {
        headerName: 'Upload Time',
        field: 'uploadTime',
        width: 100
      },

    ];
  }

  public isFullWidthCell(rowNode: any) {
    return rowNode.level === 1;
  }

  ngAfterViewInit() {
    // this.gridOptions.api.sizeColumnsToFit();
  }

  public getFullWidthCellRenderer() {
    return MessageReplyComponent;
  }

  public getRowHeight(params: any) {
    let rowIsDetailRow = params.node.level === 1;
    // return 100 when detail row, otherwise return 25
    return rowIsDetailRow ? 200 : 25;
  }

  public getNodeChildDetails(rowItem: any): any {
    // @see http://stackoverflow.com/questions/42605168/ag-grid-try-to-make-tree-demo-work-using-own-data
    if (!(rowItem instanceof MessageReplyData)) {
      return {
        group: true,
        // the key is used by the default group cellRenderer
        key: rowItem.name,
        // provide ag-Grid with the children of this group
        children: [new MessageReplyData(rowItem)],
        // for demo, expand the third row by default
        expanded: rowItem.isReplied === false
      };
    } else {
      return null;
    }
  }

}
