import { Component, ElementRef, ViewChild } from '@angular/core';
import { OrderDatabase, OrderData } from './order-database';
import { OrderDataSource } from './order-data-source';
import { MatPaginator, MatSort, MatTableDataSource } from '@metaclinic/material';
import { CASESTATUS } from '../dataset/caseStatus';
// import {DetailRow, PersonDetailDataSource} from './person-detail-data-source';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormControl } from '@angular/forms';
import { SelectionModel } from '@metaclinic/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';

export type OrderProperties = 'id' | 'orderNumber' | 'patientName' | 'location' | 'caseStatus' | 'assignedPathologist';

const properties = ['id', 'orderNumber', 'patientId', 'patientFirstName', 'patientLastName',
  'addressId', 'address', 'caseStatusId', 'assignedPathologistId', 'assignedPathologistFirstName',
  'assignedPathologistLastName'];

@Component({
  moduleId: module.id,
  selector: 'table-demo',
  templateUrl: 'table-demo.html',
  styleUrls: ['table-demo.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableDemo {
  dataSource: OrderDataSource | null;
  // dataSourceWithDetails: PersonDetailDataSource | null;
  // matTableDataSource = new MatTableDataSource<OrderData>();
  displayedColumns: OrderProperties[] = [];
  // trackByStrategy: TrackByStrategy = 'reference';
  changeReferences = false;
  highlights = new Set<string>();
  wasExpanded = new Set<OrderData>();

  filter = new FormControl();

  selectedRows: any[] = [];

  allRowsSelected: boolean = false;

  // expandedPerson: UserData;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  // @ViewChild('paginatorForDataSource') paginatorForDataSource: MatPaginator;
  // @ViewChild('sortForDataSource') sortForDataSource: MatSort;

  constructor(public _orderDatabase: OrderDatabase) {
    // this.matTableDataSource.filterPredicate = (data: OrderData, filter: string) => data.patientLastName.indexOf(filter) != -1;
    // this.filter.valueChanges.subscribe(filter => this.matTableDataSource!.filter = filter);
  }

  // ngAfterViewInit() {
  //   // Needs to be set up after the view is initialized since the data source will look at the sort
  //   // and paginator's initial values to know what data should be rendered.
  //   this.matTableDataSource!.paginator = this.paginatorForDataSource;
  //   this.matTableDataSource!.sort = this.sortForDataSource;
  // }

  ngOnInit() {
    this.connect();
    // Observable.fromEvent(this.filter.nativeElement, 'keyup')
    //   .debounceTime(150)
    //   .distinctUntilChanged()
    //   .subscribe(() => {
    //     this.paginatorForDataSource.pageIndex = 0;
    //     this.matTableDataSource.filter = this.filter.nativeElement.value;
    //   });
  }

  connect() {
    this.displayedColumns = ['id', 'orderNumber', 'patientName', 'location', 'caseStatus', 'assignedPathologist'];
    this.dataSource = new OrderDataSource(this._orderDatabase, this.paginator, this.sort);
    this._orderDatabase.initialize();
    // this.matTableDataSource!.data = this._orderDatabase.data.slice();
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
