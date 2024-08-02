import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FootingComponent } from './footing/footing.component';
import { CardComponent } from "./card/card.component";
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from "./page/about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FootingComponent, CardComponent, CarouselComponent, AboutComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nest';
}
