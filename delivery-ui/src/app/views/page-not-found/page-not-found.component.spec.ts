import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { DeliveryStateService } from 'src/app/core/services/delivery-state.service';
import { BehaviorSubject } from 'rxjs';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  let navigationServiceSpy: {
    navigateTo: jasmine.Spy;
  };
  let deliveryStateServiceSpy: {
    currentPhase$: BehaviorSubject<number>;
  };

  beforeEach(async(() => {
    navigationServiceSpy = jasmine.createSpyObj('NavigationService', ['navigateTo']);
    deliveryStateServiceSpy = jasmine.createSpyObj('DeliveryStateService', ['toString']);
    deliveryStateServiceSpy.currentPhase$ = new BehaviorSubject<number>(1);

    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ],
      imports: [RouterTestingModule],
      providers: [
        { provide: NavigationService, useValue: navigationServiceSpy },
        { provide: DeliveryStateService, useValue: deliveryStateServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the message \'This page was not found\'', () => {
    const titleElement: DebugElement = fixture.debugElement.query(By.css('h2'));

    expect(titleElement.nativeElement.innerText).toBe('This page was not found');
  });

  it('should unselect all phase tabs', () => {
    component.ngOnInit();

    deliveryStateServiceSpy.currentPhase$.subscribe(phase => expect(phase).toBe(0));
  });

  describe('when the \'back\' button is clicked', () => {
    it('should redirect to restaurants view', () => {
      const button: DebugElement = fixture.debugElement.query(By.css('button'));

      button.nativeElement.click();

      expect(navigationServiceSpy.navigateTo).toHaveBeenCalledWith('restaurants');
    });
  });
});
