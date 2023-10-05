import { TestBed } from '@angular/core/testing';

import { WebVitalsNgService } from './web-vitals-ng.service';

describe('WebVitalsNgService', () => {
  let service: WebVitalsNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebVitalsNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should successfully subscribe to a CLS event', () => {
    const subscription = service.detectCLS$.subscribe((data) => {
    });

    expect(subscription.closed).toBeFalse();

    subscription.unsubscribe();
  });  

  it('should successfully subscribe to a FID event', () => {
    const subscription = service.detectFID$.subscribe((data) => {
    });

    expect(subscription.closed).toBeFalse();
    
    subscription.unsubscribe();
  });  

  it('should successfully subscribe to a LCP event', () => {
    const subscription = service.detectFID$.subscribe((data) => {
    });    

    expect(subscription.closed).toBeFalse();

    subscription.unsubscribe();
  });  
});
