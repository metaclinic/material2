import {Component} from '@angular/core';
import {FocusOriginMonitor} from '@metaclinic/material';


@Component({
  moduleId: module.id,
  selector: 'style-demo',
  templateUrl: 'style-demo.html',
  styleUrls: ['style-demo.css'],
})
export class StyleDemo {
  constructor(public fom: FocusOriginMonitor) {}
}
