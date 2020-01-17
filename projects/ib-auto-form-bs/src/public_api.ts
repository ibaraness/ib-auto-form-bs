/*
 * Public API Surface of ib-auto-form-bs
 */

import {CustomValueAccessorDirective} from "./lib/directives/custom-value-accessor/custom-value-accessor.directive";

export {IbAutoFormConfigService} from "./lib/services/ib-auto-form-config.service";

export {
  Validation,
  controlType,
  ControlSimpleItem,
  DynamicControlOptions,
  IbAutoFormControlAdapter,
  ControlAdaptersConfig,
  IbAutoFormControlGroup,
  ValidationMap,
  IbAutoFormGroup,
  IbFormGeneralConfig
} from "./lib/models/ib-auto-form";


export {IbAutoFormComponent} from "./lib/ib-auto-form.component";
export {DynamicControlDirective} from "./lib/directives/dynamic-control/dynamic-control.directive";
export {IbAutoFormBsModule} from "./lib/ib-auto-form-bs.module";
export {CustomValueAccessorDirective} from './lib/directives/custom-value-accessor/custom-value-accessor.directive';
