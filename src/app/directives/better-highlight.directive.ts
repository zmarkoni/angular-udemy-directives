import {Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.color') textColor: string = 'black'

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  /*
  In the last lecture, we used the Angular Renderer class to change the style of a HTML element.
  As explained in that lecture, you should use the Renderer for any DOM manipulations.

  Of course, you can do more than simply change the styling of an element via setStyle().
  Learn more about the available Renderer methods here:
  https://angular.io/docs/ts/latest/api/core/index/Renderer2-class.html
   */

  @HostListener('mouseenter') mouseOver(eventData: Event) {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
      this.textColor = 'white'; // Here I am using @HostBinding('style.color')
      // Which can be used only in this module in TS and it is bind to some property, in this
      // case to style.color
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
      this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
  }

  /*
  @HostListener je listener directiva koja moze da bude bilo koji event,
  ime metode je proizvoljno
   */

}
