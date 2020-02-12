import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsComponent } from './restaurants.component';
import { ApiService } from 'src/app/core/services/api.service';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { DeliveryStateService } from 'src/app/core/services/delivery-state.service';
import { FormsModule } from '@angular/forms';

describe('RestaurantsComponent', () => {
  let component: RestaurantsComponent;
  let fixture: ComponentFixture<RestaurantsComponent>;

  let apiServiceSpy: {
    getRestaurants: jasmine.Spy;
  };
  let navigationServiceSpy: {
    navigateTo: jasmine.Spy;
  };
  let deliveryStateServiceSpy: {
    setPhaseTo: jasmine.Spy;
  };

  beforeEach(async(() => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['getRestaurants']);
    navigationServiceSpy = jasmine.createSpyObj('NavigationService', ['navigateTo']);
    deliveryStateServiceSpy = jasmine.createSpyObj('DeliveryStateService', ['setPhaseTo']);
    
    TestBed.configureTestingModule({
      declarations: [ RestaurantsComponent ],
      imports: [FormsModule],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: NavigationService, useValue: navigationServiceSpy },
        { provide: DeliveryStateService, useValue: deliveryStateServiceSpy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
