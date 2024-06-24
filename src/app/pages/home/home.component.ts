import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { KERALA_DISTRICTS } from '../../district-data';



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NavbarComponent,RouterLink,NgFor]
})
export class HomeComponent {
    KERALA_DISTRICTS = KERALA_DISTRICTS;

    slides = [
        {
          imageUrl:'https://cdn.pixabay.com/photo/2016/11/19/15/38/beach-1839922_1280.jpg',
          subtitle: 'Discover the Colorful World',
          title: 'New Adventure',
          description: 'A tranquil beach known for its golden sands, coconut groves, and calm waters, ideal for relaxation and water sports.'
        },
        {
          imageUrl:'https://photographylife.com/cdn-cgi/imagedelivery/GrQZt6ZFhE4jsKqjDEtqRA/photographylife.com/2015/06/AJT_8848-Edit.jpg/w=2048,h=923',
          subtitle: 'Discover the Colorful World',
          title: 'New Trip',
          description: 'One of the largest waterfalls in Kerala, surrounded by lush green forests and biodiversity.'
        },
        {
          imageUrl: 'https://cdn.pixabay.com/photo/2017/04/05/16/29/sunset-2205553_1280.jpg',
          subtitle: 'Discover the Colorful World',
          title: 'New Experience',
          description: 'A serene beach surrounded by cliffs and palm groves, offering breathtaking sunset views and opportunities for relaxation.'
        }
      ];
    
      currentSlide = 0;
      private intervalId: any;
    
      ngOnInit() {
        this.startSlideshow();
      }
    
      ngOnDestroy() {
        this.stopSlideshow();
      }
    
      startSlideshow() {
        this.intervalId = setInterval(() => {
          this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        }, 3000);
      }
    
      stopSlideshow() {
        if (this.intervalId) {
          clearInterval(this.intervalId);
        }
      }
    

}
