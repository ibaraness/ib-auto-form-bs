import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import {TextInputComponent} from "./custom_controls/components/text-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {IbAutoFormBsModule} from "ib-auto-form-bs";
import {CustomGroupComponent} from "./custom_controls/components/custom-group.component";


@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    CustomGroupComponent
  ],
  entryComponents: [TextInputComponent, CustomGroupComponent],
  imports: [
    BrowserModule,
    IbAutoFormBsModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
