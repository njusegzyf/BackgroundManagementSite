import { Component, AfterViewInit } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular/main";

import { IMessage } from '../dataModel/message';

@Component({
  selector: 'message-reply',
  templateUrl: './message-reply.component.html'
})
export class MessageReplyComponent implements ICellRendererAngularComp, AfterViewInit {
  public parentMessage: IMessage;

  constructor() {
  }

  agInit(params: any): void {
    this.parentMessage = params.node.parent.data;
  }

  // Sometimes the gridReady event can fire before the angular component is ready to receive it, so in an angular
  // environment its safer to on you cannot safely rely on AfterViewInit instead before using the API
  ngAfterViewInit() {
  }

  onButtonClick() {}

  consumeMouseWheelOnDetailGrid(event: any) {
    event.stopPropagation();
  }
}
