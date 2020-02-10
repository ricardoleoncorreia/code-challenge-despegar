import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/delivery.namespace';

enum Endpoints {
  Restaurant = 'restaurants'
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    const url = this.buildUrl(Endpoints.Restaurant);
    return this.http.get<Restaurant[]>(url);
  }

  private buildUrl(endpoint: string): string {
    return `${this.apiUrl}/${endpoint}`;
  }
}
