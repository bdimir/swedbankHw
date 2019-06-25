import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {IMessage} from '../models/message';


/***
 * Service for show message and loading spinner
 */
@Injectable()
export class MessengerService {
  public message: IMessage = {type: 'none', textToSend: '', timer: 2000};
  public messageWatcher: Subject<IMessage> = new Subject<IMessage>();
  private spinner = false;
  public spinnerWatcher: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  showSpinner(): void {
    this.spinner = true;
    this.spinnerWatcher.next(this.spinner);
  }


  hideSpinner(): void {
    this.spinner = false;
    this.spinnerWatcher.next(this.spinner);
  }

  sendMessage(msg: IMessage): void {
    this.message = msg;
    this.messageWatcher.next(this.message);
  }


  hideMessage(): void {
    this.message = {type: 'none', textToSend: '', timer: 2000};
    this.messageWatcher.next(this.message);
  }


  sendSuccessMessage(text: string) {
    this.sendMessage({
      type: 'success',
      textToSend: text,
      timer: 2000
    });
  }


  sendWarningMessage(text: string) {
    this.sendMessage({
      type: 'warning',
      textToSend: text,
      timer: 5000
    });
  }


  sendDangerMessage(text: string) {
    this.sendMessage({
      type: 'danger',
      textToSend: text,
      timer: 5000
    });
  }


  sendError(errorToSend: any) {
    let error: any = errorToSend;
    try {
      error = JSON.parse(errorToSend._body);
    } catch (e) {
    }
    this.sendDangerMessage(error.message || error.errorMessage || error.statusText);
  }
}
