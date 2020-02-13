import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { DeliveryStateService } from 'src/app/core/services/delivery-state.service';

@Component({
  selector: 'delivery-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private deliveryStateService: DeliveryStateService,
    private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.deliveryStateService.currentPhase$.next(0);
  }

  goToRestaurantsListView(): void {
    this.navigationService.navigateTo('restaurants');
  }

}
