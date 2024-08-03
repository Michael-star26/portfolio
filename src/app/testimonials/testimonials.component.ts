import { Component } from '@angular/core';
import { NgxSplideModule } from 'ngx-splide';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgxSplideModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  favicon='favicon.jpg'
}
