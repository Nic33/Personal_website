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

import { LestonComponent } from './leston/leston.component';

import { TimelineComponent } from './home/timeline/timeline.component';

import { USAComponent } from './usa/usa.component';

// Les API

import { ButtonModule,OffcanvasModule, AccordionModule, SharedModule, CarouselModule, ToastModule, ProgressModule, DropdownModule} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { CustomToastComponent } from './custom-toast/custom-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    HomeComponent, 
    FooterComponent, 
    LestonComponent,
    TimelineComponent,
    CustomToastComponent,
    USAComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule,
    ProgressModule,
    FormsModule,
    AccordionModule, 
    SharedModule,
    CarouselModule.forRoot(),
    DropdownModule,
    CarouselModule,
    OffcanvasModule,
    IconModule,
    ButtonModule,
  ],
  providers: [IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
