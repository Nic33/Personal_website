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
import { AccountComponent } from './account/account.component';
import { FooterComponent } from './footer/footer.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
//import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { LestonComponent } from './leston/leston.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    HomeComponent, 
    FooterComponent, 
    AccountComponent, 
    LestonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TimelineModule,
    ToastModule,
    MenubarModule,
    FormsModule,
    CarouselModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
