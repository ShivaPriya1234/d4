import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { DepartmentComponent } from './page/department/department.component';
import { ServiceComponent } from './page/service/service.component';
import { AeroComponent } from './aero/aero.component';
import { BankComponent } from './bank/bank.component';
import { HealthComponent } from './health/health.component';
import { LocoComponent } from './loco/loco.component';
import { InduComponent } from './indu/indu.component';
import { MobilityComponent } from './mobility/mobility.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { GisComponent } from './gis/gis.component';


export const routes: Routes = [
    
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"department",component:DepartmentComponent},
    {path:"service",component:ServiceComponent},
    {path:"aero",component:AeroComponent},
    {path:"bank",component:BankComponent},
    {path:"health",component:HealthComponent},
    {path:"loco",component:LocoComponent},
    {path:"indu",component:InduComponent},
    {path:"mobility",component:MobilityComponent},
    {path:"insurance",component:InsuranceComponent},
    {path:"gis",component:GisComponent},
   


];
