import { TestBed } from '@angular/core/testing';

import { AggrementService } from './aggrement.service';

describe('AggrementService', () => {
  let service: AggrementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AggrementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
