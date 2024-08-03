import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NgxSplideModule } from 'ngx-splide';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxSplideModule,CommonModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  favicon='favicon.jpg'
}
