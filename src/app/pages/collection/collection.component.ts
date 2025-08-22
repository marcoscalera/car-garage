import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { CarCardComponent } from '../../components/car-card/car-card.component';
import { FeaturedCarCardComponent } from '../../components/featured-car-card/featured-car-card.component'; 

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CarCardComponent,
    FeaturedCarCardComponent 
  ],
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  starCar: Car | undefined;
  otherCars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCars().subscribe(allCars => {
      this.starCar = allCars[0];
      this.otherCars = allCars.slice(1);
    });
  }
}