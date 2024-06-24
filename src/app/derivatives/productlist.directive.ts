import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProductlist]'
})
export class ProductlistDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.classList.add('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.classList.remove('red');
  }

  // private changeBgColor(color: string) {
  //   this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  // }
}
