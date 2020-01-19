import {Component, ViewEncapsulation} from '@angular/core';
import {BasicControlAdapterComponent} from "../basic-control-adapter.component";

@Component({
  selector: 'ib-control-adapter-checkbox',
  template: `
      <div *ngIf="form"
           [formGroup]="form"
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
                 [attr.aria-label]="control.title"
                 [id]="now+control.id">
          <label class="form-check-label" [for]="now+control.id" [ngClass]="{'required': required}">{{control.title}}</label>
          <div class="invalid-feedback">{{errorMessage}}</div>
      </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ControlAdapterCheckboxComponent extends BasicControlAdapterComponent {

}
