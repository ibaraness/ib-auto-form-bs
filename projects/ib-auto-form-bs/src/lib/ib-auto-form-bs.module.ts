import {ModuleWithProviders, NgModule} from "@angular/core";
import {IbAutoFormComponent} from "./ib-auto-form.component";
import {DynamicControlDirective} from "./directives/dynamic-control/dynamic-control.directive";
import {ControlValidatorDirective} from "./directives/control-validator/control-validator.directive";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IbAutoFormValidationService} from "./services/ib-auto-form-validation.service";
import {IbAutoFormConfigService} from "./services/ib-auto-form-config.service";
import {ControlAdapterCheckboxComponent} from './components/controls/control-adapter-checkbox/control-adapter-checkbox.component';
import {ControlAdapterSelectComponent} from './components/controls/control-adapter-select/control-adapter-select.component';
import {ControlAdapterRadioComponent} from './components/controls/control-adapter-radio/control-adapter-radio.component';
import {IbAutoFormGroupComponent} from "./components/ib-auto-form-group.component";
import {IbAutoFormGroupFactoryComponent} from "./components/ib-auto-form-group-factory.component";
import {ControlAdapterTextareaComponent} from "./components/controls/control-adapter-textarea/control-adapter-textarea.component";
import {ControlAdapterFileComponent} from "./components/controls/control-adpter-file/control-adapter-file.component";
import {ControlAdapterTextInputComponent} from "./components/controls/control-adapter-textinput/control-adapter-text-input.component";

@NgModule({
  declarations: [
    IbAutoFormComponent,
    DynamicControlDirective,
    ControlValidatorDirective,
    ControlAdapterCheckboxComponent,
    ControlAdapterSelectComponent,
    ControlAdapterRadioComponent,
    IbAutoFormGroupComponent,
    IbAutoFormGroupFactoryComponent,
    ControlAdapterTextareaComponent,
    ControlAdapterFileComponent,
    ControlAdapterTextInputComponent
  ],
  exports: [
    IbAutoFormComponent,
    ControlAdapterCheckboxComponent,
    DynamicControlDirective,
    ControlValidatorDirective,
    ControlAdapterSelectComponent,
    ControlAdapterRadioComponent,
    IbAutoFormGroupComponent,
    IbAutoFormGroupFactoryComponent,
    ControlAdapterTextareaComponent,
    ControlAdapterFileComponent,
    ControlAdapterTextInputComponent
  ],
  entryComponents: [
    ControlAdapterCheckboxComponent,
    ControlAdapterSelectComponent,
    ControlAdapterRadioComponent,
    ControlAdapterTextareaComponent,
    ControlAdapterFileComponent,
    ControlAdapterTextInputComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class IbAutoFormBsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IbAutoFormBsModule,
      providers: [IbAutoFormConfigService, IbAutoFormValidationService]
    };
  }
}
