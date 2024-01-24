import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  selector: 'nx-ng-sixteen-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nx-ng-sixteen-test';

  constructor() {
    // if (isPlatformBrowser(inject(PLATFORM_ID))) {
    //   setTimeout(() => {
    //     new Promise((resolve) => {
    //       console.log('DEBUG:: timeout');
    //       resolve(1);
    //     });
    //   }, 30000);
    // }
  }
}
