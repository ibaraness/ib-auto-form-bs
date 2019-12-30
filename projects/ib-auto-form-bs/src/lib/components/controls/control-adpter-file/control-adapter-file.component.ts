import {Component, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {ControlValidatorDirective} from "../../../directives/control-validator/control-validator.directive";
import {ControlValidationEvent, DynamicControlOptions} from "../../../models/ib-auto-form";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'lib-control-adapter-file',
  template: `
      <div *ngIf="form"
           [formGroup]="form" libIBControlValidator
           [form]="form" [control]="control"
           (statusChange)="onStatusChange($event)"
           class="form-group">
          <label [for]="now+control.id" [ngClass]="{'required': required}">{{control.title}}</label>
          <input type="file"
                 [formControlName]="control.id"
                 class="form-control-file"
                 [ngClass]="{
                    'is-invalid': !valid && dirty,
                    'is-valid': valid
                  }"
                 [id]="now+control.id"
                 [name]="control.id"
                 id="exampleFormControlFile1">
      </div>
      <div class="invalid-feedback">{{errorMessage}}</div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ControlAdapterFileComponent implements OnInit{
  @ViewChild(ControlValidatorDirective, {static: false}) controlValidator;
  control: DynamicControlOptions;
  form: FormGroup;
  dirty: boolean;
  valid: boolean;
  errorMessage: string;
  now: number = +new Date();
  required: boolean;

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
