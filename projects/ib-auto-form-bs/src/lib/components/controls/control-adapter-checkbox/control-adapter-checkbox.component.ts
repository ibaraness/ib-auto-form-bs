import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ControlValidationEvent, DynamicControlOptions, IbAutoFormControlAdapter} from "../../../models/ib-auto-form";
import {FormGroup} from "@angular/forms";
import {ControlValidatorDirective} from "../../../directives/control-validator/control-validator.directive";

@Component({
  selector: 'lib-control-adapter-checkbox',
  template: `
      <div *ngIf="form"
           [formGroup]="form" libIBControlValidator
           [form]="form" [control]="control"
           (statusChange)="onStatusChange($event)"
           class="form-group form-check">
          <input type="checkbox"
                 [ngClass]="{
                  'is-invalid': !valid && dirty,
                  'is-valid': valid && dirty
                  }"
                 class="form-check-input"
                 [formControlName]="control.id"
                 autocomplete="on"
                 [name]="control.id"
                 (blur)="validate()"
                 [id]="now+control.id">
          <label class="form-check-label" [for]="now+control.id" [ngClass]="{'required': required}">{{control.title}}</label>
          <div class="invalid-feedback">{{errorMessage}}</div>
      </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ControlAdapterCheckboxComponent implements IbAutoFormControlAdapter, OnInit {
  control: DynamicControlOptions;
  form: FormGroup;
  dirty: boolean;
  required: boolean;
  valid: boolean;
  errorMessage: string;
  now: number = +new Date();
  @ViewChild(ControlValidatorDirective, {static: false}) controlValidator;

  validate(): void {
    this.controlValidator.validate();
  }

  onStatusChange(event: ControlValidationEvent) {
    this.dirty = true;
    this.errorMessage = event.errorMessage;
    this.valid = !event.error;
  }

  ngOnInit(): void {
    this.required = this.control.validations && !!this.control.validations.find(valObj => valObj.validation === "required");
  }

}
