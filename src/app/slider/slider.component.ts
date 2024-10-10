import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  title: string;
  description: string;
  image: string; // URL of the image
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  slides: Slide[] = [
    {
      title: 'Slide 1',
      description: 'Description for Slide 1',
      image: 'https://c4.wallpaperflare.com/wallpaper/379/650/373/4k-desktop-background-hd-wallpaper-preview.jpg', // Replace with your image URL
    },
    {
      title: 'Slide 2',
      description: 'Description for Slide 2',
      image: 'https://via.placeholder.com/400x200?text=Slide+2',
    },
    {
      title: 'Slide 3',
      description: 'Description for Slide 3',
      image: 'https://via.placeholder.com/400x200?text=Slide+3',
    },
  ];

  currentIndex = 0;
  translateX = 0;

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    this.updateTranslateX();
  }

  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    }
    this.updateTranslateX();
  }

  updateTranslateX() {
    this.translateX = -this.currentIndex * 100; // Move left based on current index
  }
}
