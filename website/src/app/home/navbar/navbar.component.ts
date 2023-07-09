import { Component, OnInit, ViewChild } from '@angular/core';
import { ToasterPlacement } from '@coreui/angular';
import { CustomToastComponent } from '../../custom-toast/custom-toast.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  @ViewChild(CustomToastComponent)
  customToast!: CustomToastComponent;

  menuActive = false;
  menuIcon = 'menu';
  placement = ToasterPlacement.TopCenter;

  constructor() {}

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
    this.menuIcon = this.menuActive ? 'close' : 'menu';
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
