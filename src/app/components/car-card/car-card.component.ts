import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  @Input() car!: Car;

  constructor() { }

  ngOnInit(): void {
  }
}