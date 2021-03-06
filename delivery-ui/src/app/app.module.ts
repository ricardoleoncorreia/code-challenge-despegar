import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './views/restaurants/restaurants.component';
import { ProductsComponent } from './views/products/products.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RestaurantCardComponent } from './views/restaurants/restaurant-card/restaurant-card.component';
import { HttpHeadersInterceptor } from './core/interceptors/http-headers.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    ProductsComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    RestaurantCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeadersInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
