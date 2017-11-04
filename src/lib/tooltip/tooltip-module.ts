/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {A11yModule, ARIA_DESCRIBER_PROVIDER} from '@metaclinic/cdk/a11y';
import {OverlayModule} from '@metaclinic/cdk/overlay';
import {PlatformModule} from '@metaclinic/cdk/platform';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCommonModule} from '@metaclinic/material/core';
import {MAT_TOOLTIP_SCROLL_STRATEGY_PROVIDER, MatTooltip, TooltipComponent} from './tooltip';


@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    MatCommonModule,
    PlatformModule,
    A11yModule,
  ],
  exports: [MatTooltip, TooltipComponent, MatCommonModule],
  declarations: [MatTooltip, TooltipComponent],
  entryComponents: [TooltipComponent],
  providers: [MAT_TOOLTIP_SCROLL_STRATEGY_PROVIDER, ARIA_DESCRIBER_PROVIDER],
})
export class MatTooltipModule {}
