import {Component, OnInit, ViewChild} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {ControlValidationEvent, DynamicControlOptions, IbAutoFormControlAdapter} from "../../../models/ib-auto-form";
import {ControlValidatorDirective} from "../../../directives/control-validator/control-validator.directive";
import * as _ from "lodash";

@Component({
  selector: "lib-ib-control-adapter-text-input2",
  template: `
      <div *ngIf="form"
           class="form-group"
           [formGroup]="form" libIBControlValidator
           (statusChange)="onStatusChange($event)"
           [form]="form" [control]="control">

          <label *ngIf="control.title" [for]="now+control.id" [ngClass]="{'required': required}"
          >{{control.title}}</label>
          <input
                  [type]="inputType"
                  class="form-control"
                  [id]="now+control.id"
                  [attr.placeholder]="control.placeholder"
                  [formControlName]="control.id"
                  [ngClass]="{
                    'is-invalid': !valid && dirty,
                    'is-valid': !valid && dirty
                  }"
                  autocomplete="on"
                  [name]="control.id"
          >
          <div class="invalid-feedback">{{errorMessage}}</div>
      </div>
  `
})
export class ControlAdapterTextInputComponent
  implements IbAutoFormControlAdapter, OnInit {
  @ViewChild(ControlValidatorDirective, {static: false}) controlValidator;
  form: FormGroup;
  control: DynamicControlOptions;
  valid: boolean;
  errorMessage: string;
  required: boolean;
  dirty: boolean;
  inputType: string;
  now: number = +new Date();

  ngOnInit(): void {
    if (!this.form) {
      throw new Error("form<FormGroup> property must be set!");
    }
    this.required = this.control.validations && !!this.control.validations.find(valObj => valObj.validation === "required");
    this.inputType = _.property("options.input_type")(this.control) || "text";
  }

  validate() {
    this.controlValidator.validate();
  }

  onStatusChange(event: ControlValidationEvent) {
    this.dirty = true;
    this.errorMessage = event.errorMessage;
    this.valid = !event.error;
  }
}
