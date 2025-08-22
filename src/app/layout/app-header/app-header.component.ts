import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule], 
  template: `
    <header class="main-header">
      <a routerLink="/" class="logo">GARAGE</a>
      <nav class="main-nav">
        <a routerLink="/collection">Inventory</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  `,
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {}