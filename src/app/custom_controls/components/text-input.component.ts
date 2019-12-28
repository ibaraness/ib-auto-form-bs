import {Component, OnInit, ViewChild} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {ControlValidationEvent, ControlValidatorDirective, DynamicControlOptions, IbAutoFormControlAdapter} from "ib-auto-form-bs";


@Component({
  selector: 'app-text-input',
  template: `
      <div *ngIf="form"
           [formGroup]="form" libIBControlValidator
           (statusChange)="onStatusChange($event)"
           [form]="form" [control]="control">
          <label [for]="control.id">{{control?.title + (required ? '*' : '')}} </label>
          <input type="text" [formControlName]="control.id" [name]="control.id" [id]="control.id" (blur)="validate()" autocomplete="on">
          <div>{{errorMessage}}</div>
      </div>

  `
})
export class TextInputComponent implements IbAutoFormControlAdapter, OnInit {
  @ViewChild(ControlValidatorDirective) controlValidator;
  control: DynamicControlOptions;
  form: FormGroup;
  required: boolean;
  dirty: boolean;
  valid: boolean;
  errorMessage: string;

  ngOnInit(): void {
    this.required = this.control.validations && !!this.control.validations.find(valObj => valObj.validation === "required");
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
