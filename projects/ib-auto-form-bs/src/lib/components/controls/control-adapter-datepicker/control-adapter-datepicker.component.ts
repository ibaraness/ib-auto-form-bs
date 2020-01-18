import {Component, OnInit} from "@angular/core";
import {IAngularMyDpOptions, IMyDateModel} from "angular-mydatepicker";
import {BasicControlAdapterComponent} from "../basic-control-adapter.component";

@Component({
  selector: 'ib-control-adapter-datepicker',
  template: `
      <div *ngIf="form"
           [formGroup]="form"
           class="form-group">

          <label [for]="now+control.id" [ngClass]="{'required': required}">{{control.title}}</label>
          <div class="input-group" [formControlName]="control.id" [(ibCustomValueAccessor)]="currentValue">
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
export class ControlAdapterDatepickerComponent extends BasicControlAdapterComponent implements OnInit {
  myOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy'
    // other options...
  };

  currentValue: string = '';

  handleDateChange(date: IMyDateModel): void {
    this.currentValue = date.singleDate.formatted;
  }

  ngOnInit(): void {
    super.ngOnInit();
    const options = this.control.options;

    // TODO: check if datePickerOptions is IAngularMyDpOptions type
    if (options && options.datePickerOptions) {
      this.myOptions = {...this.myOptions, ...options.datePickerOptions};
    }
  }

}
