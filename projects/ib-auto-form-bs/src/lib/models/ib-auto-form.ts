import {ControlValueAccessor, FormGroup} from "@angular/forms";
import {Input, Type} from "@angular/core";

export interface IbAutoFormControl extends ControlValueAccessor {
  onChange: (value: any) => void;
  control: DynamicControlOptions;
}

export interface Validation {
  validation: string;
  errorMessage: string;
}

export enum controlType {
  TEXT_INPUT = 'text',
  CHECKBOX = 'checkbox',
  SELECT = 'select',
  RADIO = 'radio',
  TEXTAREA = 'textarea',
  FILE = 'file',
  DATE_PICKER = 'datepicker'
}

export interface ControlSimpleItem {
  key: string | number;
  title: string;
}

export interface DynamicControlOptions {
  id: string;
  title?: string;
  html?: string;
  defaultValue?: any;
  type: string;
  tags?: string[];
  options?: { [optionName: string]: any };
  disabled?: boolean;
  data?: any;
  items?: ControlSimpleItem[];
  validations?: Validation[];
  className?: string;
  placeholder?: string;
  multipleSelect?: boolean;
  rows?: number;
}

export interface IbAutoFormControlAdapter {
  control: DynamicControlOptions;
  form: FormGroup;

  validate(): void;
}

export interface ControlAdaptersConfig {
  [name: string]: Type<IbAutoFormControlAdapter>;
}

export interface IbFormGeneralConfig {
  customGroupComponent?: Type<IbAutoFormGroup>;
  controlAdaptersConfig?: ControlAdaptersConfig;
  extendExistingControls?: boolean;
}

export interface IbAutoFormControlGroup {
  controls?: DynamicControlOptions[];
  groups?: IbAutoFormControlGroup[];
  tags?: string[];
  id?: string;
  title?: string;
  className?: string;
}


export interface ValidationMap {
  [name: string]: Function;
}

export interface FormValues {
  [name: string]: any;
}

export interface ControlValidationEvent {
  error: boolean;
  errorMessage: string;
}

export abstract class IbAutoFormGroup {
  @Input() group: IbAutoFormControlGroup;
}
