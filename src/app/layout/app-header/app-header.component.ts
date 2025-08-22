import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="main-header">
      <div class="logo">GARAGE</div>
      <nav class="main-nav">
        <a href="#">Inventory</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  `,
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {}