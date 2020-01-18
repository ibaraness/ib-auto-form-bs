import {Directive, EventEmitter, forwardRef, Input, OnDestroy, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


@Directive({
  selector: '[ibCustomValueAccessor]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IBCustomValueAccessorDirective),
      multi: true
    }
  ]
})
export class IBCustomValueAccessorDirective implements ControlValueAccessor, OnDestroy {

  /**
   * IF the control was set to disable from inside the form, notify the child component
   */
  @Output() disabled: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Create a banana in a box mechanism for the control value
   */
  @Output() ibCustomValueAccessorChange: EventEmitter<any> = new EventEmitter<any>();
  private currentValue: any;

  /**
   * Each setting for the input triggers the onChange ControlValueAccessor function
   * @param value
   */
  @Input() set ibCustomValueAccessor(value: any) {
    setTimeout(() => {
      this.onChange(value);
    });
  }


  markAsTouched() {
    setTimeout(() => {
      this.onTouch();
    });
  }

  onChange: (value) => void = function () {
  };

  onTouch: () => void = function () {
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.next(isDisabled);
  }

  writeValue(obj: any): void {
    this.currentValue = obj;
    setTimeout(() => {
      this.ibCustomValueAccessorChange.emit(obj);
    });
  }

  ngOnDestroy(): void {
    this.disabled.unsubscribe();
  }

}
