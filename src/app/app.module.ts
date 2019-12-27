import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import {TextInputComponent} from "./custom_controls/components/text-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {IbAutoFormBsModule} from "ib-auto-form-bs";


@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent
  ],
  entryComponents: [TextInputComponent],
  imports: [
    BrowserModule,
    IbAutoFormBsModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
