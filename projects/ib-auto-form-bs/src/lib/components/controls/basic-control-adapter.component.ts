import {IBDynamicControlOptions, IBAutoFormControlAdapter} from "../../models/ib-auto-form";
import {AbstractControl, FormGroup} from "@angular/forms";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {IbAutoFormValidationService} from "../../services/ib-auto-form-validation.service";

/**
 * A base class for all form controls
 */
@Component({ template: '' })
export class BasicControlAdapterComponent implements IBAutoFormControlAdapter, OnInit, OnDestroy {
  /**
   * Form control metadata
   */
  control: IBDynamicControlOptions;

  /**
   * The FormGroup instance of the entire form
   */
  form: FormGroup;

  /**
   * Control valid flag
   */
  valid: boolean;

  /**
   * Error message to display in case the validation fails
   */
  errorMessage: string;

  /**
   * Required flag, to mark the label with asterisk
   */
  required: boolean;

  /**
   * If true, validation will be be triggered on blur
   */
  dirty: boolean;

  /**
   * Made to create a unique ID for each control
   */
  now: number = +new Date();

  /**
   * The formGroup control (AbstractControl)
   * We use it here to check weather the control is required, also
   * to check validation and get the error messages
   */
  private formControl: AbstractControl;

  /**
   * Hold control valueChange subscription
   */
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
    this.setValidationSubscription();
  }

  /**
   * Subscribe to valueChanges observable of the form control.
   * On value change validate the control
   */
  private setValidationSubscription(): void {
    if (this.formControl) {
      this.changeSubscription = this.formControl.valueChanges.subscribe(() => {
        if (this.formControl.dirty) {
          this.validate();
        }
      });
    }
  }

  /**
   * Trigger validation test
   */
  validate(): void {
    /**
     * Mark the control as dirty on validation
     */
    this.dirty = true;

    /**
     * Get a concatenation string of all the error messages from the validations that failed
     */
    this.errorMessage = this.validationService.getErrorMessages(this.formControl, this.control.validations);

    /**
     * Mark the control as valid or invalid
     */
    this.valid = this.formControl.valid;
  }

  ngOnDestroy(): void {
    if (this.changeSubscription) {
      this.changeSubscription.unsubscribe();
    }
  }

}
