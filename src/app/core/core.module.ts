import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './navbar.component';

// Do collect single-use classes and hiding their gory details inside CoreModule.
//  A simplified root AppModule imports CoreModule in its capacity as orchestrator of the application as a whole.
// Do put a singleton service whose instance wil be shared throughout the application in the CoreModule (e.g. ExceptionService and LoggerService).

@NgModule({
  imports: [
    BrowserModule,
    // SharedModule // TODO there will be an error if we import and reexport SharedModule here and do not import it in the AppModule 
  ],
  // declarations: [NavbarComponent],
  exports: [
    BrowserModule,
    // SharedModule,
    // NavbarComponent
  ]
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    // to prevent reimport of this module, we can guard against it and fail fast by adding the following constructor
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

export * from './navbar.component';
export * from './navbar-router-link';
