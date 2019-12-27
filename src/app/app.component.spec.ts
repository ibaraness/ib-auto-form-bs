import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { DynamicFormsModule } from "./dynamic-forms/dynamic-forms.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DynamicFormsModule],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
