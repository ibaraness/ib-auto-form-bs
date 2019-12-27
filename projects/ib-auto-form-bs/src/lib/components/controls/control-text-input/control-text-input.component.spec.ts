
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ControlTextInputComponent } from "./control-text-input.component";
import {DynamicControlOptions} from "../../../..";

describe("ControlTextInputComponent", () => {
  let component: ControlTextInputComponent;
  let fixture: ComponentFixture<ControlTextInputComponent>;
  let control: DynamicControlOptions;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ControlTextInputComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlTextInputComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    control = {
      title: "my-title",
      type: "textbox",
      id: "1"
    };
    component.control = control;
    component.onChange = value => {};
    fixture.detectChanges();

    spyOn(component, "onInput").and.callThrough();
    spyOn(component, "onChange");
    const input = element.querySelector("input");
    input.value = "Idan";
    input.dispatchEvent(new Event("input"));
    component.onInput("Idan");
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display control title in a label", () => {
    expect(element.querySelector("label").textContent).toEqual("my-title");
  });

  it("shouldn't create a label if there is no control title", () => {
    component.control = {
      type: "textbox",
      id: "1"
    };
    fixture.detectChanges();
    expect(element.querySelector("label")).toBeFalsy();
  });

  // it("should update onInput when input changes", () => {
  //   expect(component.onInput).toHaveBeenCalledWith("Idan");
  // });

  // it("should update onChange when input changes", () => {
  //   expect(component.onChange).toHaveBeenCalled();
  // });

  it("should update input when writeValue is called", () => {
    component.writeValue("newValue");
    fixture.detectChanges();
    expect(element.querySelector("input").value).toEqual("newValue");
  });

  it("should set input to disable when setDisabledState was called with true", () => {
    component.setDisabledState(true);
    fixture.detectChanges();
    expect(element.querySelector("input").hasAttribute("disabled")).toBeTruthy();
  });

  it("should cancel input disabled when setDisabledState was called with false", () => {
    component.setDisabledState(false);
    fixture.detectChanges();
    expect(element.querySelector("input").hasAttribute("disabled")).toBeFalsy();
  });
});
