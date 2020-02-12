import { TestBed } from '@angular/core/testing';

import { PhaseGuard } from './phase.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { DeliveryStateService } from '../services/delivery-state.service';

describe('PhaseGuard', () => {
  let guard: PhaseGuard;

  let deliveryStateServiceSpy: {
    setPhaseTo: jasmine.Spy;
  };

  beforeEach(() => {
    deliveryStateServiceSpy = jasmine.createSpyObj('DeliveryStateService', ['setPhaseTo']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: DeliveryStateService, useValue: deliveryStateServiceSpy },
      ]
    });
    guard = TestBed.inject(PhaseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('when there is a restaurant selected', () => {
    it('should activate view');
  });

  describe('when there is NO restaurant selected', () => {
    it('should NOT activate view');
    it('should redirect to restaurants view');
  });
});
