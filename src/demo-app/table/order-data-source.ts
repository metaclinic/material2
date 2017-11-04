import { MatPaginator, MatSort } from '@metaclinic/material';
import { DataSource } from '@metaclinic/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { OrderDatabase, OrderData } from './order-database';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

export class OrderDataSource extends DataSource<any> {
  constructor(private _orderDatabase: OrderDatabase,
    private _paginator: MatPaginator,
    private _sort: MatSort) {
    super();
  }

  connect(): Observable<OrderData[]> {
    const displayDataChanges = [
      this._paginator.page,
      this._sort.sortChange,
      this._orderDatabase.dataChange
    ];
    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.getSortedData();

      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {
    // No-op
  }

  getSortedData(): OrderData[] {
    const data = this._orderDatabase.data.slice();
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      console.log(this._sort.active);

      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'orderNumber': [propertyA, propertyB] = [a.orderNumber, b.orderNumber]; break;
        case 'patientName': [propertyA, propertyB] = [a.patientFirstName + a.patientLastName, b.patientFirstName + b.patientLastName]; break;
        case 'location': [propertyA, propertyB] = [a.address, b.address]; break;
        case 'caseStatus': [propertyA, propertyB] = [a.caseStatusId, b.caseStatusId]; break;
        case 'assignedPathologist': [propertyA, propertyB] = [a.assignedPathologistFirstName + a.assignedPathologistLastName,
        b.assignedPathologistFirstName + b.assignedPathologistLastName]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }
}
