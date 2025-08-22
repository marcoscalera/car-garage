import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { CarCardComponent } from '../../components/car-card/car-card.component'; 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CarCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredCars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCars().subscribe(cars => {
      this.featuredCars = cars;
    });
  }
}