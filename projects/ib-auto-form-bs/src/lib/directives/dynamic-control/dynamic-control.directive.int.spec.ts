import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormControl, FormGroup } from "@angular/forms";
import { DynamicControlOptions } from "../../models/ib-auto-form";
import { ConatinerComponent } from "./dynamic-control.directive.spec";
import { TestModule } from "./test.module";

describe("DynamicControlDirective Int", () => {
  let fixture: ComponentFixture<ConatinerComponent>;
  let container: ConatinerComponent;
  let element: HTMLElement;
  let formGroup: FormGroup;
  let control: DynamicControlOptions;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [ConatinerComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConatinerComponent);
    container = fixture.componentInstance;
    element = fixture.nativeElement;
    control = {
      id: "control_id",
      type: "textbox"
    };
    formGroup = new FormGroup({
      [control.id]: new FormControl()
    });
  });

  it("should create dynamic element with valid control and form", () => {
    container.control = control;
    container.form = formGroup;
    fixture.detectChanges();
    expect(
      element.querySelector("app-control-adapter-text-input")
    ).toBeTruthy();
  });

  it("should fail with an error when passed a control without form", () => {
    const test = () => {
      container.control = control;
      fixture.detectChanges();
    };
    expect(test).toThrowError("form<FormGroup> property must be set!");
  });

  it("shouldn't create dynamic element when control and form are missing!", () => {
    fixture.detectChanges();
    expect(element.querySelector("app-control-adapter-text-input")).toBeFalsy();
  });
});
