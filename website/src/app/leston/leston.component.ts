import { Component, AfterViewInit,OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

declare var anime: any;                                 
var index = 0;

@Component({
  selector: 'app-leston',
  templateUrl: './leston.component.html',
  styleUrls: ['./leston.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }],
})

export class LestonComponent implements AfterViewInit, OnInit {

  fileUrl : SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const data = 'some text';
    const blob = new Blob([data], {
      type: 'application/octet-stream'
    });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

  words: string[] = [' sport', ' performance', ' calcul'];
  
  // selectedValue: string;

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