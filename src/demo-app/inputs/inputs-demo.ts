import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'inputs-demo',
  templateUrl: 'inputs-demo.html',
  encapsulation: ViewEncapsulation.None
})
export class InputsDemo {

  tabLinks = [
    { label: 'INPUT', link: 'input' },
    { label: 'AUTOCOMPLETE', link: 'autocomplete' },
    { label: 'CHECKBOX', link: 'checkbox' },
    { label: 'DATEPICKER', link: 'datepicker' },
    { label: 'RADIO', link: 'radio' },
    { label: 'SELECT', link: 'select' },
    { label: 'SLIDER', link: 'slider' },
    { label: 'SLIDE TOGGLE', link: 'slidetoggle' },
  ];

}
