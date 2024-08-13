import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet,ScrollTopModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
