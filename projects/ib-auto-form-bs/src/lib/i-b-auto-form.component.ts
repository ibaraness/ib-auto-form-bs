import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {IBAutoFormControlGroup, IBFormGeneralConfig} from "./models/ib-auto-form";
import {getContrtolsFromGroups} from "./utils/utils";
import {IbAutoFormValidationService} from "./services/ib-auto-form-validation.service";
import {BehaviorSubject} from "rxjs";
import {IBAutoFormConfigService} from "./services/i-b-auto-form-config.service";

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
    './i-b-auto-form.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class IBAutoFormComponent implements OnInit {
  /**
   * a list of DynamicFormsControlGroup objects, which contains all the controls and groups metadata
   */
  @Input() controlGroups: IBAutoFormControlGroup[];

  /**
   * A flag that check weather the form should create and display the control groups.
   * By default it set to true. If set to false, the control groups will be striped out and only the
   * control will be display without any separation.
   */
  @Input() useGroups: boolean = true;

  /**
   * General configuration of the form
   */
  @Input() config: IBFormGeneralConfig;

  /**
   * Form ready event emitter
   */
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter();

  /**
   * Notify the controls of a submit, which trigger validation check
   */
  public submit$: BehaviorSubject<boolean> = new BehaviorSubject(null);

  /**
   * The form's FormGroup instance
   */
  public form: FormGroup;

  constructor(private validationService: IbAutoFormValidationService, private globalConfig: IBAutoFormConfigService) {
  }

  ngOnInit() {
    this.createForm();
    this.setConfiguration();
  }

  /**
   * Get form data from all the fields
   */
  getFormData(): any {
    return this.form && this.form.value || null;
  }

  /**
   * Trigger form validation check and return true if all valid
   * @return true if the form is valid, false if invalid
   */
  submit(): boolean {
    this.markAllAsDirty();
    this.submit$.next(true);
    return this.form && this.form.valid;
  }

  /**
   * Set any relevant specific or global configurations set by the user
   * currently only useGroups property can be set from configuration
   */
  private setConfiguration() {
    const useGroups = this.config && this.config.useGroups
      || this.globalConfig && this.globalConfig.useGroups
      || undefined;
    if (useGroups !== undefined) {
      this.useGroups = useGroups;
    }
  }

  private createForm(): void {
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

  private markAllAsDirty(): void {
    Object.values(this.form.controls).forEach(control => {
      control.markAsDirty();
    });
  }
}
