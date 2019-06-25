import {Component, OnDestroy} from '@angular/core';
import {MessengerService} from '../../services/messenger.service';

/***
 * Component display message in bottom-right corner
 */
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnDestroy {
  public display = false;
  public watcher: any;

  constructor(private messenger: MessengerService) {

    this.watcher = this.messenger.spinnerWatcher.subscribe((value: boolean) => {
      this.display = value;
    });
  }

  ngOnDestroy() {
    if (this.watcher) {
      this.watcher.unsubscribe();
    }
  }
}
