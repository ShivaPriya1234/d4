import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { AeroComponent } from '../aero/aero.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  department=[
   { 
    id:1,
    Title:"aerospace and Defence",
    Image:"../../assets/aero.jpeg",
    description:"New technologies that enhances safety and security of both coomercial and military aircraft."
  

},
{ 
  id:2,
  Title:"Banking and finance",
  Image:"../../assets/bankk.jpeg",
  description:"Financial activities that support individuals, businesses, and governments."


},
{ 
  id:3,
  Title:"Healthcare",
  Image:"../../assets/health.jpeg",
  description:"The organized provision  mainly focus on  the    medical     care to individuals or a community."


},
{ 
  id:4,
  Title:"Insurance",
  Image:"../../assets/insu.jpeg",
  description:"A contract between an individual or company to provide financial protection and mitigate risks ."


},
{ 
  id:5,
  Title:"Locomotive",
  Image:"../../assets/loco.jpeg",
  description:"A locomotive is a rail transport that provides the motive power for a train."


},

{ 
  id:6,
  Title:"Industrial",
  Image:"../../assets/indu.jpeg",
  description:"Relating to a type of harsh,uncompromising sounds produced by industrial machines."


},
{ 
  id:7,
  Title:"Mobility",
  Image:"../../assets/mob.jpeg",
  description:"It refers  to all other industries that provides the vehicles and infrastructure for transportation."


},
{ 
  id:8,
  Title:"GIS",
  Image:"../../assets/giss.jpeg",
  description:"Mapping and data analysis technology that is powering buisness decisions."


},
  ]
}