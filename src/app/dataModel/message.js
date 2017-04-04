"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageBase = (function () {
    function MessageBase(title, content, author, email, tel, uploadTime, isReplied) {
        if (tel === void 0) { tel = ''; }
        if (uploadTime === void 0) { uploadTime = new Date(); }
        if (isReplied === void 0) { isReplied = false; }
        this.title = title;
        this.content = content;
        this.author = author;
        this.email = email;
        this.tel = tel;
        this.uploadTime = uploadTime;
        this.isReplied = isReplied;
    }
    return MessageBase;
}());
exports.MessageBase = MessageBase;
//# sourceMappingURL=message.js.map