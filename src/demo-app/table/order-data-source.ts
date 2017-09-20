import { MdPaginator, MdSort } from '@metaclinic/material';
import { DataSource } from '@metaclinic/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { OrderDatabase, OrderData } from './order-database';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

export class OrderDataSource extends DataSource<any> {
  constructor(private _orderDatabase: OrderDatabase,
    private _paginator: MdPaginator,
    private _sort: MdSort) {
    super();
  }

  connect(): Observable<OrderData[]> {
    const displayDataChanges = [
      this._paginator.page,
      this._sort.mdSortChange,
      this._orderDatabase.dataChange
    ];
    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.getSortedData();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {
    // No-op
  }

  /** Returns a sorted copy of the database data. */
  getSortedData(): OrderData[] {
    const data = this._orderDatabase.data.slice();
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'orderNumber': [propertyA, propertyB] = [a.orderNumber, b.orderNumber]; break;
        case 'patientLastName': [propertyA, propertyB] = [a.patientLastName, b.patientLastName]; break;
        case 'assignedPathologistLastName': [propertyA, propertyB] = [a.assignedPathologistLastName, b.assignedPathologistLastName]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }
}
