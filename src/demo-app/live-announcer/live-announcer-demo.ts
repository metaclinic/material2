import {Component} from '@angular/core';
import {LiveAnnouncer} from '@metaclinic/cdk/a11y';


@Component({
  moduleId: module.id,
  selector: 'toolbar-demo',
  templateUrl: 'live-announcer-demo.html',
})
export class LiveAnnouncerDemo {
  constructor(private live: LiveAnnouncer) {}

  announceText(message: string) {
    this.live.announce(message);
  }
}
