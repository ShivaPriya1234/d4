import { Component } from '@angular/core';
import { DepartmentComponent } from '../department/department.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [DepartmentComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
