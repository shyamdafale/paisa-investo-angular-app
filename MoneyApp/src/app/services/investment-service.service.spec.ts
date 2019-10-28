import { TestBed } from '@angular/core/testing';

import { InvestmentServiceService } from './investment-service.service';

describe('InvestmentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvestmentServiceService = TestBed.get(InvestmentServiceService);
    expect(service).toBeTruthy();
  });
});
