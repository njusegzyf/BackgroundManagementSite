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
var MessageReplyComponent = (function () {
    function MessageReplyComponent() {
    }
    MessageReplyComponent.prototype.agInit = function (params) {
        this.parentMessage = params.node.parent.data;
    };
    // Sometimes the gridReady event can fire before the angular component is ready to receive it, so in an angular
    // environment its safer to on you cannot safely rely on AfterViewInit instead before using the API
    MessageReplyComponent.prototype.ngAfterViewInit = function () {
    };
    MessageReplyComponent.prototype.onButtonClick = function () { };
    MessageReplyComponent.prototype.consumeMouseWheelOnDetailGrid = function (event) {
        event.stopPropagation();
    };
    return MessageReplyComponent;
}());
MessageReplyComponent = __decorate([
    core_1.Component({
        selector: 'message-reply',
        templateUrl: './message-reply.component.html'
    }),
    __metadata("design:paramtypes", [])
], MessageReplyComponent);
exports.MessageReplyComponent = MessageReplyComponent;
//# sourceMappingURL=message-reply.component.js.map