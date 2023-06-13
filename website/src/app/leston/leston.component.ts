import { Component, AfterViewInit , ViewChild, ElementRef } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';

declare var anime: any;                                 
var index = 0;

@Component({
  selector: 'app-leston',
  templateUrl: './leston.component.html',
  styleUrls: ['./leston.component.css']
})
export class LestonComponent implements AfterViewInit {

  words: string[] = [' sport', ' performance', ' calcul'];

  ngAfterViewInit(): void {
    
    this.animateWords();

  }

  animateWords(): void {
    const wordElement = document.querySelector('.word');
    
      // Wrap every letter in a span
      console.log(index);

      if (wordElement != null){
        wordElement.innerHTML = this.words[index].replace(/\S/g, "<span class='letter' style='display:inline-block;'>$&</span>");

      }

      anime.timeline()
        .add({
          targets: '.letter',
          translateY: [100, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: (el : HTMLElement, i:number) => 500 + 30 * i

        }).add({
          targets: '.letter',
          translateY: [0, -100],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 1100,
          delay: (el : HTMLElement, i:number) => 100 + 30 * i,

          complete: () => {

            if (index >= this.words.length-1){ //index >= 3 alors 0
              index = 0;
            }else{
              index ++;
            }

            this.animateWords();
            
          }
        });
  }
} 