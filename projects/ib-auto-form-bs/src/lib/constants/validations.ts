import { AbstractControl } from "@angular/forms";

const customRegExpValidatorFN = (patt, returnKey) => {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = !patt.test(control.value);
    return forbidden ? {[returnKey]: {value: control.value}} : null;
  };
};

export const password = () => {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).*$/;
  return customRegExpValidatorFN(pattern, "password");
};

export const only_letters = () => {
  const pattern = /^[a-zA-Z]*$/;
  return customRegExpValidatorFN(pattern, "only_letters");
};


