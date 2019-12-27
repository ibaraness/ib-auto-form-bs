import { Injectable } from '@angular/core';
import {dynamicControlAdapters} from "../config/dynamic-control-adapters.config";
import {IbAutoFormConfig} from "../models/ib-auto-form";

@Injectable()
export class IbAutoFormConfigService {

  private _config = dynamicControlAdapters;

  get config(): IbAutoFormConfig{
    return this._config;
  }

  set config(config: IbAutoFormConfig){
    this._config = config;
  }
  constructor() { }
}
