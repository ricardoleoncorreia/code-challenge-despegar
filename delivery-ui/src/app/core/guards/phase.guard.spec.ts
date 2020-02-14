import { TestBed } from '@angular/core/testing';

import { PhaseGuard } from './phase.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { DeliveryStateService } from '../services/delivery-state.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restaurant } from 'src/app/delivery.namespace';
import { NavigationService } from '../services/navigation.service';

describe('PhaseGuard', () => {
  let guard: PhaseGuard;

  let deliveryStateServiceSpy: {
    setPhaseTo: jasmine.Spy;
    selectedRestaurant$: BehaviorSubject<Restaurant>;
  };
  let navigationServiceSpy: {
    navigateTo: jasmine.Spy;
  };

  beforeEach(() => {
    navigationServiceSpy = jasmine.createSpyObj('NavigationService', ['navigateTo']);
    deliveryStateServiceSpy = jasmine.createSpyObj('DeliveryStateService', ['setPhaseTo']);
    deliveryStateServiceSpy.selectedRestaurant$ = new BehaviorSubject<Restaurant>(null);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: DeliveryStateService, useValue: deliveryStateServiceSpy },
        { provide: NavigationService, useValue: navigationServiceSpy },
      ]
    });
    guard = TestBed.inject(PhaseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('when there is a restaurant selected', () => {
    it('should activate view', () => {
      const newRestaurant: Restaurant = {
        id: 1,
        name: 'Restaurant 1',
        description: 'Description 1'
      };
      deliveryStateServiceSpy.selectedRestaurant$.next(newRestaurant);

      const isActivated$ = <Observable<boolean>> guard.canActivate(null, null);
      
      isActivated$.subscribe(isActivated => expect(isActivated).toBeTruthy());
    });
  });

  describe('when there is NO restaurant selected', () => {
    it('should NOT activate view', () => {
      const isActivated$ = <Observable<boolean>> guard.canActivate(null, null);
      
      isActivated$.subscribe(isActivated => expect(isActivated).toBeFalsy());
    });

    it('should redirect to restaurants view', () => {
      const isActivated$ = <Observable<boolean>> guard.canActivate(null, null);
      
      isActivated$.subscribe(_ => expect(navigationServiceSpy.navigateTo).toHaveBeenCalledWith('restaurants'));
    });
  });
});
