import {Component, ViewChild} from '@angular/core';
import {ControlValidationEvent, DynamicControlOptions, IbAutoFormControlAdapter} from "../../../models/ib-auto-form";
import {FormGroup} from "@angular/forms";
import {ControlValidatorDirective} from "../../../directives/control-validator/control-validator.directive";

@Component({
  selector: 'lib-control-adapter-select',
  template: `
      <div *ngIf="form"
           [formGroup]="form" libIBControlValidator
           [form]="form" [control]="control"
           (statusChange)="onStatusChange($event)"
           class="form-group">

          <label [for]="now+control.id">{{control.title}}</label>

          <select class="form-control" [formControlName]="control.id" [id]="now+control.id">
              <ng-container *ngIf="control.selectOptions && control.selectOptions.length"
              ></ng-container>
              <option *ngFor="let item of control.selectOptions" [value]="item.key">{{item.title}}</option>
          </select>

          <div class="invalid-feedback">{{errorMessage}}</div>
      </div>
  `
})
export class ControlAdapterSelectComponent implements IbAutoFormControlAdapter {

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
