import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IBAutoFormComponent } from "./i-b-auto-form.component";
import { IbAutoFormValidationService } from "./services/ib-auto-form-validation.service";

describe("DynamicFormsComponent", () => {
  let component: IBAutoFormComponent;
  let fixture: ComponentFixture<IBAutoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IBAutoFormComponent],
      providers: [IbAutoFormValidationService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IBAutoFormComponent);
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
