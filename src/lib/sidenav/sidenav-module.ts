/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {A11yModule} from '@metaclinic/cdk/a11y';
import {OverlayModule} from '@metaclinic/cdk/overlay';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCommonModule} from '@metaclinic/material/core';
import {ScrollDispatchModule} from '@metaclinic/cdk/scrolling';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from './drawer';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from './sidenav';


@NgModule({
  imports: [
    CommonModule,
    MatCommonModule,
    A11yModule,
    OverlayModule,
    ScrollDispatchModule,
  ],
  exports: [
    MatCommonModule,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
  ],
  declarations: [
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
  ],
})
export class MatSidenavModule {}
