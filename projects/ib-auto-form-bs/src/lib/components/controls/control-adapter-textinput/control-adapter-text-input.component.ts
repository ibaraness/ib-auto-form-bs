import {Component, OnInit} from "@angular/core";
import {IBAutoFormControlAdapter} from "../../../models/ib-auto-form";
import * as _ from "lodash";
import {BasicControlAdapterComponent} from "../basic-control-adapter.component";

@Component({
  selector: "ib-control-adapter-text-input2",
  template: `
      <div *ngIf="form"
           class="form-group"
           [formGroup]="form">

          <label *ngIf="control.title" [for]="now+control.id" [ngClass]="{'required': required}"
          >{{control.title}}</label>
          <input
                  [type]="inputType"
                  class="form-control"
                  [id]="now+control.id"
                  [attr.placeholder]="control.placeholder"
                  [formControlName]="control.id"
                  [ngClass]="{
                    'is-invalid': !valid && dirty,
                    'is-valid': !valid && dirty
                  }"
                  [attr.autocomplete]="config.autocomplete || control.autocomplete ? 'on' : 'off'"
                  [name]="control.id"
          >
          <div class="invalid-feedback">{{errorMessage}}</div>
      </div>
  `
})
export class ControlAdapterTextInputComponent extends BasicControlAdapterComponent
  implements IBAutoFormControlAdapter, OnInit {
  inputType: string;

  ngOnInit(): void {
    super.ngOnInit();
    this.inputType = _.property("options.input_type")(this.control) || "text";
  }
}
