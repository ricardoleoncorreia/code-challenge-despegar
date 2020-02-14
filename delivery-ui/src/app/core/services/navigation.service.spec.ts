import { TestBed } from '@angular/core/testing';

import { NavigationService } from './navigation.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('NavigationService', () => {
  let service: NavigationService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(NavigationService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when servicenavigateTo method is called with route \'myRoute\'', () => {
    it('should redirect to \'/myRoute\'', () => {
      spyOn(router, 'navigate');

      service.navigateTo('myRoute');

      expect(router.navigate).toHaveBeenCalledWith(['/myRoute']);
    });
  });
});
