import { Component } from '@angular/core';
import { CardsComponent } from '../../cards/cards.component';
import { CardComponent } from "../../card/card.component";
import { AeroComponent } from '../../aero/aero.component';
import { BankComponent } from '../../bank/bank.component';
import { HealthComponent } from '../../health/health.component';
import { LocoComponent } from '../../loco/loco.component';
import { InduComponent } from '../../indu/indu.component';
import { MobilityComponent } from '../../mobility/mobility.component';
import { InsuranceComponent } from '../../insurance/insurance.component';
import { GisComponent } from '../../gis/gis.component';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [DepartmentComponent, CardsComponent, CardComponent,AeroComponent,BankComponent,HealthComponent,LocoComponent,InduComponent,MobilityComponent,InsuranceComponent,GisComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

}
