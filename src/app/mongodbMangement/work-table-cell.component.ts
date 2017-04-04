import { Component } from '@angular/core';

@Component({
  selector: 'work-table-cell',
  template: `<span style="color: red">{{ params.value }}</span>`
})
export class WorkTableCellComponent {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }
}
