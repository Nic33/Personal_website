import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { slider} from './router-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ 
     slider

  ]
})

export class AppComponent {

  title = 'website';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
