import { TestBed } from '@angular/core/testing';

import { FixedTermService } from './fixed-term.service';

describe('FixedTermService', () => {
  let service: FixedTermService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixedTermService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
