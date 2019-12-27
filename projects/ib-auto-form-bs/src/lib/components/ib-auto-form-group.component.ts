import {Component} from "@angular/core";
import {IbAutoFormGroup} from "../models/ib-auto-form";

@Component({
  selector: 'lib-auto-form-group',
  template: `
      <fieldset *ngIf="group" class="border rounded p-4 mt-2 mb-2 bg-light shadow-sm">
          <legend *ngIf="group.title" class="pl-2 h5">{{group.title}}</legend>
          <ng-content></ng-content>
      </fieldset>
  `
})
export class IbAutoFormGroupComponent extends IbAutoFormGroup {

}
