import { TestBed } from '@angular/core/testing';

import { IbAutoFormConfigService } from './ib-auto-form-config.service';

describe('DynamicFormsConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IbAutoFormConfigService = TestBed.get(IbAutoFormConfigService);
    expect(service).toBeTruthy();
  });
});
