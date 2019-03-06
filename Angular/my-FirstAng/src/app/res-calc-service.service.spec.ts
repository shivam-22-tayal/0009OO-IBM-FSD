import { TestBed } from '@angular/core/testing';

import { ResCalcServiceService } from './res-calc-service.service';

describe('ResCalcServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResCalcServiceService = TestBed.get(ResCalcServiceService);
    expect(service).toBeTruthy();
  });
});
