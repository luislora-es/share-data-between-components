import { Component, Input, OnDestroy } from "@angular/core";
import { MessageService } from "../../services/message.service";
import { Subject } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-change-message",
  templateUrl: "./change-message.component.html"
})
export class ChangeMessage {
  newMessage: string;
  
  constructor(private messageService: MessageService) {}

  handleNewMessageChange() {
    this.messageService.changeMessage(this.newMessage);
  }
}
