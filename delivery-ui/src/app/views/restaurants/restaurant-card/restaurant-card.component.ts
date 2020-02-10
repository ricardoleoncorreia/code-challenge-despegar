import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'delivery-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent {

  @Input() restaurant: Delivery.Restaurant;

  navigateToPhase2(restaurantId: number): void {
    console.log('restaurant: ', restaurantId);
  }
}
