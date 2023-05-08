import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuActive = false;
  menuIcon = 'menu';

  constructor() {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
    this.menuIcon = this.menuActive ? 'close' : 'menu';
  }
}
