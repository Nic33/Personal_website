import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})


export class AccountComponent implements OnInit {
  items: MenuItem[] = []; // Initialisez la propriété items comme un tableau vide
  
  ngOnInit() {
    this.items = [
      { label: 'Accueil', icon: 'pi pi-home', routerLink: '/' },
      { label: 'À propos', icon: 'pi pi-info', routerLink: '/a-propos' },
      { label: 'Projets', icon: 'pi pi-briefcase', routerLink: '/projets' },
      { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' },
      // Ajoutez ici d'autres éléments de menu si nécessaire
    ];
  }

}

export const environment = {
  production: false,
  firebase: {
    apiKey: "x",
    authDomain: "x",
    projectId: "x",
    storageBucket: "x",
    messagingSenderId: "x",
    appId: "x",
    measurementId: "x"
  }
};