import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ComponentOne } from "./components/component-one/component-one.component";
import { ComponentTwo } from "./components/component-two/component-two.component";
import { ChangeMessage } from "./components/change-message/change-message.component";
import { MessageService } from "./services/message.service";

@NgModule({
  providers: [MessageService],
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ComponentOne, ComponentTwo, ChangeMessage],
  bootstrap: [AppComponent]
})
export class AppModule {}
