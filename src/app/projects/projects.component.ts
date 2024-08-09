import { Component } from '@angular/core';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TestimonialsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
