import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ApiService } from 'src/app/core/services/api.service';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { DeliveryStateService } from 'src/app/core/services/delivery-state.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';
import { Restaurant, Product } from 'src/app/delivery.namespace';
import { FormsModule } from '@angular/forms';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  let apiServiceSpy: {
    getRestaurants: jasmine.Spy;
  };
  let navigationServiceSpy: {
    navigateTo: jasmine.Spy;
  };
  let deliveryStateServiceSpy: {
    setPhaseTo: jasmine.Spy;
    selectedRestaurant$: BehaviorSubject<Restaurant>;
    currentPhase$: BehaviorSubject<number>;
  };
  let bsModalServiceSpy: {
    show: jasmine.Spy;
  };

  beforeEach(async(() => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['getRestaurants']);
    navigationServiceSpy = jasmine.createSpyObj('NavigationService', ['navigateTo']);
    bsModalServiceSpy = jasmine.createSpyObj('BsModalService', ['show']);
    deliveryStateServiceSpy = jasmine.createSpyObj('DeliveryStateService', ['setPhaseTo']);
    deliveryStateServiceSpy.selectedRestaurant$ = new BehaviorSubject<Restaurant>({id: 0, name: '', description: ''});
    deliveryStateServiceSpy.currentPhase$ = new BehaviorSubject<number>(1);
  
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports: [FormsModule],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: NavigationService, useValue: navigationServiceSpy },
        { provide: DeliveryStateService, useValue: deliveryStateServiceSpy },
        { provide: BsModalService, useValue: bsModalServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
