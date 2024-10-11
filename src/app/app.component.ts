import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component'
import { OurServicesComponent } from './our-services/our-services.component'
import { TeamComponent } from './team/team.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { SliderComponent } from './slider/slider.component'




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    HomeComponent,
    OurServicesComponent,
    TeamComponent,
    PortfolioComponent,
    SliderComponent,
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {

}
