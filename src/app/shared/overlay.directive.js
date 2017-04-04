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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AbstractOverlayDirective = (function () {
    function AbstractOverlayDirective() {
    }
    return AbstractOverlayDirective;
}());
AbstractOverlayDirective = __decorate([
    core_1.Directive({
        selector: '[zyfOverlay]'
    })
], AbstractOverlayDirective);
exports.AbstractOverlayDirective = AbstractOverlayDirective;
var OverlayDirective = (function (_super) {
    __extends(OverlayDirective, _super);
    function OverlayDirective() {
        var _this = _super.call(this) || this;
        var el = document.createElement('div');
        el.className = 'tooltip';
        _this.el = el;
        return _this;
    }
    OverlayDirective.prototype.close = function () { this.el.hidden = true; };
    OverlayDirective.prototype.open = function (el, text) {
        // console.log(`Overlay open : ${text}.`);
        this.el.innerHTML = text;
        this.el.hidden = false;
        var rect = el.nativeElement.getBoundingClientRect();
        this.el.style.left = rect.left + 'px';
        this.el.style.top = rect.top + 'px';
    };
    OverlayDirective.prototype.attach = function (target) { target.appendChild(this.el); };
    OverlayDirective.prototype.detach = function () { this.el.parentNode.removeChild(this.el); };
    return OverlayDirective;
}(AbstractOverlayDirective));
exports.OverlayDirective = OverlayDirective;
var MockOverlayDirective = (function (_super) {
    __extends(MockOverlayDirective, _super);
    function MockOverlayDirective() {
        return _super.call(this) || this;
    }
    MockOverlayDirective.prototype.close = function () { };
    MockOverlayDirective.prototype.open = function (el, text) { };
    MockOverlayDirective.prototype.attach = function (target) { };
    MockOverlayDirective.prototype.detach = function () { };
    return MockOverlayDirective;
}(AbstractOverlayDirective));
exports.MockOverlayDirective = MockOverlayDirective;
exports.default = OverlayDirective;
//# sourceMappingURL=overlay.directive.js.map