import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/delivery.namespace';

@Component({
  selector: 'delivery-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent {

  @Input() restaurant: Restaurant;

  navigateToPhase2(restaurantId: number): void {
    console.log('restaurant: ', restaurantId);
  }
}
