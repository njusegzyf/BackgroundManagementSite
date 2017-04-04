import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MongodbManagementModule } from './mongodbMangement/mongodb-management.module';

import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './core/core.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        CoreModule,
        MongodbManagementModule,
        AppRoutingModule,
    ],
    declarations: [
        NavbarComponent,
        AppComponent,
        DashboardComponent
    ],
    providers: [],
    exports: [AppComponent],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
