import { TestBed } from '@angular/core/testing';

import { DeliveryStateService } from './delivery-state.service';

describe('DeliveryStateService', () => {
  let service: DeliveryStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when phase is set to 3', () => {
    it('should update current stored phase value to 3', () => {
      service.setPhaseTo(3);

      service.currentPhase$.subscribe(phase => expect(phase).toBe(3));
    });
  });
});
