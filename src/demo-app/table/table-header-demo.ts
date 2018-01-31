import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mat-table-header',
  templateUrl: 'table-header-demo.html',
  styleUrls: ['table-header-demo.css'],
})
export class TableHeader {
  @Input() selectedRowCount: number;

  getSelectedRowCount(): string {
    if (this.selectedRowCount === 0) {
      return '';
    } else {
      return this.selectedRowCount.toString();
    }
  }

  @Output() delete = new EventEmitter<void>();
}
