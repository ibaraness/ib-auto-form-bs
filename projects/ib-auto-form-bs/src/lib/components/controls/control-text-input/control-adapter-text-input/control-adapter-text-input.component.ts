import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {ControlValidationEvent, DynamicControlOptions, IbAutoFormControlAdapter} from "../../../../models/ib-auto-form";
import {ControlValidatorDirective} from "../../../../directives/control-validator/control-validator.directive";


@Component({
  selector: "lib-ib--control-adapter-text-input",
  templateUrl: "./control-adapter-text-input.component.html",
  styleUrls: ["./control-adapter-text-input.component.css"]
})
export class ControlAdapterTextInputComponent
  implements IbAutoFormControlAdapter, OnInit {
  @ViewChild(ControlValidatorDirective) controlValidator;
  public form: FormGroup;
  public control: DynamicControlOptions;
  public invalid: boolean;
  public errorMessage: string;
  public required: boolean;
  public dirty: boolean;

  ngOnInit(): void {
    if (!this.form) {
      throw new Error("form<FormGroup> property must be set!");
    }
    this.required = this.control.validations && !!this.control.validations.find(valObj => valObj.validation === "required");
  }

  validate() {
    this.controlValidator.validate();
  }

  onStatusChange(event: ControlValidationEvent) {
    this.dirty = true;
    this.errorMessage = event.errorMessage;
    this.invalid = event.error;
  }
}
