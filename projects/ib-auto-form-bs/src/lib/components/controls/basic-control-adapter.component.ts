import {DynamicControlOptions, IbAutoFormControlAdapter} from "../../models/ib-auto-form";
import {AbstractControl, FormGroup} from "@angular/forms";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {IbAutoFormValidationService} from "../../services/ib-auto-form-validation.service";

@Component({ template: '' })
export class BasicControlAdapterComponent implements IbAutoFormControlAdapter, OnInit, OnDestroy {
  control: DynamicControlOptions;
  form: FormGroup;
  valid: boolean;
  errorMessage: string;
  required: boolean;
  dirty: boolean;
  now: number = +new Date();

  private formControl: AbstractControl;
  private changeSubscription: Subscription;

  constructor(private validationService: IbAutoFormValidationService) {
  }

  ngOnInit(): void {
    if (!this.form) {
      throw new Error("form<FormGroup> property must be set!");
    }
    if (!this.control) {
      throw new Error("control<DynamicControlOptions> property must be set!");
    }
    this.formControl = this.form.get(this.control.id);
    this.required = this.control.validations && !!this.control.validations.find(valObj => valObj.validation === "required");
    this.setValidation();
  }

  setValidation() {
    if (this.formControl) {
      this.changeSubscription = this.formControl.valueChanges.subscribe(() => {
        if (this.formControl.dirty) {
          this.validate();
        }
      });
    }
  }

  validate(): void {
    this.dirty = true;
    this.errorMessage = this.validationService.getErrorMessages(this.formControl, this.control.validations);
    this.valid = this.formControl.valid;
  }

  ngOnDestroy(): void {
    if (this.changeSubscription) {
      this.changeSubscription.unsubscribe();
    }
  }

}
