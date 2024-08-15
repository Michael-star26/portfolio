import { Component } from '@angular/core';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TestimonialsComponent,CommonModule],
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
}
