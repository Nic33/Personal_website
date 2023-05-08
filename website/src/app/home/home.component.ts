import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  providers: [
    { provide: CarouselConfig, useValue: { 
      interval: 3000, 
      noPause: false, 
      showIndicators: true,
      startFromIndex : 0 } }
 ],

  styleUrls: ['./home.component.css'],

  animations: [
    trigger('animateProgressBar', [
      state('start', style({ width: '{{ startWidth }}%' }), { params: { startWidth: 0 } }),
      state('end', style({ width: '{{ endWidth }}%' }), { params: { endWidth: 100 } }),
      transition('start <=> end', [
        animate('{{ duration }}')
      ], { params: { duration: '2s' } }),
    ]),
  ],

})

export class HomeComponent  {

  slides: { image: string; text?: string }[] = [];

  noWrapSlides = false;

  progressBars = [
    { label: 'C', value: 20 },
    { label: 'D', value: 40 },
    { label: 'E', value: 60 },
    // ... autres barres de progression
  ];

  onAnimationEvent(event: AnimationEvent, progressBar: any) {
    if (event.fromState === 'end') {
      progressBar.animationState = 'start';
    } else {
      progressBar.animationState = 'end';
    }
  }
  
  img_names = [
    { name: "android.png", text : "Mon jeu vidéo"},
    { name: "arduino.png", text : "Mes cours d'arduino"},
    { name: "Sevenic.png", text : "Mes projets"},
    { name: "Leston.png", text : "Mon logiciel"},
    { name: "image_pro.png", text : "Projet Universitaire"},
  ];

  constructor() {
    for (let i = 0; i < this.img_names.length; i++) {
      this.addSlide(i);
    }
  }

  addSlide(i: number): void {
    this.slides.push({
      image: `assets/img/${this.img_names[i].name}`,
      text: `${this.img_names[i].text}`

    });
  }

  /* 
  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  } 
  */
}