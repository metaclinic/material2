import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ElementRef,
  Renderer2,
  OnInit
} from '@angular/core';
import {
  OverlayContainer,
  MdDatepickerInputEvent
} from '@metaclinic/material';

@Component({
  moduleId: module.id,
  selector: 'datepicker-demo',
  templateUrl: 'datepicker-demo.html',
  styleUrls: ['datepicker-demo.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerDemo implements OnInit {
  constructor(private _element: ElementRef,
    private _renderer: Renderer2,
    private _overlayContainer: OverlayContainer) {
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
    this.toggleTheme();
  }

  dateFilter = (date: Date) => date.getMonth() % 2 == 1 && date.getDate() % 2 == 0;

  onDateInput = (e: MdDatepickerInputEvent<Date>) => this.lastDateInput = e.value;
  onDateChange = (e: MdDatepickerInputEvent<Date>) => this.lastDateChange = e.value;

  toggleTheme() {
    const darkThemeClass = 'unicorn-dark-theme';
    this._renderer.addClass(this._element.nativeElement, darkThemeClass);
    this._overlayContainer.themeClass = darkThemeClass;
  }
}
