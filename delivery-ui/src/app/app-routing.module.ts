import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './views/restaurants/restaurants.component';
import { DeliveryComponent } from './views/delivery/delivery.component';
import { ProductsComponent } from './views/products/products.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'delivery', component: DeliveryComponent },
  {
    path: '',
    redirectTo: '/restaurants',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
