import { Injectable } from "@angular/core";
import { ValidatorFn, AbstractControl } from "@angular/forms";
import { validationConfig } from "../config/validation.config";
import { ValidationMap, Validation } from "../models/ib-auto-form";

@Injectable()
export class IbAutoFormValidationService {

  /**
   * Validation key/value object
   * [name: string]: Function
   *  - name The name of the validation
   *  - Function - The actual validation function
   */
  validationConfig: ValidationMap;

  constructor() {
    this.validationConfig = validationConfig;
  }

  /**
   * Returns a validator function
   * @param validatorName - contains the name of the validation, but also could contain
   * additional parameters, separated by the '-' sign. For example: 'minlength-2' is minlength validator
   * which we pass '2' to as a parameter.
   */
  getValidator(validatorName: string): ValidatorFn {
    /**
     * Split the validator function name and any parameters, if exist, from validatorName
     */
    const validatorArr: string[] = validatorName.split("-");

    /**
     * remove and store the first element, which is the validator function
     */
    const validator: Function = this.validationConfig[validatorArr.shift()];
    if (!validator) {
      return null;
    }

    /**
     * By returning the applied function with the parameters, we get a function equivalent to
     * angular ValidatorFn function type
     */
    return validator.apply(undefined, validatorArr);
  }

  /**
   * Set a custom validation config
   * @param validationConfigLocal
   */
  setValidationConfig(validationConfigLocal: ValidationMap = validationConfig) {
    this.validationConfig = validationConfigLocal;
  }

  /**
   * Get a string containing all the error messages for any validation errors
   * @param formControl - The actual formGroup control
   * @param validations - The validations list
   */
  getErrorMessages(formControl: AbstractControl, validations: Validation[]): string {
    if (!formControl || !formControl.errors) {
      return null;
    }
    return Object.keys(formControl.errors)
      .map(errorName => {
        const validator = validations.find(
          v => v.validation.indexOf(errorName) > -1
        );
        return (validator && validator.errorMessage) || "";
      })
      .join(".");
  }
}
