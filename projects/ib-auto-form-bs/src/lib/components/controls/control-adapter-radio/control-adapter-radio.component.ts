import {Component, ViewChild} from '@angular/core';
import {ControlValidationEvent, DynamicControlOptions, IbAutoFormControlAdapter} from "../../../models/ib-auto-form";
import {FormGroup} from "@angular/forms";
import {ControlValidatorDirective} from "../../../directives/control-validator/control-validator.directive";

@Component({
  selector: 'lib-control-adapter-radio',
  template: `
      <div *ngIf="form"
           [formGroup]="form" libIBControlValidator
           [form]="form" [control]="control"
           (statusChange)="onStatusChange($event)"
           class="form-group form-check">

          <div class="form-check" *ngFor="let item of control.selectOptions;index as i">
              <input class="form-check-input" type="radio" autocomplete="on"
                     [name]="control.id" [formControlName]="control.id" [id]="now+control.id+i" [value]="item.key">
              <label class="form-check-label" [for]="now+control.id+i">
                  {{item.title}}
              </label>
          </div>

          <div class="invalid-feedback">{{errorMessage}}</div>
      </div>
  `
})
export class ControlAdapterRadioComponent implements IbAutoFormControlAdapter {

  control: DynamicControlOptions;
  form: FormGroup;
  dirty: boolean;
  valid: boolean;
  errorMessage: string;
  now: number = +new Date();
  @ViewChild(ControlValidatorDirective) controlValidator;

  validate(): void {
    this.controlValidator.validate();
  }

  onStatusChange(event: ControlValidationEvent) {
    this.dirty = true;
    this.errorMessage = event.errorMessage;
    this.valid = !event.error;
  }

}
