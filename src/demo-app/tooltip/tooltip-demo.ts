import {Component, ViewEncapsulation} from '@angular/core';
import {TooltipPosition} from '@metaclinic/material';


@Component({
  moduleId: module.id,
  selector: 'tooltip-demo',
  templateUrl: 'tooltip-demo.html',
  styleUrls: ['tooltip-demo.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class TooltipDemo {
  position: TooltipPosition = 'below';
  message: string = 'Here is the tooltip';
  tooltips: string[] = [];
  disabled = false;
  showDelay = 0;
  hideDelay = 1000;
  showExtraClass = false;
}
