import {Component, ViewEncapsulation} from "@angular/core";
import {BasicControlAdapterComponent} from "../basic-control-adapter.component";

@Component({
  selector: 'ib-control-adapter-file',
  template: `
      <div *ngIf="form"
           [formGroup]="form"
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
export class ControlAdapterFileComponent extends BasicControlAdapterComponent {

}
