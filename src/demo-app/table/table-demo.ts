import { Component, ViewChild } from '@angular/core';
import { OrderDatabase, OrderData } from './order-database';
import { OrderDataSource } from './order-data-source';
import { MdPaginator, MdSort } from '@metaclinic/material';
import { CASESTATUS } from '../dataset/caseStatus';
export type OrderProperties = 'orderNumber' | 'patientName' | 'location' | 'caseStatus' | 'assignedPathologist';

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

  @ViewChild(MdPaginator) _paginator: MdPaginator;

  @ViewChild(MdSort) sort: MdSort;

  constructor(public _orderDatabase: OrderDatabase) { }

  ngOnInit() {
    this.connect();
  }

  connect() {
    this.displayedColumns = ['orderNumber', 'patientName', 'location', 'caseStatus', 'assignedPathologist'];
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

}
