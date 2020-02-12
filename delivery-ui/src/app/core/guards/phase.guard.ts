import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DeliveryStateService } from '../services/delivery-state.service';
import { map } from 'rxjs/operators';
import { NavigationService } from '../services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class PhaseGuard implements CanActivate {

  constructor(
    private navigationService: NavigationService,
    private deliveryStateService: DeliveryStateService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.deliveryStateService.selectedRestaurant$.pipe(
        map(restaurant => {
          const isRestaurantSelected = !!restaurant;
          if (!isRestaurantSelected) { this.navigationService.navigateTo('restaurants') }
          return isRestaurantSelected;
        }));
  }
}
