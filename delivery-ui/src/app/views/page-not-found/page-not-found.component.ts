import { Component } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'delivery-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  constructor(private navigationService: NavigationService) { }

  goToRestaurantsListView(): void {
    this.navigationService.navigateTo('restaurants');
  }

}
