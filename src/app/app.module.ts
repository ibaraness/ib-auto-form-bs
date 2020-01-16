import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";

import {TextInputComponent} from "./custom_controls/components/text-input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IbAutoFormBsModule} from "ib-auto-form-bs";
import {CustomGroupComponent} from "./custom_controls/components/custom-group.component";
import {CustomVaInputComponent} from "./custom_controls/components/custom-va-input.component";


@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    CustomGroupComponent,
    CustomVaInputComponent
  ],
  entryComponents: [TextInputComponent, CustomGroupComponent, CustomVaInputComponent],
  imports: [
    BrowserModule,
    IbAutoFormBsModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
