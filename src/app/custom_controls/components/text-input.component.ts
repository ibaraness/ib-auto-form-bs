import {Component} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {DynamicControlOptions, IbAutoFormControlAdapter} from "../../../../projects/ib-auto-form-bs/src/lib/models/ib-auto-form";

@Component({
  selector: 'app-text-input',
  template: `
  <div *ngIf="form"
       [formGroup]="form" libIBControlValidator
       [form]="form" [control]="control">
      <input type="text"  [formControlName]="control.id" placeholder="test">
  </div>

  `
})
export class TextInputComponent implements IbAutoFormControlAdapter {

  control: DynamicControlOptions;
  form: FormGroup;

  validate(): void {
  }

}
