import { Injectable } from "@angular/core";
import { ValidatorFn, AbstractControl } from "@angular/forms";
import { validationConfig } from "../config/validation.config";
import { ValidationMap, Validation } from "../models/ib-auto-form";

@Injectable()
export class IbAutoFormValidationService {
  validationConfig: ValidationMap;

  constructor() {
    this.validationConfig = validationConfig;
  }

  getValidator(name: string): ValidatorFn {
    const validatorArr: string[] = name.split("-");
    const validator: Function = this.validationConfig[validatorArr.shift()];
    if (!validator) {
      return null;
    }
    return validator.apply(undefined, validatorArr);
  }

  setValidationConfig(validationConfigLocal: ValidationMap = validationConfig) {
    this.validationConfig = validationConfigLocal;
  }

  getErrorMessages(formControl: AbstractControl, validations: Validation[]): string {
    if (!formControl.errors) {
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
