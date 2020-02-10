import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { Restaurant } from 'src/app/delivery.namespace';
import { map } from 'rxjs/operators';

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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
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

}
