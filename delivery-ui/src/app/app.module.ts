import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './views/restaurants/restaurants.component';
import { ProductsComponent } from './views/products/products.component';
import { DeliveryComponent } from './views/delivery/delivery.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RestaurantCardComponent } from './views/restaurants/restaurant-card/restaurant-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    ProductsComponent,
    DeliveryComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    RestaurantCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
