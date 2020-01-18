import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormGroup } from "@angular/forms";
import { IBDynamicControlOptions } from "../../models/ib-auto-form";
import { IbAutoFormValidationService } from "../../services/ib-auto-form-validation.service";

@Component({
  selector: "ib-container",
  template:
    "<div id='container' [form]='form' [control]='control' ibDynamicControl></div>"
})
export class ConatinerComponent {
  public form: FormGroup;
  public control: IBDynamicControlOptions;
  createControl() {}
}

describe("DynamicControlDirective", () => {
  let fixture: ComponentFixture<ConatinerComponent>;
  let container: ConatinerComponent;
  let element: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ConatinerComponent],
      providers: [IbAutoFormValidationService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConatinerComponent);
    container = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(container).toBeTruthy();
  });
});
