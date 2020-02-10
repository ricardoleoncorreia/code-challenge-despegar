import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryStateService {

  currentPhase$: Subject<number> = new Subject<number>();
}
