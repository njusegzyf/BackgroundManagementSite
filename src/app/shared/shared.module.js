"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var highlight_directive_1 = require("./highlight.directive");
var overlay_directive_1 = require("./overlay.directive");
// Do put common components, directives and pipes that will be used throughout the application by other feature modules in the SharedModule, 
// where those assets are expected to share a new instance of themselves (not singletons).
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [
            highlight_directive_1.default,
            overlay_directive_1.OverlayDirective,
            overlay_directive_1.MockOverlayDirective
        ],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            highlight_directive_1.default,
            overlay_directive_1.OverlayDirective
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
__export(require("./highlight.directive"));
__export(require("./overlay.directive"));
//# sourceMappingURL=shared.module.js.map