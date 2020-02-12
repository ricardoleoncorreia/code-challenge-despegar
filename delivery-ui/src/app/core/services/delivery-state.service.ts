import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Restaurant } from 'src/app/delivery.namespace';

@Injectable({
  providedIn: 'root'
})
export class DeliveryStateService {

  currentPhase$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  selectedRestaurant$: BehaviorSubject<Restaurant> = new BehaviorSubject<Restaurant>(null);

  setPhaseTo(phase: number): void {
    this.currentPhase$.next(phase);
  }

}
