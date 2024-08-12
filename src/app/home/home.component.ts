import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NgxSplideModule } from 'ngx-splide'
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProjectsComponent } from '../projects/projects.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CarouselModule,ButtonModule,TagModule,ProjectsComponent,TestimonialsComponent,ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  favicon='favicon.jpg'
}
