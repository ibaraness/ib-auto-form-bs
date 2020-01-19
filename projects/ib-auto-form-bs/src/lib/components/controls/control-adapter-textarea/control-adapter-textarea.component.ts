import {Component, ViewEncapsulation} from "@angular/core";
import {BasicControlAdapterComponent} from "../basic-control-adapter.component";

@Component({
  selector: 'ib-control-adapter-textarea',
  template: `
      <div *ngIf="form"
           [formGroup]="form"
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
                    [rows]="control.rows"
                    (blur)="validate()"
                    [attr.rows]="control.rows"
                    [attr.autocomplete]="config.autocomplete || control.autocomplete ? 'on' : 'off'"
                    [id]="now+control.id">
          </textarea>
          <div class="invalid-feedback">{{errorMessage}}</div>
      </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ControlAdapterTextareaComponent extends BasicControlAdapterComponent {

}
