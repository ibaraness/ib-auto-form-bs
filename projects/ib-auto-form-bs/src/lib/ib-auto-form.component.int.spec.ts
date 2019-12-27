import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IbAutoFormComponent } from "./ib-auto-form.component";
import { DynamicControlDirective } from "./directives/dynamic-control/dynamic-control.directive";
import {
  ControlAdapterTextInputComponent
} from "./components/controls/control-text-input/control-adapter-text-input/control-adapter-text-input.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { IbAutoFormControlGroup } from "./models/ib-auto-form";
import { IbAutoFormValidationService } from "./services/ib-auto-form-validation.service";
import {IbAutoFormBsModule} from "./ib-auto-form-bs.module";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, IbAutoFormBsModule],
  declarations: [],
  entryComponents: [ControlAdapterTextInputComponent],
  exports: [
    ControlAdapterTextInputComponent,
    DynamicControlDirective,
    IbAutoFormComponent
  ],
  providers: [IbAutoFormValidationService]
})
export class TestModule { }

describe("IbAutoFormComponent Int", () => {
  let component: IbAutoFormComponent;
  let fixture: ComponentFixture<IbAutoFormComponent>;
  let controlGroups: IbAutoFormControlGroup[];
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbAutoFormComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    controlGroups = [{
      controls: [{
        id: "first_name",
        type: "textbox",
        title: "First Name"
      }]
    }];
    component.controlGroups = controlGroups;
    fixture.detectChanges();
  });

  it("should create dynamic element ControlAdapterTextInputComponent", () => {
    expect(element.querySelector("app-control-adapter-text-input")).toBeTruthy();
  });
});
