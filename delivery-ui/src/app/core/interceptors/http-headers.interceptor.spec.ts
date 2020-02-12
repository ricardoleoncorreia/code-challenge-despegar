import { TestBed } from '@angular/core/testing';

import { HttpHeadersInterceptor } from './http-headers.interceptor';

describe('HttpHeadersInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpHeadersInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpHeadersInterceptor = TestBed.inject(HttpHeadersInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should attach \'Cache-control\' header with value \'no-cache\'');
  it('should attach \'pragma\' header with value \'no-cache\'');
  it('should attach \'If-Modified-Since\' header with value \'0\'');
});
