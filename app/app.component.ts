import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { SobreComponent } from '../pages/sobre/sobre.component';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SobreComponent;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }
}
