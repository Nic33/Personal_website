import { Component, AfterViewInit, Renderer2, ElementRef , OnInit} from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';
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

  constructor(private el: ElementRef) {
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

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  ngOnInit() {
    this.slides[0] = {
      id: 0,
      src: './assets/img_leston/bienvenu.png',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/img_leston/excel_graph.png',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: './assets/img_leston/submit.png',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  }
}