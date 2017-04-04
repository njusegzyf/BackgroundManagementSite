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
var message_reply_component_1 = require("./message-reply.component");
var message_mock_service_1 = require("../dataServiceMock/message.mock-service");
var MessageReplyData = (function () {
    function MessageReplyData(parentMessage) {
        this.parentMessage = parentMessage;
    }
    return MessageReplyData;
}());
var MessageTableComponent = (function () {
    function MessageTableComponent() {
        this.data = message_mock_service_1.MOCK_MESSAGES;
        this.gridOptions = {};
        this.gridOptions.rowData = this.data;
        this.gridOptions.columnDefs = [
            {
                headerName: '#',
                width: 50,
                checkboxSelection: true,
                suppressSorting: true,
                suppressMenu: true,
                pinned: true,
                // left column is going to act as group column, with the expand / contract controls
                cellRenderer: 'group',
                // we don't want the child count - it would be one each time anyway as each parent not has exactly one child node
                cellRendererParams: { suppressCount: true }
            },
            {
                headerName: 'Title',
                field: 'title',
                width: 180
            },
            {
                headerName: 'Author',
                field: 'author',
                width: 100
            },
            {
                headerName: 'Email',
                field: 'email',
                width: 100
            },
            {
                headerName: 'Tel',
                field: 'tel',
                width: 100
            },
            {
                headerName: 'Upload Time',
                field: 'uploadTime',
                width: 100
            },
        ];
    }
    MessageTableComponent.prototype.isFullWidthCell = function (rowNode) {
        return rowNode.level === 1;
    };
    MessageTableComponent.prototype.ngAfterViewInit = function () {
        // this.gridOptions.api.sizeColumnsToFit();
    };
    MessageTableComponent.prototype.getFullWidthCellRenderer = function () {
        return message_reply_component_1.MessageReplyComponent;
    };
    MessageTableComponent.prototype.getRowHeight = function (params) {
        var rowIsDetailRow = params.node.level === 1;
        // return 100 when detail row, otherwise return 25
        return rowIsDetailRow ? 200 : 25;
    };
    MessageTableComponent.prototype.getNodeChildDetails = function (rowItem) {
        // @see http://stackoverflow.com/questions/42605168/ag-grid-try-to-make-tree-demo-work-using-own-data
        if (!(rowItem instanceof MessageReplyData)) {
            return {
                group: true,
                // the key is used by the default group cellRenderer
                key: rowItem.name,
                // provide ag-Grid with the children of this group
                children: [new MessageReplyData(rowItem)],
                // for demo, expand the third row by default
                expanded: rowItem.isReplied === false
            };
        }
        else {
            return null;
        }
    };
    return MessageTableComponent;
}());
MessageTableComponent = __decorate([
    core_1.Component({
        selector: 'message-table',
        templateUrl: './message-table.component.html'
    }),
    __metadata("design:paramtypes", [])
], MessageTableComponent);
exports.MessageTableComponent = MessageTableComponent;
//# sourceMappingURL=message-table.component.js.map