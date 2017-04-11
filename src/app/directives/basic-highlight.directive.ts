import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

    /*
    In the last lecture, we used the Angular Renderer class to change the style of a HTML element.
    As explained in that lecture, you should use the Renderer for any DOM manipulations.

    Of course, you can do more than simply change the styling of an element via setStyle().
    Learn more about the available Renderer methods here:
    https://angular.io/docs/ts/latest/api/core/index/Renderer2-class.html
     */
}