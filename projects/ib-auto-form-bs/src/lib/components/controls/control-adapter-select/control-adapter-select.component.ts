import {Component, ViewEncapsulation} from '@angular/core';
import {BasicControlAdapterComponent} from "../basic-control-adapter.component";

@Component({
  selector: 'ib-control-adapter-select',
  template: `
      <div *ngIf="form"
           [formGroup]="form"
           class="form-group">

          <label [for]="now+control.id" [ngClass]="{'required': required}">{{control.title}}</label>

          <select class="form-control"
                  [formControlName]="control.id"
                  [multiple]="control.multipleSelect"
                  [size]="control.multipleSelect && control.rows"
                  [ngClass]="{
                    'is-invalid': !valid && dirty,
                    'is-valid': valid
                  }"
                  [id]="now+control.id"
                  [attr.autocomplete]="config.autocomplete || control.autocomplete ? 'on' : 'off'"
                  [name]="control.id">
              <ng-container *ngIf="control.items && control.items.length"
              ></ng-container>
              <option *ngFor="let item of control.items" [value]="item.key">{{item.title}}</option>
          </select>

          <div class="invalid-feedback">{{errorMessage}}</div>
      </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ControlAdapterSelectComponent extends BasicControlAdapterComponent {

}
