import { Component, Input } from '@angular/core';
import { Car } from '../../models/car';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured-car-card',
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencyPipe],
  templateUrl: './featured-car-card.component.html',
  styleUrls: ['./featured-car-card.component.css']
})
export class FeaturedCarCardComponent {
  @Input() car: Car | undefined;
}