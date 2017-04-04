import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WorkTableComponent } from './work-table.component';
import { MongodbDashboardComponent } from './mongodb-dashboard.component';
import { MessageTableComponent } from './message-table.component';

@NgModule({
  imports: [RouterModule.forChild([
    // { path: 'mongodb', redirectTo: 'mongodb/dashboard', pathMatch: 'full' }
    // { path: 'mongodb/dashboard', component: MongodbDashboardComponent, pathMatch: 'full' },
    // { path: 'mongodb/works', component: WorkTableComponent, pathMatch: 'full' },
    {
      path: 'mongodb',
      children: [
        { path: 'dashboard', component: MongodbDashboardComponent, },
        { path: 'works', component: WorkTableComponent }
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
