import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {IbAutoFormControlGroup, FormValues} from "./models/ib-auto-form";
import {getContrtolsFromGroups} from "./utils/utils";
import {IbAutoFormValidationService} from "./services/ib-auto-form-validation.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: "lib-ib-dynamic-forms",
  template: `
      <form *ngIf="form && controlGroups" [formGroup]="form">
          <ng-container *ngFor="let group of controlGroups">
              <ng-container *ngFor="let control of group.controls" libIBDynamicControl [submit$]="submit$" [control]="control"
                            [form]="form"></ng-container>
          </ng-container>
          <pre>
    {{ form.value | json }}
  </pre>
      </form>
  `
})
export class IbAutoFormComponent implements OnInit {
  /**
   * a list of DynamicFormsControlGroup objects, which contains all the fields and groups metadata
   */
  @Input() controlGroups: IbAutoFormControlGroup[];
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter();
  public submit$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  public form: FormGroup;

  constructor(private validationService: IbAutoFormValidationService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    const controlsObj = {};
    const controls = this.controlGroups && getContrtolsFromGroups(this.controlGroups) || [];
    controls.forEach(control => {
      const validators = !control.validations ? [] :
        control.validations.map(obj => this.validationService.getValidator(obj.validation))
          .filter(v => v);
      controlsObj[control.id] = new FormControl(control.defaultValue, validators);
    });
    this.form = new FormGroup(controlsObj);
    this.formReady.emit(this.form);
  }

  getFormData(): FormValues {
    this.markAllAsDirty();
    this.submit$.next(true);
    if (this.form && this.form.valid) {
      return this.form.value;
    }
    return null;
  }

  private markAllAsDirty(): void {
    Object.values(this.form.controls).forEach(control => {
      control.markAsDirty();
    });
  }
}
