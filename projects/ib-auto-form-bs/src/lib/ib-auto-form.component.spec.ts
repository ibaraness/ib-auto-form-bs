import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IbAutoFormComponent } from "./ib-auto-form.component";
import { IbAutoFormValidationService } from "./services/ib-auto-form-validation.service";

describe("DynamicFormsComponent", () => {
  let component: IbAutoFormComponent;
  let fixture: ComponentFixture<IbAutoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IbAutoFormComponent],
      providers: [IbAutoFormValidationService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbAutoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create dynamic form", () => {
    expect(component.form).toBeTruthy();
  });

  it("should emit formReady when form is ready", () => {
    spyOn(component.formReady, "emit");
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.formReady.emit).toHaveBeenCalled();
  });
});
