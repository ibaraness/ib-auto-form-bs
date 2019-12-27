import { EventEmitter, OnInit } from "@angular/core";
import { OnDestroy, Input, Output } from "@angular/core";
import { Directive } from "@angular/core";
import { FormGroup, AbstractControl } from "@angular/forms";
import { DynamicControlOptions, ControlValidationEvent } from "../../models/ib-auto-form";
import { Subscription } from "rxjs";
import { IbAutoFormValidationService } from "../../services/ib-auto-form-validation.service";

@Directive({
  selector: "[libIBControlValidator]"
})
export class ControlValidatorDirective implements OnInit, OnDestroy {
  @Input() form: FormGroup;
  @Input() control: DynamicControlOptions;
  @Output() statusChange: EventEmitter<ControlValidationEvent> = new EventEmitter();
  private subscription: Subscription;

  constructor(private validationService: IbAutoFormValidationService) { }

  ngOnInit() {
    if (!this.form) {
      throw new Error("form<FormGroup> property must be set!");
    }
    if (!this.control) {
      throw new Error("control<DynamicControlOptions> property must be set!");
    }
    this.subscription = this.form.controls[this.control.id].valueChanges.subscribe(value => {
      this.validate();
    });
  }

  validate(): void {
    const formControl: AbstractControl = this.form.controls[this.control.id];
    if (formControl.dirty) {
      this.statusChange.emit({
        error: !formControl.valid,
        errorMessage: this.validationService.getErrorMessages(formControl, this.control.validations)
      });
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
