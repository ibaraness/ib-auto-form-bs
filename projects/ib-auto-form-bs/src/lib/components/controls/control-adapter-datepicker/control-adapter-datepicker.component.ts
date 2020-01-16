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
          <div class="input-group" [formControlName]="control.id" [(libIbCustomValueAccessor)]="currentValue">
              <input class="form-control"
                     (dateChanged)="handleDateChange($event)"
                     type="text"
                     [attr.placeholder]="control.placeholder"
                     angular-mydatepicker
                     [name]="control.id"
                     [options]="myOptions"
                     [value]="currentValue"
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
  @ViewChild(ControlValidatorDirective, {static: false}) controlValidator;
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

  currentValue: string = '';

  handleDateChange(date: IMyDateModel): void {
    this.currentValue = date.singleDate.formatted;
  }

  ngOnInit(): void {
    this.required = this.control.validations && !!this.control.validations.find(valObj => valObj.validation === "required");
    const options = this.control.options;

    // TODO: check if datePickerOptions is IAngularMyDpOptions type
    if (options && options.datePickerOptions) {
      this.myOptions = {...this.myOptions, ...options.datePickerOptions};
    }
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
