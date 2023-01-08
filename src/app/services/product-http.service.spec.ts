import { TestBed } from '@angular/core/testing';

import { ProducthttpService } from './product-http.service';

describe('ProductHttpService', () => {
  let service: ProducthttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducthttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
