import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import HighlightDirective from './highlight.directive';
import { OverlayDirective, MockOverlayDirective } from './overlay.directive';

// Do put common components, directives and pipes that will be used throughout the application by other feature modules in the SharedModule, 
// where those assets are expected to share a new instance of themselves (not singletons).

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        HighlightDirective,
        OverlayDirective,
        MockOverlayDirective
    ],
    exports: [
        CommonModule,
        FormsModule,
        HighlightDirective,
        OverlayDirective
    ]
})
export class SharedModule { }

export * from './highlight.directive';
export * from './overlay.directive';
