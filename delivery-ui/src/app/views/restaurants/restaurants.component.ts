import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { Restaurant } from 'src/app/delivery.namespace';
import { map } from 'rxjs/operators';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { DeliveryStateService } from 'src/app/core/services/delivery-state.service';

interface FilterTerms {
  name: string;
  description: string;
}

@Component({
  selector: 'delivery-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  restaurants$: Observable<Restaurant[]>;
  filterTerms: FilterTerms = {
    name: '',
    description: ''
  };

  constructor(
    private apiService: ApiService,
    private navigationService: NavigationService,
    private deliveryStateService: DeliveryStateService) { }

  ngOnInit(): void {
    this.setPhaseTo(1);
    this.getRestaurants();
  }

  private setPhaseTo(phase: number): void {
    this.deliveryStateService.currentPhase$.next(phase);
  }

  private getRestaurants(): void {
    this.restaurants$ = this.apiService.getRestaurants();
  }

  filterList(): void {
    const { name, description } = this.filterTerms;

    const byNameAndDescription = (restaurant: Restaurant) => {
      const includesName = restaurant.name.includes(name);
      const includesDescription = restaurant.description.includes(description);
      return includesName && includesDescription;
    };

    const filterContent = (restaurants: Restaurant[]) => restaurants.filter(byNameAndDescription);

    this.restaurants$ = this.apiService.getRestaurants().pipe(map(filterContent));
  }

  navigateToPhase2(): void {
    this.setPhaseTo(2);
    this.navigationService.navigateTo('products');
  }

}
