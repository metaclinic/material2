/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@metaclinic/material/button';
import {MatSelectModule} from '@metaclinic/material/select';
import {MatTooltipModule} from '@metaclinic/material/tooltip';
import {MatPaginator} from './paginator';
import {MatPaginatorIntl} from './paginator-intl';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  exports: [MatPaginator],
  declarations: [MatPaginator],
  providers: [MatPaginatorIntl],
})
export class MatPaginatorModule {}
