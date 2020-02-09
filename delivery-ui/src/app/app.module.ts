import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './views/restaurants/restaurants.component';
import { ProductsComponent } from './views/products/products.component';
import { DeliveryComponent } from './views/delivery/delivery.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    ProductsComponent,
    DeliveryComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
