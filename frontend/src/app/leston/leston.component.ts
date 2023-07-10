import { Component, AfterViewInit, OnInit, ViewChild} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';

declare var anime: any;                                 
var index = 0;

@Component({
  selector: 'app-leston',
  templateUrl: './leston.component.html',
  styleUrls: ['./leston.component.scss'],
  providers: [
    ],
})

export class LestonComponent implements AfterViewInit, OnInit {

  @ViewChild(CustomToastComponent)
  customToast!: CustomToastComponent;
  
  constructor(private sanitizer: DomSanitizer) {

  }
  
  /*----------------------------------------*/

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  /*----------------------------------------*/

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  /*----------------------------------------*/

  items = [1, 2, 3, 4];

  fileUrl : SafeResourceUrl = '';

  ngOnInit() {
    
    this.scrollToTop();
    
    const data = 'some text';
    const blob = new Blob([data], {
      type: 'application/octet-stream'
    });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

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

  words: string[] = [' sport', ' performance', ' calcul'];
  
  // selectedValue: string;

  test:boolean = false;

  ngAfterViewInit(): void {
    
    if (this.test == false){
      this.animateWords();
      this.test = true;
    }

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