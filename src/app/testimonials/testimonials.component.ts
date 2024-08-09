import { Component } from '@angular/core';
import { NgxSplideModule } from 'ngx-splide';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgxSplideModule,RatingModule,FormsModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  favicon='favicon.jpg';
  value:number=4.5;
}
