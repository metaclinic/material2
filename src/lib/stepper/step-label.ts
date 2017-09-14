/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Directive, TemplateRef} from '@angular/core';
import {CdkStepLabel} from '@metaclinic/cdk/stepper';

/** Workaround for https://github.com/angular/angular/issues/17849 */
export const _MdStepLabel = CdkStepLabel;

@Directive({
  selector: '[mdStepLabel], [matStepLabel]',
})
export class MdStepLabel extends _MdStepLabel {
  constructor(template: TemplateRef<any>) {
    super(template);
  }
}
