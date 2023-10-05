import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { CLSMetric, FIDMetric, LCPMetric, onCLS, onFID, onLCP } from 'web-vitals';

@Injectable({
  providedIn: 'root'
})
export class WebVitalsNgService {
  private detectCLSSubject = new Subject<CLSMetric>();
  private detectFIDSubject = new Subject<FIDMetric>();
  private detectLCPSubject = new Subject<LCPMetric>();


  constructor() {
    onCLS((data) => {
      this.detectCLSSubject.next(data);
    });

    onFID((data) => {
      this.detectFIDSubject.next(data);
    });

    onLCP((data) => {
      this.detectLCPSubject.next(data);
    });
  }

  detectCLS$: Observable<CLSMetric> = this.detectCLSSubject.asObservable();
  detectFID$: Observable<FIDMetric> = this.detectFIDSubject.asObservable();
  detectLCP$: Observable<LCPMetric> = this.detectLCPSubject.asObservable();
}
