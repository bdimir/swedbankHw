import {Component, OnInit, OnDestroy} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {IMessage} from '../../models/message';
import {MessengerService} from '../../services/messenger.service';


/***
 * Component display message in bottom-right corner
 */
@Component({
  selector: 'app-notification',
  template: ''
})
export class AppNotificationComponent implements OnInit, OnDestroy {

  public message: IMessage = {type: 'none', textToSend: '', timer: 2000};
  public watcher: any;

  constructor(private messenger: MessengerService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {

    this.watcher = this.messenger.messageWatcher.subscribe((value: IMessage) => {

      let msgClass = '';

      switch (value.type) {
        case 'danger':
          msgClass = 'danger-notification';
          break;
        case 'warning':
          msgClass = 'warning-notification';
          break;
        case 'success':
          msgClass = 'success-notification';
          break;
      }

      this.snackBar.open(value.textToSend, 'x', {
        duration: value.timer, panelClass: msgClass
      });

    });
  }

  onClick(): void {
    this.messenger.hideMessage();
  }

  ngOnDestroy() {
    if (this.watcher) {
      this.watcher.unsubscribe();
    }
  }
}
