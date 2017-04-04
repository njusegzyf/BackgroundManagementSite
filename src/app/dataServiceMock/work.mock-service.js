"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var work_1 = require("../dataModel/work");
var WorkMockService = (function () {
    function WorkMockService() {
        this.mockWorks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            .map(function (n) { return new work_1.WorkBase(null, "work name " + n, "source path " + n, "description " + n, null); });
    }
    WorkMockService.prototype.getAllAsync = function () {
        return Promise.resolve(this.mockWorks);
    };
    WorkMockService.prototype.getAllSync = function () {
        return this.mockWorks;
    };
    WorkMockService.prototype.getByIdAsync = function (id) {
        return this.getAllAsync()
            .then(function (res) { return res.filter(function (work) { return work._id === id; })[0]; });
    };
    WorkMockService.prototype.saveAsync = function (item) {
        return Promise.resolve(item);
    };
    WorkMockService.prototype.deleteAsync = function (item) {
        var index = this.mockWorks.findIndex(function (v) { return v.name === item.name; });
        if (index > 0) {
            this.mockWorks = this.mockWorks.splice(index);
            return Promise.resolve(true);
        }
        else {
            return Promise.resolve(false);
        }
    };
    return WorkMockService;
}());
exports.WorkMockService = WorkMockService;
//# sourceMappingURL=work.mock-service.js.map