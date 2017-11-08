/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatRippleModule } from '@metaclinic/material/core';
import { A11yModule } from '@metaclinic/cdk/a11y';
import {
  MatAnchor,
  MatButton,
  MatMiniFab,
  MatButtonCssMatStyler,
  MatFab,
  MatIconButtonCssMatStyler,
  MatRaisedButtonCssMatStyler,
  MatOutlineButtonCssMatStyler
} from './button';


@NgModule({
  imports: [
    CommonModule,
    MatRippleModule,
    MatCommonModule,
    A11yModule,
  ],
  exports: [
    MatButton,
    MatAnchor,
    MatMiniFab,
    MatFab,
    MatCommonModule,
    MatButtonCssMatStyler,
    MatRaisedButtonCssMatStyler,
    MatIconButtonCssMatStyler,
    MatOutlineButtonCssMatStyler
  ],
  declarations: [
    MatButton,
    MatAnchor,
    MatMiniFab,
    MatFab,
    MatButtonCssMatStyler,
    MatRaisedButtonCssMatStyler,
    MatIconButtonCssMatStyler,
    MatOutlineButtonCssMatStyler
  ],
})
export class MatButtonModule { }
