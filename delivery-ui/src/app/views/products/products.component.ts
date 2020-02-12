import { Component, OnInit } from '@angular/core';
import { DeliveryStateService } from 'src/app/core/services/delivery-state.service';
import { Observable } from 'rxjs';
import { Product, Section } from 'src/app/delivery.namespace';
import { ApiService } from 'src/app/core/services/api.service';
import { concatMap, map } from 'rxjs/operators';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { faPlusCircle, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'delivery-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsBySection$: Observable<Product[]>;
  sections$: Observable<Section[]>;
  wishList: Product[] = [];
  activeSelection: number;

  faPlusCircle = faPlusCircle;
  faSearch = faSearch;
  faTrash = faTrash;

  get purchaseTotal(): number {
    if (!this.wishList.length) return 0;
    
    const subTotals = this.wishList.map(product => product.price * +product.quantity);
    const sum = (subTotal: number, currentValue: number) => subTotal + currentValue;
    return subTotals.reduce(sum);
  }

  constructor(
    private apiService: ApiService,
    private navigationService: NavigationService,
    private deliveryStateService: DeliveryStateService) { }

  ngOnInit(): void {
    this.getSectionProductsList();
  }

  private getRestaurantProductsList(): Observable<Product[]> {
    return this.deliveryStateService.selectedRestaurant$.asObservable()
      .pipe(
        concatMap(restaurant => this.apiService.getProducts(restaurant.id))
      );
  }

  private getSectionProductsList(selectedSection: number = null): void {
    this.productsBySection$ = this.getRestaurantProductsList().pipe(
      map(products => {
        const sectionIds = products.map(product => product.sectionId).sort();
        this.activeSelection = selectedSection ? selectedSection : sectionIds[0];

        this.sections$ = this.apiService.getSections(sectionIds);

        const bySectionId = (product: Product) => product.sectionId === this.activeSelection;
        return products.filter(bySectionId);
      })
    );
  }

  navigateToPhase3(): void {
    this.deliveryStateService.selectedProducts$.next({});
    this.deliveryStateService.setPhaseTo(3);
    this.navigationService.navigateTo('delivery');
  }

  navigateToPhase1(): void {
    this.deliveryStateService.setPhaseTo(1);
    this.navigationService.navigateTo('restaurants');
  }

  addProduct(product: Product): void {
    if (product.quantity) {
      product.quantity += 1;
      return;
    }
    product.quantity = 1;
    this.wishList.push(product);
  }

  showSectionProducts(sectionId: number): void {
    this.getSectionProductsList(sectionId);
  }

  selectionState(sectionId: number): string {
    const isActive = this.activeSelection === sectionId;
    return isActive ? 'food-section--selected' : 'food-section';
  }

  removeProduct(productId: number): void {
    const toRemoveProduct = (item: Product) => item.id !== productId;
    this.wishList = this.wishList.filter(toRemoveProduct);
  }

}
