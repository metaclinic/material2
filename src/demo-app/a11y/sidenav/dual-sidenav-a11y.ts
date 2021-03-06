import {Component, ViewEncapsulation} from '@angular/core';
import {MatSnackBar} from '@metaclinic/material/snack-bar';


@Component({
  moduleId: module.id,
  selector: 'dual-sidenav-a11y',
  templateUrl: 'dual-sidenav-a11y.html',
  styleUrls: ['shared.css', 'dual-sidenav-a11y.css'],
  host: {'class': 'a11y-demo-sidenav-app'},
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class SidenavDualAccessibilityDemo {
  constructor(private _snackbar: MatSnackBar) {}

  play(list: string) {
    this._snackbar.open(`Playing "${list}"`, '', {duration: 1000});
  }
}
