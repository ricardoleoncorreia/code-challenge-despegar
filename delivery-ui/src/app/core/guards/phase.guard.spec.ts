import { TestBed } from '@angular/core/testing';

import { PhaseGuard } from './phase.guard';

describe('PhaseGuard', () => {
  let guard: PhaseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PhaseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
