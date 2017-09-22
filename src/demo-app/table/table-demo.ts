import { Component, ViewChild } from '@angular/core';
import { OrderDatabase, OrderData } from './order-database';
import { OrderDataSource } from './order-data-source';
import { MdPaginator, MdSort } from '@metaclinic/material';
import { CASESTATUS } from '../dataset/caseStatus';
export type OrderProperties = 'id' | 'orderNumber' | 'patientName' | 'location' | 'caseStatus' | 'assignedPathologist';

const properties = ['id', 'orderNumber', 'patientId', 'patientFirstName', 'patientLastName',
  'addressId', 'address', 'caseStatusId', 'assignedPathologistId', 'assignedPathologistFirstName',
  'assignedPathologistLastName'];

@Component({
  moduleId: module.id,
  selector: 'table-demo',
  templateUrl: 'table-demo.html',
  styleUrls: ['table-demo.css'],
})
export class TableDemo {

  dataSource: OrderDataSource | null;

  displayedColumns: OrderProperties[] = [];

  selectedRows: any[] = [];

  allRowsSelected: boolean = false;

  @ViewChild(MdPaginator) _paginator: MdPaginator;

  @ViewChild(MdSort) sort: MdSort;

  constructor(public _orderDatabase: OrderDatabase) { }

  ngOnInit() {
    this.connect();
  }

  connect() {
    this.displayedColumns = ['id', 'orderNumber', 'patientName', 'location', 'caseStatus', 'assignedPathologist'];
    this.dataSource = new OrderDataSource(this._orderDatabase, this._paginator, this.sort);
    this._orderDatabase.initialize();
  }

  disconnect() {
    this.dataSource = null;
    this.displayedColumns = [];
  }

  getCaseStatusText(caseStatusId: number) {
    const caseStatus = CASESTATUS.filter(f => f.id === caseStatusId)[0];
    return caseStatus.name;
  }

  toggleRowInTable(row: any) {
    const toggledRow = this.selectedRows.filter(f => f === row)[0];
    if (toggledRow) {
      this.selectedRows.splice(this.selectedRows.indexOf(toggledRow), 1);
    } else {
      this.selectedRows.push(row);
    }
  }

  toggleAllRowsInTable() {
    if (this.allRowsSelected === false) {
      this.selectedRows = this._orderDatabase.data.slice();
      this.allRowsSelected = true;
    } else {
      this.selectedRows = [];
      this.allRowsSelected = false;
    }
  }

  getRowSelectedState(row: any): boolean {
    const currentRow = this.selectedRows.filter(f => f === row)[0];
    if (currentRow) {
      return true;
    } else {
      return false;
    }
  }

  getSelectedRowCount(): string {
    if (this.selectedRows.length === 0) {
      return '';
    } else {
      return this.selectedRows.length.toString();
    }
  }

  deleteSelected() {
    console.log('delete triggered');
  }

}
