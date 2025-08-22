import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { CarCardComponent } from '../../components/car-card/car-card.component';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule,RouterModule,CarCardComponent],
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCars().subscribe(result => {
      this.cars = result;
    });
  }
}