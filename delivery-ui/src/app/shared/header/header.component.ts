import { Component } from '@angular/core';
import { DeliveryStateService } from 'src/app/core/services/delivery-state.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'delivery-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  get currentPhase(): Subject<number> {
    return this.deliveryStateService.currentPhase$;
  };

  constructor(public deliveryStateService: DeliveryStateService) { }

}
