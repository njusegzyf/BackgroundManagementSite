"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorkBase = (function () {
    function WorkBase(id, name, sourcePath, description, author, uploadTime, upCount) {
        if (uploadTime === void 0) { uploadTime = new Date(); }
        if (upCount === void 0) { upCount = 0; }
        this._id = id;
        this.name = name;
        this.sourcePath = sourcePath;
        this.description = description;
        this.author = author;
        this.uploadTime = uploadTime;
        this.upCount = upCount;
    }
    return WorkBase;
}());
exports.WorkBase = WorkBase;
//# sourceMappingURL=work.js.map