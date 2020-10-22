import { TestBed } from '@angular/core/testing';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';

import { ProductsService } from './products.service';
import { Product } from '../models/product';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoul return products list', () => {
    const dummyProducts: Product[] = [
      {
        id: 3,
        name: 'vinus',
        contentType: 'CAN',
        productType: 'WHITE_WINE',
        unitPrice: 12.4,
        boxPrice: 1000,
        ingredients: 'arome;cafe'
    }
    ];

    service.findAllProducts().subscribe(products => {
      expect(products.length).toBe(1);
      expect(products).toEqual(dummyProducts);
    });
    const request = httpMock.expectOne( `${service.PRODUCTS_API}/all`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyProducts);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
