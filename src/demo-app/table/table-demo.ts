import { Component, ViewChild } from '@angular/core';
import { OrderDatabase, OrderData } from './order-database';
import { OrderDataSource } from './order-data-source';
import { MdPaginator, MdSort } from '@metaclinic/material';
import { CASESTATUS } from '../dataset/caseStatus';
export type OrderProperties = 'orderNumber' | 'patientName' | 'location' | 'caseStatus' | 'assignedPathologist';

export type TrackByStrategy = 'id' | 'reference' | 'index';

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
  trackByStrategy: TrackByStrategy = 'reference';
  changeReferences = false;
  highlights = new Set<string>();

  dynamicColumnDefs: any[] = [];
  dynamicColumnIds: string[] = [];

  @ViewChild(MdPaginator) _paginator: MdPaginator;

  @ViewChild(MdSort) sort: MdSort;

  constructor(public _orderDatabase: OrderDatabase) { }

  ngOnInit() {
    this.connect();
  }

  addDynamicColumnDef() {
    const nextProperty = properties[this.dynamicColumnDefs.length];

    this.dynamicColumnDefs.push({
      id: nextProperty.toUpperCase(),
      property: nextProperty,
      headerText: nextProperty
    });

    this.dynamicColumnIds = this.dynamicColumnDefs.map(columnDef => columnDef.id);
  }

  removeDynamicColumnDef() {
    this.dynamicColumnDefs.pop();
    this.dynamicColumnIds.pop();
  }

  connect() {
    this.displayedColumns = ['orderNumber', 'patientName', 'location', 'caseStatus', 'assignedPathologist'];
    this.dataSource = new OrderDataSource(this._orderDatabase,
      this._paginator, this.sort);
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

  orderTrackBy = (index: number, item: OrderData) => {
    switch (this.trackByStrategy) {
      case 'id': return item.id;
      case 'reference': return item;
      case 'index': return index;
    }
  }

  toggleHighlight(property: string, enable: boolean) {
    enable ? this.highlights.add(property) : this.highlights.delete(property);
  }
}
