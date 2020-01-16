import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {FormValues, IbAutoFormControlGroup, IbFormGeneralConfig} from "./models/ib-auto-form";
import {getContrtolsFromGroups} from "./utils/utils";
import {IbAutoFormValidationService} from "./services/ib-auto-form-validation.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: "ib-dynamic-forms",
  template: `
      <form *ngIf="form && controlGroups" [formGroup]="form">
          <ng-container *ngFor="let group of controlGroups">
              <ng-container *ngTemplateOutlet="useGroups ? groupTemp: controlsTemp; context:{group: group}"></ng-container>
          </ng-container>
      </form>

      <ng-template #controlsTemp let-group="group">
          <ng-container *ngFor="let control of group.controls"
                        ibDynamicControl
                        [submit$]="submit$"
                        [control]="control"
                        [config]="config"
                        [form]="form">
          </ng-container>
      </ng-template>

      <ng-template #groupTemp let-group="group">
          <ib-auto-form-group-factory [group]="group" [config]="config">
              <ng-container *ngTemplateOutlet="controlsTemp; context:{group: group}"></ng-container>
          </ib-auto-form-group-factory>
      </ng-template>
  `,
  styleUrls: [
    './ib-auto-form.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class IbAutoFormComponent implements OnInit {
  /**
   * a list of DynamicFormsControlGroup objects, which contains all the fields and groups metadata
   */
  @Input() controlGroups: IbAutoFormControlGroup[];
  @Input() useGroups: boolean = true;
  @Input() config: IbFormGeneralConfig;
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
      if (control.disabled) {
        (controlsObj[control.id] as FormControl).disable();
      }
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
