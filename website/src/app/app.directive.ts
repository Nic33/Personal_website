import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class MyHighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
