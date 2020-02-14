import { Component, OnInit, TemplateRef } from '@angular/core';
import { DeliveryStateService } from 'src/app/core/services/delivery-state.service';
import { Observable } from 'rxjs';
import { Product, Section, Contact, Purchase, WishItem } from 'src/app/delivery.namespace';
import { ApiService } from 'src/app/core/services/api.service';
import { concatMap, map } from 'rxjs/operators';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { faPlusCircle, faSearch, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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
  contact: Contact;
  modalRef: BsModalRef;
  restaurantId: number;

  faPlusCircle = faPlusCircle;
  faSearch = faSearch;
  faTrash = faTrash;
  faTimes = faTimes;

  get purchaseTotal(): number {
    if (!this.wishList.length) { return 0; }

    const subTotals = this.wishList.map(product => product.price * +product.quantity);
    const sum = (subTotal: number, currentValue: number) => subTotal + currentValue;
    return subTotals.reduce(sum);
  }

  get isPhase2$(): Observable<boolean> {
    return this.deliveryStateService.currentPhase$.pipe(map(phase => phase === 2));
  }

  get title$(): Observable<string> {
    return this.deliveryStateService.currentPhase$
              .pipe(map(phase => phase === 2 ? 'Realiza tu pedido!' : 'Completa tus datos!'));
  }

  get disableContinue(): boolean {
    return this.wishList.length === 0;
  }

  get isValidContactInfo(): boolean {
    let isValid = true;
    Object.keys(this.contact).forEach(key => isValid = isValid && !!this.contact[key]);
    return isValid;
  }

  get purchase(): Purchase {
    const extractQuantityAndId = (item: Product) => ({ quantity: item.quantity, productId: item.id });
    const byNotZeroQueantity = (item: WishItem) => item.quantity > 0;
    const wishList: WishItem[] = this.wishList
                                    .map(extractQuantityAndId)
                                    .filter(byNotZeroQueantity);

    return {
      restaurantId: this.restaurantId,
      wishList,
      contact: this.contact
    };
  }

  constructor(
    private apiService: ApiService,
    private navigationService: NavigationService,
    private deliveryStateService: DeliveryStateService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.createEmptyContact();
    this.getSectionProductsList();
  }

  private createEmptyContact(): void {
    this.contact = {
      firstName: '',
      lastName: '',
      address: '',
      mobile: '',
      email: '',
    };
  }

  private getRestaurantProductsList(): Observable<Product[]> {
    return this.deliveryStateService.selectedRestaurant$.asObservable()
      .pipe(
        concatMap(restaurant => {
          this.restaurantId = restaurant.id;
          return this.apiService.getProducts(restaurant.id);
        }));
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
    this.deliveryStateService.setPhaseTo(3);
  }

  navigateToPhase2(): void {
    this.deliveryStateService.setPhaseTo(2);
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

  submitDelivery(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

}
