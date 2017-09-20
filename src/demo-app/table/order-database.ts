import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ADDRESSES } from '../dataset/addresses';
import { CASESTATUS } from '../dataset/caseStatus';
import { ORDERS } from '../dataset/orders';
import { PATIENTS } from '../dataset/patients';
import { PEOPLE } from '../dataset/people';

export let LATEST_ID: number = 0;
export class OrderData {
  id: number;
  orderNumber: number;
  patientId: number;
  patientFirstName: string;
  patientLastName: string;
  addressId: number;
  address: string;
  caseStatusId: number;
  assignedPathologistId: number;
  assignedPathologistFirstName: string;
  assignedPathologistLastName: string;
}

@Injectable()
export class OrderDatabase {
  dataChange: BehaviorSubject<OrderData[]> = new BehaviorSubject<OrderData[]>([]);

  get data(): OrderData[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    LATEST_ID = 0;
    this.dataChange.next([]);
    for (let i = 0; i < 100; i++) { this.addOrder(); }
  }

  shuffle(changeReferences: boolean) {
    let copiedData = this.data.slice();
    for (let i = copiedData.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [copiedData[i - 1], copiedData[j]] = [copiedData[j], copiedData[i - 1]];
    }

    if (changeReferences) {
      copiedData = copiedData.map(orderData => {
        return {
          id: orderData.id,
          orderNumber: orderData.orderNumber,
          patientId: orderData.patientId,
          patientFirstName: orderData.patientFirstName,
          patientLastName: orderData.patientLastName,
          addressId: orderData.addressId,
          address: orderData.address,
          caseStatusId: orderData.caseStatusId,
          assignedPathologistId: orderData.assignedPathologistId,
          assignedPathologistFirstName: orderData.assignedPathologistFirstName,
          assignedPathologistLastName: orderData.assignedPathologistLastName
        };
      });
    }

    this.dataChange.next(copiedData);
  }

  addOrder() {

    const order = ORDERS[Math.round(Math.random() * (ORDERS.length - 1))];
    const patient = PATIENTS.filter(f => f.id === order.patientId)[0];
    const location = ADDRESSES.filter(f => f.id === order.locationId)[0];
    const pathologist = PEOPLE.filter(f => f.id === order.assignedPathologistId)[0];

    const copiedData = this.data.slice();

    copiedData.push({
      id: order.id,
      orderNumber: order.orderNumber,
      patientId: order.patientId,
      patientFirstName: patient.firstName,
      patientLastName: patient.lastName,
      addressId: order.locationId,
      address: location.streetNumber + ' ' + location.streetName + ' ' + location.streetSuffix,
      caseStatusId: order.caseStatusId,
      assignedPathologistId: order.assignedPathologistId,
      assignedPathologistFirstName: pathologist.firstName,
      assignedPathologistLastName: pathologist.lastName
    });

    this.dataChange.next(copiedData);
  }
}
