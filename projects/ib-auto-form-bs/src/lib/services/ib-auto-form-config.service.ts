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
  extendExistingControls: boolean;

  private _controlAdaptersConfig = dynamicControlAdapters;

  get controlAdaptersConfig(): ControlAdaptersConfig {
    return this._controlAdaptersConfig;
  }

  set controlAdaptersConfig(config: ControlAdaptersConfig) {
    this._controlAdaptersConfig = config;
  }
}
