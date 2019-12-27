import { TestBed } from "@angular/core/testing";

import { IbAutoFormValidationService } from "./ib-auto-form-validation.service";

describe("DynamicFormValidationService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [IbAutoFormValidationService]
  }));

  it("should be created", () => {
    const service: IbAutoFormValidationService = TestBed.get(IbAutoFormValidationService);
    expect(service).toBeTruthy();
  });
});
