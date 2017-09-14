import {Component} from '@angular/core';
import {MdSnackBar} from '@metaclinic/material';

/**
 * @title Basic snack-bar
 */
@Component({
  selector: 'snack-bar-overview-example',
  templateUrl: 'snack-bar-overview-example.html',
})
export class SnackBarOverviewExample {
  constructor(public snackBar: MdSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
