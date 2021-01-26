import { TestBed } from '@angular/core/testing';

import { HardcodedService } from './hardcoded.service';

describe('HardcodedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodedService = TestBed.get(HardcodedService);
    expect(service).toBeTruthy();
  });
});
