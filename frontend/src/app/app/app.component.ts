import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { slider} from './router-animation';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ 
     slider
  ]
})

export class AppComponent {

  constructor(
    public iconSet: IconSetService
  ) {
    iconSet.icons = {};
  }

  title = 'website';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
