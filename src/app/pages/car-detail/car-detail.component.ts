import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencyPipe],
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car$: Observable<Car | undefined> | undefined;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    const carId = Number(this.route.snapshot.paramMap.get('id'));
    if (carId) {
      this.car$ = this.carService.getCarById(carId);
    }
  }
}