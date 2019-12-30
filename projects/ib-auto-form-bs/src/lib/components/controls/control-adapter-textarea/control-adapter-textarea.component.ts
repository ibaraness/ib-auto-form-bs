import {Component, ViewChild, ViewEncapsulation} from "@angular/core";
import {ControlValidationEvent, DynamicControlOptions, IbAutoFormControlAdapter} from "../../../models/ib-auto-form";
import {FormGroup} from "@angular/forms";
import {ControlValidatorDirective} from "../../../directives/control-validator/control-validator.directive";

@Component({
  selector: 'lib-control-adapter-textarea',
  template: `
      <div *ngIf="form"
           [formGroup]="form" libIBControlValidator
           [form]="form" [control]="control"
           (statusChange)="onStatusChange($event)"
           class="form-group">
          <label [for]="now+control.id">{{control.title}}</label>
          <textarea [ngClass]="{
                  'is-invalid': !valid && dirty,
                  'is-valid': valid && dirty
                  }"
                    class="form-control"
                    [formControlName]="control.id"
                    autocomplete="on"
                    [name]="control.id"
                    (blur)="validate()"
                    [attr.rows]="control.rows"
                    [id]="now+control.id">
          </textarea>
          <div class="invalid-feedback">{{errorMessage}}</div>
      </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ControlAdapterTextareaComponent implements IbAutoFormControlAdapter {
  control: DynamicControlOptions;
  form: FormGroup;
  dirty: boolean;
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

}
