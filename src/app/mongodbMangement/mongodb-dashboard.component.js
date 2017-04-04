"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var $ = require("jquery");
var rxjs_1 = require("rxjs");
var MongodbDashboardComponent = (function () {
    function MongodbDashboardComponent() {
        this.autoRefreshObservable = rxjs_1.Observable.interval(5000);
        this.autoRefreshSubscription = null;
    }
    MongodbDashboardComponent.prototype.ngOnInit = function () {
        // $("[name='auto-refresh-checkbox']").bootstrapSwitch();
        this.mongodbStatFrame = $('#MongodbStatFrame')[0];
        this.autoRefreshChecked(true);
    };
    MongodbDashboardComponent.prototype.ngOnDestroy = function () {
        if (this.autoRefreshSubscription !== null) {
            this.autoRefreshSubscription.unsubscribe();
            this.autoRefreshSubscription = null;
        }
    };
    MongodbDashboardComponent.prototype.autoRefreshChecked = function (value) {
        var _this = this;
        // let selectedColor = $('#auto-refresh-checkbox input:radio:checked').val();
        if (value) {
            // start auto refresh
            if (this.autoRefreshSubscription === null) {
                this.autoRefreshSubscription = this.autoRefreshObservable.subscribe(function (v) { _this.refresh(); });
            }
        }
        else {
            if (this.autoRefreshSubscription !== null) {
                this.autoRefreshSubscription.unsubscribe();
                this.autoRefreshSubscription = null;
            }
        }
    };
    MongodbDashboardComponent.prototype.refresh = function () {
        this.mongodbStatFrame.src = this.mongodbStatFrame.src;
    };
    return MongodbDashboardComponent;
}());
MongodbDashboardComponent = __decorate([
    core_1.Component({
        templateUrl: './mongodb-dashboard.component.html',
        styleUrls: ['./mongodb-dashboard.component.css']
    })
], MongodbDashboardComponent);
exports.MongodbDashboardComponent = MongodbDashboardComponent;
//# sourceMappingURL=mongodb-dashboard.component.js.map