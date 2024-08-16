import { Component } from '@angular/core';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { CommonModule } from '@angular/common';
import { BlockUIModule } from 'primeng/blockui';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TestimonialsComponent,CommonModule,BlockUIModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects={
    "E-commerce":"www.ecomm",
    "Reactive Form":"www.ecomm",
    "Angular States":"www.ecomm",
    "Todo App":"www.ecomm",
    "Sport Store":"www.ecomm",
    "Youtube video":"www.ecomm",
    "Music app":"www.ecomm",
    "Reddit clawn":"www.ecomm",
  }
  expresshandle={
    "E-store":"www.ecomm",
    "Landing Page":"www.ecomm",
    "Church website":"www.ecomm",
    "Todo App":"www.ecomm",
    "CRUD app":"www.ecomm",
    "Socialmedia":"www.ecomm",
    "Youtube Search":"www.ecomm",
    "Inventory":"www.inv"
  }
}
