import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav'
import { RouterOutlet } from '@angular/router';
import{MatIconModule} from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive,MatButtonModule,MatSidenavModule,RouterOutlet,MatIconModule,CommonModule,MatMenuModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  status='active'
  newStatus='inactive'
  second(){
    this.newStatus=this.status
  }
}
