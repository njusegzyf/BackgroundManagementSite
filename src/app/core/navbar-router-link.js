"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var NavbarRouterLinkBase = (function () {
    function NavbarRouterLinkBase(title, routerLink, routerLinkActive) {
        if (routerLinkActive === void 0) { routerLinkActive = 'active'; }
        this.title = title;
        this.routerLink = routerLink;
        this.routerLinkActive = routerLinkActive;
        //assert(this.title !== null);
        //assert(this.routerLink !== null)
    }
    return NavbarRouterLinkBase;
}());
exports.NavbarRouterLinkBase = NavbarRouterLinkBase;
var NavbarRouterLinkItem = (function (_super) {
    __extends(NavbarRouterLinkItem, _super);
    function NavbarRouterLinkItem(pTitle, pRouterLink, pRouterLinkActive) {
        if (pRouterLinkActive === void 0) { pRouterLinkActive = 'active'; }
        return _super.call(this, pTitle, pRouterLink, pRouterLinkActive) || this;
    }
    NavbarRouterLinkItem.prototype.isGroup = function () { return false; };
    NavbarRouterLinkItem.prototype.asGroup = function () { throw 'Not an INavbarRouterLinkGroup.'; };
    return NavbarRouterLinkItem;
}(NavbarRouterLinkBase));
exports.NavbarRouterLinkItem = NavbarRouterLinkItem;
var NavbarRouterLinkGroup = (function (_super) {
    __extends(NavbarRouterLinkGroup, _super);
    function NavbarRouterLinkGroup(pTitle, pRouterLink, subRouterLinks, pRouterLinkActive) {
        if (pRouterLinkActive === void 0) { pRouterLinkActive = 'active'; }
        var _this = _super.call(this, pTitle, pRouterLink, pRouterLinkActive) || this;
        _this.subRouterLinks = subRouterLinks;
        return _this;
        //assert(this.subRouterLinks);
    }
    NavbarRouterLinkGroup.prototype.isGroup = function () { return true; };
    NavbarRouterLinkGroup.prototype.asGroup = function () { return this; };
    return NavbarRouterLinkGroup;
}(NavbarRouterLinkBase));
exports.NavbarRouterLinkGroup = NavbarRouterLinkGroup;
exports.default = NavbarRouterLinkItem;
//# sourceMappingURL=navbar-router-link.js.map