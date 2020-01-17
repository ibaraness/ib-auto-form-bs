import {Injectable, Type} from '@angular/core';
import {dynamicControlAdapters} from "../config/dynamic-control-adapters.config";
import {ControlAdaptersConfig, IbAutoFormGroup, IbFormGeneralConfig} from "../models/ib-auto-form";

/**
 * Global config for all forms.
 */
@Injectable()
export class IbAutoFormConfigService implements IbFormGeneralConfig {

  /**
   * Custom control group component to use
   */
  customGroupComponent: Type<IbAutoFormGroup>;

  /**
   * Should the custom controls (if set above) extend existing controls. By default it will replace them completely
   */
  extendExistingControls: boolean;

  /**
   * A flag that check weather the form should create and display the control groups.
   * By default it set to true. If set to false, the control groups will be striped out and only the
   * control will be display without any separation.
   */
  useGroups: boolean;

  /**
   * Add a custom controls configuration
   */
  controlAdaptersConfig: ControlAdaptersConfig = dynamicControlAdapters;

}
