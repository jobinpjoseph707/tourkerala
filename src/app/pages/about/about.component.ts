import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  slides = [
    {
      imageUrl:'https://wallpapercave.com/wp/wp2649841.jpg',
      subtitle: 'Discover the Colorful World',
      title: 'New Adventure',
      description: 'A tranquil beach known for its golden sands, coconut groves, and calm waters, ideal for relaxation and water sports.'
    },
    {
      imageUrl:'https://wallpapercave.com/wp/wp2649841.jpg',
      subtitle: 'Discover the Colorful World',
      title: 'New Trip',
      description: 'One of the largest waterfalls in Kerala, surrounded by lush green forests and biodiversity.'
    },
    {
      imageUrl: 'https://wallpapercave.com/wp/wp2649841.jpg',
      subtitle: 'Discover the Colorful World',
      title: 'New Experience',
      description: 'A serene beach surrounded by cliffs and palm groves, offering breathtaking sunset views and opportunities for relaxation.'
    }
  ];
  displaySlides: { imageUrl: string; subtitle: string; title: string; description: string; }[] = [];  private intervalId: any;


  currentSlide = 0;

  ngOnInit() {
    this.startSlideshow();
    this.updateDisplaySlides();

  }

  ngOnDestroy() {
    this.stopSlideshow();
  }
  updateDisplaySlides() {
    this.displaySlides = this.slides.slice(this.currentSlide, this.currentSlide + 2);
  }

  startSlideshow() {
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 2) % this.slides.length;
      this.updateDisplaySlides();
    }, 3000);
  }

  stopSlideshow() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
