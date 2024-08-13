import { Component , OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ScrollTopModule } from 'primeng/scrolltop';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule,ScrollTopModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
