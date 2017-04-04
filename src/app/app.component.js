"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_module_1 = require("./core/core.module");
var core_module_2 = require("./core/core.module");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Background Management';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.navbar.navItems =
            [new core_module_2.NavbarRouterLinkItem('Dashboard', ['/dashboard']),
                new core_module_2.NavbarRouterLinkGroup('Mongodb', [], [
                    new core_module_2.NavbarRouterLinkItem('Dashboard', ['mongodb/dashboard']),
                    new core_module_2.NavbarRouterLinkItem('Works', ['mongodb/works'])
                ]),
                new core_module_2.NavbarRouterLinkGroup('Redis', [], [
                    new core_module_2.NavbarRouterLinkItem('Dashboard', [])
                ]),
                new core_module_2.NavbarRouterLinkGroup('Message Reply', ['messageReply'], [
                    new core_module_2.NavbarRouterLinkItem('Dashboard', ['messageReply'])
                ])
            ];
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(core_module_1.NavbarComponent),
    __metadata("design:type", core_module_1.NavbarComponent)
], AppComponent.prototype, "navbar", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'background-management-app',
        templateUrl: 'app/app.component.html',
        styleUrls: ['app/app.component.css'],
        // entryComponents: [NavbarComponent],
        encapsulation: core_1.ViewEncapsulation.Emulated
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map