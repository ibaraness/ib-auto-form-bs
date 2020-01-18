import { Validators } from "@angular/forms";
import { only_letters, password } from "../constants/validations";
import { IBValidationMap } from "../models/ib-auto-form";

export const validationConfig: IBValidationMap = {
  required: () => Validators.required,
  minlength: Validators.minLength,
  only_letters,
  password,
  email: () => Validators.email,
  requiredTrue: () => Validators.requiredTrue
};
