import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { CarCardComponent } from '../car-card/car-card.component';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CarCardComponent], 
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  
  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(result => {
      this.cars = result;
    });
  }
}