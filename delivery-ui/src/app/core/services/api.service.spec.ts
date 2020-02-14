import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { Restaurant, Section, Product } from 'src/app/delivery.namespace';
import { HttpErrorResponse } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;
  let rootUrl = 'http://localhost:3000';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });
  
  beforeEach(() => {
    service = TestBed.inject(ApiService);

    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when restaurant list is requested', () => {
    const restaurantUrl = `${rootUrl}/restaurants`;

    it('should call restaurants endpoint with a get method', () => {
      const restaurantsList: Restaurant[] = [
        { id: 1, name: 'Restaurant 1', description: 'Description 1' },
        { id: 2, name: 'Restaurant 2', description: 'Description 2' },
      ];

      service.getRestaurants().subscribe(
        data => expect(data).toEqual(restaurantsList),
        _ => fail('should have succeeded returning a restaurants list'));
      const req = httpTestingController.expectOne(restaurantUrl);
      expect(req.request.method).toEqual('GET');
  
      req.flush(restaurantsList);
    });

    it('should return an error if requests fails with network error', () => {
      const message = 'error';

      service.getRestaurants().subscribe(
        _ => fail('should have failed with status 404 error'),
        (error: HttpErrorResponse) => expect(error.error.message).toEqual(message, 'message'));
      const req = httpTestingController.expectOne(restaurantUrl);
  
      const mockError = new ErrorEvent('Network error', { message });
      req.error(mockError);
    });
  });

  describe('when section list is requested', () => {
    describe('and required sections are 1 and 7', () => {
      const sectionsUrl = `${rootUrl}/sections?id=1&id=7`;
      const sectionIds = [1, 7];
  
      it('should call section endpoint with a get method filtering by ids 1 and 7', () => {
        const sectionsList: Section[] = [
          { id: 1, name: 'Section 1' },
          { id: 7, name: 'Section 7' },
        ];
  
        service.getSections(sectionIds).subscribe(
          data => expect(data).toEqual(sectionsList),
          _ => fail('should have succeeded returning a sections list'));
        const req = httpTestingController.expectOne(sectionsUrl);
        expect(req.request.method).toEqual('GET');
    
        req.flush(sectionsList);
      });
  
      it('should return an error if requests fails with network error', () => {
        const message = 'error';
  
        service.getSections(sectionIds).subscribe(
          _ => fail('should have failed with status 404 error'),
          (error: HttpErrorResponse) => expect(error.error.message).toEqual(message, 'message'));
        const req = httpTestingController.expectOne(sectionsUrl);
    
        const mockError = new ErrorEvent('Network error', { message });
        req.error(mockError);
      });
    });
  });

  describe('when product list is requested', () => {
    describe('and required restaurant has id 2', () => {
      const productsUrl = `${rootUrl}/products?restaurantId=2`;
      const restaurantId = 2;
  
      it('should call products endpoint with a get method filtering restaurant by id 2', () => {
        const productsList: Product[] = [
          { id: 1, name: 'Product 1', sectionId: 1, restaurantId: 2, detail: 'Detail 1', price: 11 },
          { id: 7, name: 'Product 7', sectionId: 7, restaurantId: 2, detail: 'Detail 7', price: 77 },
        ];
  
        service.getProducts(restaurantId).subscribe(
          data => expect(data).toEqual(productsList),
          _ => fail('should have succeeded returning a products list'));
        const req = httpTestingController.expectOne(productsUrl);
        expect(req.request.method).toEqual('GET');
    
        req.flush(productsList);
      });
  
      it('should return an error if requests fails with network error', () => {
        const message = 'error';
  
        service.getProducts(restaurantId).subscribe(
          _ => fail('should have failed with status 404 error'),
          (error: HttpErrorResponse) => expect(error.error.message).toEqual(message, 'message'));
        const req = httpTestingController.expectOne(productsUrl);
    
        const mockError = new ErrorEvent('Network error', { message });
        req.error(mockError);
      });
    });
  });
});
