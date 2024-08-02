import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { CarouselComponent } from '../../carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
