import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular/main';

import { SharedModule } from '../shared/shared.module';

import { MongodbManagementRoutingModule } from './mongodb-management-routing.module';

import { MongodbDashboardComponent } from './mongodb-dashboard.component';
import { WorkTableCellComponent } from './work-table-cell.component';
import { WorkTableComponent } from './work-table.component';
import { WorkDetailComponent } from './work-detail.component';
import { MessageTableComponent } from './message-table.component';
import { MessageReplyComponent } from './message-reply.component';

let agGridComponents: any[] = [
  WorkTableComponent,
  WorkTableCellComponent,
  WorkDetailComponent,
  MessageTableComponent,
  MessageReplyComponent
];

@NgModule({
  imports: [
    FormsModule,
    AgGridModule.withComponents(
      agGridComponents
    ),
    SharedModule,
    MongodbManagementRoutingModule
  ],
  declarations: [
    MongodbDashboardComponent,
  ].concat(agGridComponents),
  providers: [],
  exports: [
    MongodbDashboardComponent,
    WorkTableComponent
  ]
})
export class MongodbManagementModule { }
