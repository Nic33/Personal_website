import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules Angular Material
//import { MatButtonModule } from '@angular/material/button';

// Votre composant Navbar
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
//import { ButtonsModule } from 'ngx-bootstrap/buttons';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    HomeComponent, 
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
