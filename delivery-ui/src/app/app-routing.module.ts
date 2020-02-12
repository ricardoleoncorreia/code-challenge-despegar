import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './views/restaurants/restaurants.component';
import { ProductsComponent } from './views/products/products.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { PhaseGuard } from './core/guards/phase.guard';


const routes: Routes = [
  {
    path: 'restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [PhaseGuard]
  },
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
