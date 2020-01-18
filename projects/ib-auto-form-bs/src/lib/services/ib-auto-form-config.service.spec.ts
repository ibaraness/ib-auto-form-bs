import { TestBed } from '@angular/core/testing';

import { IBAutoFormConfigService } from './i-b-auto-form-config.service';

describe('DynamicFormsConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IBAutoFormConfigService = TestBed.get(IBAutoFormConfigService);
    expect(service).toBeTruthy();
  });
});
