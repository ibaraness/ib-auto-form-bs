import {Component, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {IBAutoFormControlAdapter, IBDynamicControlOptions} from "ib-auto-form-bs";
import {IBFormGeneralConfig} from "../../../../projects/ib-auto-form-bs/src/lib/models/ib-auto-form";


@Component({
  selector: 'app-text-input',
  template: `
      <div *ngIf="form"
           [formGroup]="form">
          <label [for]="control.id">{{control?.title + (required ? '*' : '')}} </label>
          <input type="text" [formControlName]="control.id" [name]="control.id" [id]="control.id" (blur)="validate()" autocomplete="on">
          <div>{{errorMessage}}</div>
      </div>

  `
})
export class TextInputComponent implements IBAutoFormControlAdapter, OnInit {
  control: IBDynamicControlOptions;
  form: FormGroup;
  required: boolean;
  config: IBFormGeneralConfig;
  dirty: boolean;
  valid: boolean;
  errorMessage: string;

  ngOnInit(): void {
    this.required = this.control.validations && !!this.control.validations.find(valObj => valObj.validation === "required");
  }

  validate(): void {
  }

}
