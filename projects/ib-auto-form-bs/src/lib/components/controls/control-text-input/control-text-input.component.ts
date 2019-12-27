import { ChangeDetectorRef, Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { DynamicControlOptions, IbAutoFormControl } from "../../../models/ib-auto-form";
import * as _ from "lodash";

@Component({
  selector: "lib-ib-control-text-input",
  templateUrl: "./control-text-input.component.html",
  styleUrls: ["./control-text-input.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ControlTextInputComponent,
      multi: true
    }
  ]
})
export class ControlTextInputComponent implements OnInit, IbAutoFormControl {
  @Output() blur: EventEmitter<boolean> = new EventEmitter();
  @Output() input: EventEmitter<string> = new EventEmitter();
  @Input() control: DynamicControlOptions;
  @Input() invalid: boolean;
  @Input() valid: boolean;
  @Input() errorMessage: string;
  @Input() required: boolean;
  public inputValue: string;
  public disabled: boolean;
  public inputType: string;
  now: number = +new Date();

  onChange: (value: string) => void;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.inputType = _.property("options.input_type")(this.control) || "text";
  }

  onInput(value): void {
    if (this.invalid && this.onChange) {
      this.onChange(value);
    }
    this.input.emit(value);
  }

  onBlur(value: string): void {
    if (this.onChange) {
      this.onChange(value);
    }
    this.blur.emit(true);
  }

  writeValue(value: string): void {
    this.inputValue = value;
    this.cdr.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // Not implemented
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.detectChanges();
  }
}
