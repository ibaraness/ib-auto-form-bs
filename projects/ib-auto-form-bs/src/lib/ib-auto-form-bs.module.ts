import {ModuleWithProviders, NgModule} from "@angular/core";
import {IBAutoFormComponent} from "./i-b-auto-form.component";
import {IBDynamicControlDirective} from "./directives/dynamic-control/i-b-dynamic-control.directive";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IbAutoFormValidationService} from "./services/ib-auto-form-validation.service";
import {IBAutoFormConfigService} from "./services/i-b-auto-form-config.service";
import {ControlAdapterCheckboxComponent} from './components/controls/control-adapter-checkbox/control-adapter-checkbox.component';
import {ControlAdapterSelectComponent} from './components/controls/control-adapter-select/control-adapter-select.component';
import {ControlAdapterRadioComponent} from './components/controls/control-adapter-radio/control-adapter-radio.component';
import {IbAutoFormGroupComponent} from "./components/ib-auto-form-group.component";
import {IbAutoFormGroupFactoryComponent} from "./components/ib-auto-form-group-factory.component";
import {ControlAdapterTextareaComponent} from "./components/controls/control-adapter-textarea/control-adapter-textarea.component";
import {ControlAdapterFileComponent} from "./components/controls/control-adpter-file/control-adapter-file.component";
import {ControlAdapterTextInputComponent} from "./components/controls/control-adapter-textinput/control-adapter-text-input.component";
import {ControlAdapterDatepickerComponent} from "./components/controls/control-adapter-datepicker/control-adapter-datepicker.component";
import {AngularMyDatePickerModule} from 'angular-mydatepicker';
import {IBCustomValueAccessorDirective} from "./directives/custom-value-accessor/i-b-custom-value-accessor.directive";
import {BasicControlAdapterComponent} from "./components/controls/basic-control-adapter.component";
import { NgxPopper } from 'angular-popper';
import {PopoverBaseDirective} from "./directives/popper/popper-base.directive";
import {PopperDirective} from "./directives/popper/popper.directive";
import {ControlAdapterAutocompleteComponent} from "./components/controls/control-adapter-autocomplete/ControlAdapterAutocomplete.component";


@NgModule({
  declarations: [
    IBAutoFormComponent,
    IBDynamicControlDirective,
    BasicControlAdapterComponent,
    ControlAdapterCheckboxComponent,
    ControlAdapterSelectComponent,
    ControlAdapterRadioComponent,
    IbAutoFormGroupComponent,
    IbAutoFormGroupFactoryComponent,
    ControlAdapterTextareaComponent,
    ControlAdapterFileComponent,
    ControlAdapterTextInputComponent,
    ControlAdapterDatepickerComponent,
    ControlAdapterAutocompleteComponent,
    IBCustomValueAccessorDirective,
    PopoverBaseDirective,
    PopperDirective
  ],
  exports: [
    IBAutoFormComponent,
    ControlAdapterCheckboxComponent,
    IBDynamicControlDirective,
    ControlAdapterSelectComponent,
    ControlAdapterRadioComponent,
    IbAutoFormGroupComponent,
    IbAutoFormGroupFactoryComponent,
    ControlAdapterTextareaComponent,
    ControlAdapterFileComponent,
    ControlAdapterTextInputComponent,
    ControlAdapterDatepickerComponent,
    ControlAdapterAutocompleteComponent,
    IBCustomValueAccessorDirective,
    PopperDirective
  ],
  entryComponents: [
    ControlAdapterCheckboxComponent,
    ControlAdapterSelectComponent,
    ControlAdapterRadioComponent,
    ControlAdapterTextareaComponent,
    ControlAdapterFileComponent,
    ControlAdapterTextInputComponent,
    ControlAdapterDatepickerComponent,
    ControlAdapterAutocompleteComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AngularMyDatePickerModule, NgxPopper],
})
export class IbAutoFormBsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IbAutoFormBsModule,
      providers: [IBAutoFormConfigService, IbAutoFormValidationService]
    };
  }
}
