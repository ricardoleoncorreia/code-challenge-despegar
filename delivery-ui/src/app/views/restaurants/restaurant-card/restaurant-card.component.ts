import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from 'src/app/delivery.namespace';

@Component({
  selector: 'delivery-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent {

  @Input() restaurant: Restaurant;
  @Output() navigate: EventEmitter<void> = new EventEmitter();

  navigateToPhase2(): void {
    this.navigate.emit();
  }
}
