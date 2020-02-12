import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the brand name \'Delivery Online\'');

  describe('when user is in phase 1', () => {
    it('should highlight phase 1 tab');
    it('should NOT highlight phase 2 tab');
    it('should NOT highlight phase 3 tab');
  });

  describe('when user is in phase 2', () => {
    it('should NOT highlight phase 1 tab');
    it('should highlight phase 2 tab');
    it('should highlight phase 3 tab');
  });

  describe('when user is in phase 3', () => {
    it('should NOT highlight phase 1 tab');
    it('should NOT highlight phase 2 tab');
    it('should highlight phase 3 tab');
  });
});
