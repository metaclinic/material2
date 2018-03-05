/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@metaclinic/cdk/overlay';
import { PortalModule } from '@metaclinic/cdk/portal';
import { A11yModule } from '@metaclinic/cdk/a11y';
import { MatCommonModule } from '@metaclinic/material/core';
import {
  MatDialog,
  MAT_DIALOG_SCROLL_STRATEGY_PROVIDER
} from './dialog';
import { MatDialogContainer } from './dialog-container';
import {
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MatDialogActions
} from './dialog-content-directives';


@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    A11yModule,
    MatCommonModule,
  ],
  exports: [
    MatDialogContainer,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatCommonModule,
  ],
  declarations: [
    MatDialogContainer,
    MatDialogClose,
    MatDialogTitle,
    MatDialogActions,
    MatDialogContent,
  ],
  providers: [
    MatDialog,
    MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
  ],
  entryComponents: [MatDialogContainer],
})
export class MatDialogModule { }
