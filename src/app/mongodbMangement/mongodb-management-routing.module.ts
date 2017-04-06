import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WorkTableComponent } from './work-table.component';
import { MongodbDashboardComponent } from './mongodb-dashboard.component';
import { MessageTableComponent } from './message-table.component';

// Test components
import { WorkTable2Component } from './work-table2.component';

@NgModule({
  imports: [RouterModule.forChild([
    // { path: 'mongodb', redirectTo: 'mongodb/dashboard', pathMatch: 'full' }
    // { path: 'mongodb/dashboard', component: MongodbDashboardComponent, pathMatch: 'full' },
    // { path: 'mongodb/works', component: WorkTableComponent, pathMatch: 'full' },
    {
      path: 'mongodb',
      children: [
        { path: 'dashboard', component: MongodbDashboardComponent },
        { path: 'works', component: WorkTableComponent },
        { path: 'works2', component: WorkTable2Component }
      ]
    },
    {
      path: 'messageReply',
      component: MessageTableComponent,
      pathMatch: 'full'
    }
  ])],
  exports: [RouterModule]
})
export class MongodbManagementRoutingModule { }
