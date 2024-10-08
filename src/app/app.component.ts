import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CountactUsComponent, CommonModule],
  imports: [RouterOutlet, CommonModule, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <div>
      <p class="text-black w-60 mt-4 group-hover:text-white">
        Angular helps build single-page applications (SPAs) 
        with its interesting features.
        <br>
        <a class="text-blue-500" (click)="showCountactUs()">Countact Us</a>
      </p>
      <app-countact-us *ngIf="showCountact"></app-countact-us> <!-- Yahan Contact Us component ko dikhana hai -->
    </div>
  `,
})
export class AppComponent {
  title = 'IT-Panda-App';
  showCountact:boolean = false;

  showCountactUs() {
    this.showCountact = !this.showCountact;
  }
}

