import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { MessageService } from "../../services/message.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-component-two",
  templateUrl: "./component-two.component.html"
})
export class ComponentTwo implements OnInit, OnDestroy {
  private readonly destroy = new Subject();
  message: string;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.messageSubject.subscribe(
      message => (this.message = message)
    );
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
