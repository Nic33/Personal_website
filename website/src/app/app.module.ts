import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';

// Les Pages
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';

import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';

import { LestonComponent } from './leston/leston.component';

import { TimelineComponent } from './home/timeline/timeline.component';

// Les API
import { MenubarModule } from 'primeng/menubar';

import { AccordionModule, SharedModule, CarouselModule, ToastModule, ProgressModule, DropdownModule} from '@coreui/angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    HomeComponent, 
    FooterComponent, 
    LestonComponent,
    AccountComponent,
    TimelineComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule,
    ProgressModule,
    MenubarModule,
    FormsModule,
    AccordionModule, 
    SharedModule,
    CarouselModule.forRoot(),
    DropdownModule,
    CarouselModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
