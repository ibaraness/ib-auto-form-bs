import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";

import {TextInputComponent} from "./custom_controls/components/text-input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IbAutoFormBsModule} from "ib-auto-form-bs";
import {CustomGroupComponent} from "./custom_controls/components/custom-group.component";
import {CustomVaInputComponent} from "./custom_controls/components/custom-va-input.component";
import {PopperComponent} from "./popover/popperComponent";
import {PopperDirective} from "./popover/directives/popper.directive";
import {AutocompleteComponent} from "./popover/autocomplete.component";
import {PopoverBaseDirective} from "./popover/directives/popover-base.directive";


@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    CustomGroupComponent,
    CustomVaInputComponent,
    PopperComponent,
    PopoverBaseDirective,
    PopperDirective,
    AutocompleteComponent
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
