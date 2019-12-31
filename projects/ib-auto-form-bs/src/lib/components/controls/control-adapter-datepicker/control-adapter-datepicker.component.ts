import {Component, OnInit, ViewChild} from "@angular/core";
import {IAngularMyDpOptions, IMyDateModel} from "angular-mydatepicker";
import {ControlValidationEvent, DynamicControlOptions, IbAutoFormControlAdapter} from "../../../models/ib-auto-form";
import {FormGroup} from "@angular/forms";
import {ControlValidatorDirective} from "../../../directives/control-validator/control-validator.directive";

@Component({
  selector: 'lib-control-adapter-datepicker',
  template: `
      <div *ngIf="form"
           [formGroup]="form" libIBControlValidator
           [form]="form" [control]="control"
           (statusChange)="onStatusChange($event)"
           class="form-group">

          <label [for]="now+control.id" [ngClass]="{'required': required}">{{control.title}}</label>
          <div class="input-group">
              <input class="form-control"
                     type="text"
                     [attr.placeholder]="control.placeholder"
                     angular-mydatepicker
                     [name]="control.id"
                     [formControlName]="control.id"
                     [options]="myOptions"
                     [ngClass]="{
                    'is-invalid': !valid && dirty,
                    'is-valid': !valid && dirty
                  }"
                     [id]="now+control.id"
                     #dp="angular-mydatepicker"
              />
              <div class="input-group-append">
                  <button class="btn btn-secondary" type="button" (click)="dp.toggleCalendar()">
                      <i class="fas fa-calendar-alt"></i>
                  </button>
              </div>
          </div>
          <div class="invalid-feedback">{{errorMessage}}</div>
      </div>
  `
})
export class ControlAdapterDatepickerComponent implements IbAutoFormControlAdapter, OnInit {
  @ViewChild(ControlValidatorDirective, { static: false }) controlValidator;
  myOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy'
    // other options...
  };

  control: DynamicControlOptions;
  form: FormGroup;
  dirty: boolean;
  valid: boolean;
  errorMessage: string;
  now: number = +new Date();
  required: boolean;

  ngOnInit(): void {
    // Initialize to today date
    // let model: IMyDateModel = {isRange: false, singleDate: {jsDate: new Date()}, dateRange: null};
    this.required = this.control.validations && !!this.control.validations.find(valObj => valObj.validation === "required");
  }

  setDate(): void {
    // Set today date using the patchValue function
    const model: IMyDateModel = {isRange: false, singleDate: {jsDate: new Date()}, dateRange: null};
    this.form.patchValue({myDate: model});
  }

  clearDate(): void {
    // Clear the date using the patchValue function
    this.form.patchValue({myDate: null});
  }

  validate(): void {
    this.controlValidator.validate();
  }

  onStatusChange(event: ControlValidationEvent) {
    this.dirty = true;
    this.errorMessage = event.errorMessage;
    this.valid = !event.error;
  }
}
