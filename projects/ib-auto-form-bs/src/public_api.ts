/*
 * Public API Surface of ib-auto-form-bs
 */

export {IbAutoFormConfigService} from "./lib/services/ib-auto-form-config.service";

export {
  IbAutoFormControl,
  Validation,
  controlType,
  ControlSimpleSelectOption,
  DynamicControlOptions,
  IbAutoFormControlAdapter,
  IbAutoFormConfig,
  IbAutoFormControlGroup,
  ValidationMap,
  FormValues,
  ControlValidationEvent,
  IbAutoFormGroup,
} from "./lib/models/ib-auto-form";


export {IbAutoFormComponent} from "./lib/ib-auto-form.component";
export {ControlTextInputComponent} from "./lib/components/controls/control-text-input/control-text-input.component";
export {
  ControlAdapterTextInputComponent
}from "./lib/components/controls/control-text-input/control-adapter-text-input/control-adapter-text-input.component";
export {DynamicControlDirective} from "./lib/directives/dynamic-control/dynamic-control.directive";
export {ControlValidatorDirective} from "./lib/directives/control-validator/control-validator.directive";
export {IbAutoFormBsModule} from "./lib/ib-auto-form-bs.module";
