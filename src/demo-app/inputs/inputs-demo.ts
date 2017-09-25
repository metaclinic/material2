import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'inputs-demo',
  templateUrl: 'inputs-demo.html',
  encapsulation: ViewEncapsulation.None
})
export class InputsDemo {

  tabLinks = [
    { label: 'Input', link: 'input' },
    { label: 'Autocomplete', link: 'autocomplete' },
    { label: 'Checkbox', link: 'checkbox' },
    { label: 'Datepicker', link: 'datepicker' },
    { label: 'Radio', link: 'radio' },
    { label: 'Select', link: 'select' },
    { label: 'Slider', link: 'slider' },
    { label: 'Slide Toggle', link: 'slidetoggle' },
  ];

}
