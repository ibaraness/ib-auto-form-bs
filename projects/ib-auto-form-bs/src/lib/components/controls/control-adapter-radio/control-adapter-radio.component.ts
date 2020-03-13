import {Component, ViewEncapsulation} from '@angular/core';
import {BasicControlAdapterComponent} from "../basic-control-adapter.component";

@Component({
  selector: 'ib-control-adapter-radio',
  template: `
      <div *ngIf="form"
           [formGroup]="form"
           [ngClass]="control.className"
           class="form-group form-check">
          <ng-container *ngIf="control.items && control.items.length">
              <div class="form-check" *ngFor="let item of control.items;index as i">
                  <input class="form-check-input" type="radio" autocomplete="on"
                         [attr.aria-label]="control.title"
                         [name]="control.id" [formControlName]="control.id" [id]="now+control.id+i" [value]="item.key">
                  <label class="form-check-label" [for]="now+control.id+i">
                      {{item.title}}
                  </label>
              </div>
          </ng-container>
          <div class="invalid-feedback">{{errorMessage}}</div>
      </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ControlAdapterRadioComponent extends BasicControlAdapterComponent {

}
