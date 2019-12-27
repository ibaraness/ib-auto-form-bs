import { ControlValidatorDirective } from "./control-validator.directive";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { IbAutoFormValidationService } from "../../services/ib-auto-form-validation.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DynamicControlOptions } from "../../models/ib-auto-form";

@Component({
  selector: "app-container",
  template:
    "<div id='container' [form]='form' [control]='control' libIBControlValidator></div>"
})
export class TestConatinerComponent {
  public form: FormGroup;
  public control: DynamicControlOptions;
  onStatusChange() {
    // TODO: Add action
  }
}

describe("ControlValidatorDirective", () => {

  let fixture: ComponentFixture<TestConatinerComponent>;
  let container: TestConatinerComponent;
  let element: HTMLElement;
  let formGroup: FormGroup;
  let control: DynamicControlOptions;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TestConatinerComponent, ControlValidatorDirective],
      providers: [IbAutoFormValidationService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestConatinerComponent);
    container = fixture.componentInstance;
    element = fixture.nativeElement;
    control = {
      id: "control_id",
      type: "textbox",
      validations: [
        {
          validation: "required",
          errorMessage: "error message"
        }
      ]
    };

    formGroup = new FormGroup({
      [control.id]: new FormControl(undefined, [Validators.required])
    });
    container.form = formGroup;
    container.control = control;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(container).toBeTruthy();
  });

});
