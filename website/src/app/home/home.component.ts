import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { AnimationBuilder, trigger, state, style, animate, transition } from '@angular/animations';
import { AnimationEvent } from '@angular/animations';

// Ajoutez l'interface ici
interface ProgressBar {
  label: string;
  value: number;
  animationState?: string;
}

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
      state('start', style({ width: '{{startWidth}}%' }), { params: { startWidth: 0 } }),
      state('end', style({ width: '{{endWidth}}%' }), { params: { endWidth: 10 } }),
      transition('start => end', animate('{{duration}}')),
    ]),
  ],
  

})

export class HomeComponent implements AfterViewInit {

  private observer!: IntersectionObserver;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private animationBuilder: AnimationBuilder
  ) {
    for (let i = 0; i < this.img_names.length; i++) {
      this.addSlide(i);
    }
  }

  // Mettre à jour la propriété progressBars avec le type ProgressBar[]
  progressBars: ProgressBar[] = [
    { label: 'C', value: 9, animationState: 'start' },
    { label: 'C#', value: 9, animationState: 'start' },
    { label: 'HTML-CSS-JS', value: 9, animationState: 'start' },
    { label: 'Vue.js', value: 8, animationState: 'start' },
    { label: 'Python', value: 8, animationState: 'start' },
    { label: 'Java', value: 7, animationState: 'start' },
    { label: 'Angular', value: 6, animationState: 'start' },
    { label: 'Spring Boot', value: 6, animationState: 'start' },
    { label: 'Ocaml', value: 6, animationState: 'start' },
    { label: 'C++', value: 6, animationState: 'start' },
    { label: 'React-JS', value: 4, animationState: 'start' },
    { label: 'React-Native', value: 3, animationState: 'start' },
    { label: 'PHP', value: 2, animationState: 'start' },
    { label: 'SQL', value: 2, animationState: 'start' },

    // Ajoutez d'autres objets de progression ici
  ];

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const progressBar = this.progressBars.find((bar) => bar.label === entry.target.id);
          if (progressBar) {
            if (entry.isIntersecting) {
              progressBar.animationState = 'end';
            } else {
              progressBar.animationState = 'start';
            }
          }
        });
      },
      { threshold: 0.5 }
    );
  
    const progressBars = this.el.nativeElement.querySelectorAll('.progress-bar');
    progressBars.forEach((bar:any) => this.observer.observe(bar));
  }
  
  onAnimationEvent(event: AnimationEvent, progressBar: any) {
    if (event.fromState === 'end') {
      progressBar.animationState = 'start';
    } else {
      progressBar.animationState = 'end';
    }
  }

  // --------------------------------------------------------
  
  slides: { image: string; text?: string }[] = [];

  noWrapSlides = false;

  
  img_names = [
    { name: "android.png", text : "Mon jeu vidéo"},
    { name: "arduino.png", text : "Mes cours d'arduino"},
    { name: "Sevenic.png", text : "Mes projets"},
    { name: "Leston.png", text : "Mon logiciel"},
    { name: "image_pro.png", text : "Projet Universitaire"},
  ];


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