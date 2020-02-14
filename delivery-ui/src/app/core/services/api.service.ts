import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant, Section, Product } from 'src/app/delivery.namespace';

enum Endpoints {
  Restaurants = 'restaurants',
  Products = 'products',
  Sections = 'sections'
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    const url = this.buildUrl(Endpoints.Restaurants);
    return this.http.get<Restaurant[]>(url);
  }

  getSections(sectionIds: number[]): Observable<Section[]> {
    const idParams = sectionIds.map(id => `id=${id}`).join('&');
    const url = this.buildUrl(Endpoints.Sections, idParams);
    return this.http.get<Section[]>(url);
  }

  getProducts(restaurantId: number): Observable<Product[]> {
    const url = this.buildUrl(Endpoints.Products, { restaurantId });
    return this.http.get<Product[]>(url);
  }

  private buildUrl(endpoint: string, queryParams: any = null): string {
    const params = this.buildQueryParams(queryParams);
    return `${this.apiUrl}/${endpoint}${params}`;
  }

  private buildQueryParams(params: any): string {
    if (!params) { return ''; }
    if (typeof params === 'string') { return `?${params}`; }

    let queryString = '?';
    const attachParam = (key: string) => queryString += `${key}=${params[key]}`;
    Object.keys(params).forEach(attachParam);

    return queryString;
  }
}
