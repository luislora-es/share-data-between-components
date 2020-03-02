import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageService {

  public messageSubject: BehaviorSubject<string> = new BehaviorSubject('Default message');

  constructor() { }

  changeMessage(message: string) {
    this.messageSubject.next(message)
  }

}