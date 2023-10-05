# web-vitals-ng
web-vitals wrapped in Angular service

# Quickstart
```bash
npm install @web-vitals-ng/web-vitals-ng.service
```

```typescript
import { Component, OnInit } from '@angular/core';
import { WebVitalsService } from '@web-vitals-ng/web-vitals-ng.service';

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
  clsData: number | null;
  fidData: number | null;
  lcpData: number | null;

  constructor(private webVitalsService: WebVitalsService) {}

  ngOnInit(): void {
    this.webVitalsService.detectCLS$.subscribe(({value}) => {
        this.clsData = value.
    });

    this.webVitalsService.detectFID$.subscribe(({value}) => {
        this.fidData = value.
    });

    this.webVitalsService.detectLCP$.subscribe(({value}) => {
        this.lcpData = value.
    });
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.eventSubscription.unsubscribe();
  }  
}
```

## TODO
* wrap web-vitals Metric into custom interfaces for proper decoupling (this will be breaking change!)
* add some e2e tests

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).