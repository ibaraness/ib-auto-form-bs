import {FormGroup, ValidatorFn} from "@angular/forms";
import {Input, Type} from "@angular/core";

/**
 * Validation object
 */
export interface Validation {
  /**
   * The name of the validation (email, min, max etc.)
   */
  validation: string;

  /**
   * The error message to present in case the validation fails
   */
  errorMessage: string;
}

/**
 * Existing control type names
 */
export enum controlType {
  TEXT_INPUT = 'text',
  CHECKBOX = 'checkbox',
  SELECT = 'select',
  RADIO = 'radio',
  TEXTAREA = 'textarea',
  FILE = 'file',
  DATE_PICKER = 'datepicker'
}

/**
 * Represents an item in a select or radio-button
 */
export interface ControlSimpleItem {
  /**
   * Corresponds to the value the control will hold
   */
  key: string | number;

  /**
   * The text the item will present
   */
  title: string;
}

/**
 * Form control metadata.
 * Each control must have at least type and id, all other properties are optional
 */
export interface DynamicControlOptions {
  /**
   * The control id, which will be used for formControlName directive value
   */
  id: string;

  /**
   * Usually, if exist, creates a label element for the control
   */
  title?: string;

  /**
   * The initial value the control will hold. undefined by default
   */
  defaultValue?: any;

  /**
   * A specific control type name as found on controlType enum, or a custom one
   */
  type: controlType | string;

  /**
   * An optional tag to add for the control. Can be used to group specific controls
   */
  tags?: string[];

  /**
   * An optional control specific options. For example ControlAdapterDatepickerComponent can get
   * datePickerOptions (See ControlAdapterDatepickerComponent for more information)
   */
  options?: { [optionName: string]: any };

  /**
   * Set weather the control should be disabled by default
   */
  disabled?: boolean;

  /**
   * Custom data you might want to pass for the control
   */
  data?: any;

  /**
   * A list of ControlSimpleItem objects to pass to radio-buttons or select control (Or other custom control)
   */
  items?: ControlSimpleItem[];

  /**
   * A list of Validation objects to pass for the control
   */
  validations?: Validation[];

  /**
   * A custom css className
   */
  className?: string;

  /**
   * A placeholder for the control
   */
  placeholder?: string;

  /**
   * A specific select control flag to set weather the select should have multiple select enabled
   */
  multipleSelect?: boolean;

  /**
   * An optional rows value for textarea and select controls
   */
  rows?: number;
}

/**
 * Each custom control should implement the following interface
 */
export interface IbAutoFormControlAdapter {
  control: DynamicControlOptions;
  form: FormGroup;

  /**
   * Trigger validation of control
   */
  validate(): void;
}

/**
 * A key/value object of controls
 * - The key (name: string) is the control name
 * - The value is the control (IbAutoFormControlAdapter)
 */
export interface ControlAdaptersConfig {
  [name: string]: Type<IbAutoFormControlAdapter>;
}

/**
 * General configuration of the form
 */
export interface IbFormGeneralConfig {
  /**
   * Add a custom group component
   */
  customGroupComponent?: Type<IbAutoFormGroup>;

  /**
   * Add a custom controls configuration
   */
  controlAdaptersConfig?: ControlAdaptersConfig;

  /**
   * Should the custom controls (if set above) extend existing controls. By default it will replace them completely
   */
  extendExistingControls?: boolean;

  /**
   * A flag that check weather the form should create and display the control groups.
   * By default it set to true. If set to false, the control groups will be striped out and only the
   * control will be display without any separation.
   */
  useGroups?: boolean;
}

/**
 * Form control group - Contains all the controls as well as other groups
 */
export interface IbAutoFormControlGroup {
  /**
   * A list of all control metadata objects
   */
  controls?: DynamicControlOptions[];

  /**
   * Sub groups that may contains other controls or groups
   */
  groups?: IbAutoFormControlGroup[];

  /**
   * An optional tag to add for the group
   */
  tags?: string[];

  /**
   * A specific ID for the group
   */
  id?: string;

  /**
   * The group title, the native title shows legend title
   */
  title?: string;

  /**
   * Custom CSS class
   */
  className?: string;
}

/**
 * ValidatorFn factory function
 *
 * @description
 * Because some of Angular's Validator functions are of ValidatorFn function type and other acts as a factory
 * functions that return ValidatorFn (like Validators.minLength), ValidatorFnFactory type was created.
 *
 * ValidatorFnFactory is simply a factory function that returns ValidatorFn function. It's important to
 * understand it when creating custom validators or adding additional angular validator functions.
 *
 * @usageNotes
 * For example, if we want to create a factory function (ValidatorFnFactory) for Validators.required validator
 * we will do the following:
 * const myFactory = () => Validators.required
 * We do that because Validators.required already returns a ValidatorFn, so we wrap it in an arrow function
 *
 * If we want to do the same for angular's Validators.minLength validator we do it that way:
 * const myFactory = Validators.minLength
 * As you can see, we did nothing here, the reason is because Validators.minLength is already a factory function
 *
 * If we want to create our own custom validation function, we can do it like that:
 *
 *  const validatorFn = (control: AbstractControl): ValidationErrors | null => {
 *    //our code goes here
 *  }
 *  At this point we can wrap our created validator in arrow function secretly or create a factory function
 *  from the start:
 *
 *  const validatorFn = (args?) => (control: AbstractControl): ValidationErrors | null => {
 *    //our code goes here
 *  }
 *
 *  You can check angular documentation for additional information on creating custom validator
 *  [Custom validators](https://angular.io/guide/form-validation#custom-validators)
 */
export type ValidatorFnFactory = (...params) => ValidatorFn;

/**
 * Validation key/value object
 *  - nameWithParams: The name of the validation with optional parameters separated by '-'
 *  - ValidatorFnFactory - A factory function that returns angular's ValidatorFn function
 */
export interface ValidationMap {
  [nameWithParams: string]: ValidatorFnFactory;
}

/**
 * An abstract class for custom form group component
 */
export abstract class IbAutoFormGroup {
  @Input() group: IbAutoFormControlGroup;
}
