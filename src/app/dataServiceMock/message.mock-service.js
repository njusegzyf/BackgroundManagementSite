"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_1 = require("../dataModel/message");
var LONG_MESSAGE_CONTENT = "This article describes a lightweight class that handles free memory block management to accommodate variable-size allocation requests.\nIt is used by Diligent Engine to handle descriptor heap allocations, which will be covered in subsequent posts.\nThe class keeps track of free blocks of memory, and facilitates allocation by finding the smallest block that provides enough space.\nDeallocated chunks of memory are merged with the existing free blocks. Runtime complexity is logarithmic with respect to the number of blocks for both allocation and deallocation.";
exports.MOCK_MESSAGES = [
    new message_1.MessageBase('title', 'content', 'author', 'email', 'tel'),
    new message_1.MessageBase('NHibernate – Introduction, configuration & CRUD with MVC', 'This practice demonstrates the basics of NHibernate and shows how to integrate NHibernate into .Net & MVC environment with an example CRUD application', 'The Daily Build', 'zhangyifan890508@msn.com', '1000-000-0000'),
    new message_1.MessageBase('NHibernate – Introduction, configuration & CRUD with MVC', LONG_MESSAGE_CONTENT, 'The Daily Build', 'zhangyifan890508@msn.com', '1000-000-0000')
];
//# sourceMappingURL=message.mock-service.js.map