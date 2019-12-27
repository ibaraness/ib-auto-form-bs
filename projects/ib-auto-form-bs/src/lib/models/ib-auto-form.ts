import { ControlValueAccessor, FormGroup, ValidatorFn } from "@angular/forms";
import {Type} from "@angular/core";

export interface IbAutoFormControl extends ControlValueAccessor {
  onChange: (value: any) => void;
  control: DynamicControlOptions;
}

export interface Validation {
  validation: string;
  errorMessage: string;
}

export enum controlType {
  TEXT_INPUT = 'textbox',
  CHECKBOX = 'checkbox',
  SELECT = 'select',
  RADIO = 'radio'
}

export interface ControlSimpleSelectOption {
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
  options?: { [optionName: string]: string };
  data?: any;
  selectOptions?: ControlSimpleSelectOption[];
  validations?: Validation[];
}

export interface IbAutoFormControlAdapter {
  control: DynamicControlOptions;
  form: FormGroup;
  validate(): void;
}

export interface IbAutoFormConfig {
  [name: string]: Type<IbAutoFormControlAdapter>;
}

export interface IbAutoFormControlGroup {
  controls?: DynamicControlOptions[];
  groups?: IbAutoFormControlGroup[];
  tags?: string[];
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
