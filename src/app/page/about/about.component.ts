import { Component } from '@angular/core';
import { AccordianComponent } from '../../accordian/accordian.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutComponent,AccordianComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
