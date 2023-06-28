import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Votre composant Navbar
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule } from '@angular/forms';

import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';

import { LestonComponent } from './leston/leston.component';

import { AccordionModule, SharedModule, CarouselModule} from '@coreui/angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    HomeComponent, 
    FooterComponent, 
    LestonComponent,
    AccountComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TimelineModule,
    ToastModule,
    MessagesModule,
    MenubarModule,
    FormsModule,
    AccordionModule, 
    SharedModule,
    CarouselModule.forRoot(),
    // BsDropdownModule.forRoot(),
    CarouselModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
