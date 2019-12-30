/*
 * Public API Surface of ib-auto-form-bs
 */

export {IbAutoFormConfigService} from "./lib/services/ib-auto-form-config.service";

export {
  IbAutoFormControl,
  Validation,
  controlType,
  ControlSimpleItem,
  DynamicControlOptions,
  IbAutoFormControlAdapter,
  ControlAdaptersConfig,
  IbAutoFormControlGroup,
  ValidationMap,
  FormValues,
  ControlValidationEvent,
  IbAutoFormGroup,
  IbFormGeneralConfig
} from "./lib/models/ib-auto-form";


export {IbAutoFormComponent} from "./lib/ib-auto-form.component";
export {DynamicControlDirective} from "./lib/directives/dynamic-control/dynamic-control.directive";
export {ControlValidatorDirective} from "./lib/directives/control-validator/control-validator.directive";
export {IbAutoFormBsModule} from "./lib/ib-auto-form-bs.module";
