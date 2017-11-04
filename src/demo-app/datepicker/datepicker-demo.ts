import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ElementRef,
  Renderer2,
  OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@metaclinic/material/datepicker';


@Component({
  moduleId: module.id,
  selector: 'datepicker-demo',
  templateUrl: 'datepicker-demo.html',
  styleUrls: ['datepicker-demo.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerDemo implements OnInit {
  constructor(private _element: ElementRef,
    private _renderer: Renderer2
  ) {
  }
  touch: boolean;
  filterOdd: boolean;
  yearView: boolean;
  inputDisabled: boolean;
  datepickerDisabled: boolean;
  minDate: Date;
  maxDate: Date;
  startAt: Date;
  date: Date;
  lastDateInput: Date | null;
  lastDateChange: Date | null;

  ngOnInit() {
    // this.toggleTheme();
  }

  dateFilter = (date: Date) => date.getMonth() % 2 == 1 && date.getDate() % 2 == 0;

  onDateInput = (e: MatDatepickerInputEvent<Date>) => this.lastDateInput = e.value;
  onDateChange = (e: MatDatepickerInputEvent<Date>) => this.lastDateChange = e.value;

  dateCtrl = new FormControl();
}
