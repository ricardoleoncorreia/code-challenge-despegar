import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

enum Endpoints {
  Restaurant = 'restaurants'
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Delivery.Restaurant[]> {
    const url = this.buildUrl(Endpoints.Restaurant);
    return this.http.get<Delivery.Restaurant[]>(url);
  }

  private buildUrl(endpoint: string): string {
    return `${this.apiUrl}/${endpoint}`
  }
}
