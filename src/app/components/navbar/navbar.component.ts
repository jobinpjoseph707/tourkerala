import { NgIf } from '@angular/common';
import { Component ,HostListener,Renderer2,ElementRef} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isNavbarVisible = true;
  lastScrollTop = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
  //   if (currentScrollTop < this.lastScrollTop) {
  //     this.isNavbarVisible = true;
  //   } else {
  //     this.isNavbarVisible = false;
  //   }
  //   this.lastScrollTop = currentScrollTop;
  // }
  onWindowScroll() {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
    if (currentScrollTop < this.lastScrollTop) {
      this.isNavbarVisible = true;
      this.renderer.removeClass(this.el.nativeElement, 'semi-transparent');
    } else {
      this.isNavbarVisible = false;
      if (currentScrollTop > 0) {
        this.renderer.addClass(this.el.nativeElement, 'semi-transparent');
      }
    }
    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Reset the value when at the top of the page
  }
}
