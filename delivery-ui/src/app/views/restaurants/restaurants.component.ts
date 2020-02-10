import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'delivery-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  restaurants$: Observable<Delivery.Restaurant[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.restaurants$ = this.apiService.getRestaurants();
  }

}
