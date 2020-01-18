import {Component} from "@angular/core";
import {IBAutoFormGroup} from "ib-auto-form-bs";


@Component({
  selector: 'app-custom-group',
  template: `
      <div *ngIf="group" class="border rounded p-4 mt-2 mb-2 bg-info text-white shadow-sm">
          <h5 *ngIf="group.title" class="pl-2 h5">Custom group: {{group.title}}</h5>
          <ng-content></ng-content>
      </div>
  `
})
export class CustomGroupComponent extends IBAutoFormGroup {

}
