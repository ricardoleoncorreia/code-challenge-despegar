import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCardComponent } from './restaurant-card.component';
import { By } from '@angular/platform-browser';
import { Restaurant } from 'src/app/delivery.namespace';
import { DebugElement } from '@angular/core';

describe('RestaurantCardComponent', () => {
  let component: RestaurantCardComponent;
  let fixture: ComponentFixture<RestaurantCardComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when a restaurant is provided', () => {
    beforeEach(() => {
      const mockedRestaurant: Restaurant = {
        id: 1,
        name: 'Mocked Restaurant',
        description: 'Mocked Description'
      };

      component.restaurant = mockedRestaurant;

      fixture.detectChanges();
    });

    it('should show the restaurant name as the title', () => {
      const title = debugElement.query(By.css('header'));

      expect(title.nativeElement.innerText).toBe('Mocked Restaurant');
    });

    it('should show the restaurant description as the description', () => {
      const title = debugElement.query(By.css('p'));

      expect(title.nativeElement.innerText).toBe('Mocked Description');
    });

    describe('and user clicks on the link to go to phase 2', () => {
      it('should notify the event to the parent view', () => {
        spyOn(component.navigate, 'emit');
        const anchor = debugElement.query(By.css('a'));

        anchor.nativeElement.click();

        expect(component.navigate.emit).toHaveBeenCalled();
      });
    });
  });
});
