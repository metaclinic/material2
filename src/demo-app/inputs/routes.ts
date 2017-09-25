import { Routes } from '@angular/router';

import { InputDemo } from '../input/input-demo';
import { AutocompleteDemo } from '../autocomplete/autocomplete-demo';
import { CheckboxDemo } from '../checkbox/checkbox-demo';
import { DatepickerDemo } from '../datepicker/datepicker-demo';
import { RadioDemo } from '../radio/radio-demo';
import { SelectDemo } from '../select/select-demo';
import { SliderDemo } from '../slider/slider-demo';
import { SlideToggleDemo } from '../slide-toggle/slide-toggle-demo';

export const INPUT_DEMO_ROUTES: Routes = [
  { path: '', redirectTo: 'input', pathMatch: 'full' },
  { path: 'input', component: InputDemo },
  { path: 'autocomplete', component: AutocompleteDemo },
  { path: 'checkbox', component: CheckboxDemo },
  { path: 'datepicker', component: DatepickerDemo },
  { path: 'radio', component: RadioDemo },
  { path: 'select', component: SelectDemo },
  { path: 'slider', component: SliderDemo },
  { path: 'slidetoggle', component: SlideToggleDemo }
];
