import {ModuleWithProviders, NgModule} from "@angular/core";
import {IbAutoFormComponent} from "./ib-auto-form.component";
import {ControlTextInputComponent} from "./components/controls/control-text-input/control-text-input.component";
import {
  ControlAdapterTextInputComponent
} from "./components/controls/control-text-input/control-adapter-text-input/control-adapter-text-input.component";
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

@NgModule({
  declarations: [
    IbAutoFormComponent,
    ControlTextInputComponent,
    ControlAdapterTextInputComponent,
    DynamicControlDirective,
    ControlValidatorDirective,
    ControlAdapterCheckboxComponent,
    ControlAdapterSelectComponent,
    ControlAdapterRadioComponent,
    IbAutoFormGroupComponent,
    IbAutoFormGroupFactoryComponent,
  ],
  exports: [
    IbAutoFormComponent,
    ControlTextInputComponent,
    ControlAdapterTextInputComponent,
    ControlAdapterCheckboxComponent,
    DynamicControlDirective,
    ControlValidatorDirective,
    ControlAdapterSelectComponent,
    ControlAdapterRadioComponent,
    IbAutoFormGroupComponent,
    IbAutoFormGroupFactoryComponent,
  ],
  entryComponents: [
    ControlAdapterTextInputComponent,
    ControlAdapterCheckboxComponent,
    ControlAdapterSelectComponent,
    ControlAdapterRadioComponent,
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
