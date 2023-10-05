# web-vitals-ng
web-vitals wrapped in Angular service

# Quickstart
Just install `web-vitals-ng` package in your Angular project, for example:
```bash
npm install web-vitals-ng
```

Then you can use it as follows:
```typescript
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebVitalsNgService } from 'web-vitals-ng';

@Component({
  selector: 'app-web-vitals',
  template: `
    <div>
      <h2>Core Web Vitals</h2>
      <p>CLS: {{ clsData || 'N/A' }}</p>
      <p>FID: {{ fidData || 'N/A' }}</p>
      <p>LCP: {{ lcpData || 'N/A' }}</p>
    </div>
  `,
})
export class WebVitalsComponent implements OnInit {
  clsData: number = -1;
  fidData: number = -1;
  lcpData: number = -1;

  clsSubscription: Subscription = new Subscription;
  fidSubscription: Subscription = new Subscription;
  lcpSubscription: Subscription = new Subscription;

  constructor(private webVitalsNgService: WebVitalsNgService) {}

  ngOnInit(): void {
    this.webVitalsNgService.detectCLS$.subscribe((data) => {
        this.clsData = data.value;
    });

    this.webVitalsNgService.detectFID$.subscribe((data) => {
        this.fidData = data.value;
    });

    this.webVitalsNgService.detectLCP$.subscribe((data) => {
        this.lcpData = data.value;
    });
  }

  ngOnDestroy() {
    this.clsSubscription.unsubscribe();
    this.fidSubscription.unsubscribe();
    this.lcpSubscription.unsubscribe();
  }  
}
```

# Development

## TODO
* wrap web-vitals Metric interface into web-vitals-ng specific interfaces for proper decoupling (this mey be breaking change!)
* add some e2e tests

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).