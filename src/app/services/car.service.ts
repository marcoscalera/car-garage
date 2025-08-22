import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

private cars: Car[] = [
    { id: 3, brand: 'Bugatti', model: 'Chiron Super Sport', year: 2023, price: 3800000, imageUrl: 'assets/images/bugatti-chiron.jpeg', horsepower: 1578, topSpeed: 490, zeroToSixty: 2.4 },
    { id: 7, brand: 'Aston Martin', model: 'Valkyrie', year: 2023, price: 3500000, imageUrl: 'assets/images/aston-martin-valkyrie.jpg', horsepower: 1160, topSpeed: 402, zeroToSixty: 2.5 },
    { id: 1, brand: 'Koenigsegg', model: 'Jesko Absolut', year: 2024, price: 3000000, imageUrl: 'assets/images/koenigsegg-jesko.jpg', horsepower: 1600, topSpeed: 531, zeroToSixty: 2.5 },
    { id: 9, brand: 'Mercedes-AMG', model: 'ONE', year: 2023, price: 2720000, imageUrl: 'assets/images/mercedes-amg-one.jpg', horsepower: 1063, topSpeed: 352, zeroToSixty: 2.9 },
    { id: 5, brand: 'Lamborghini', model: 'Countach LPI 800-4', year: 2022, price: 2640000, imageUrl: 'assets/images/lamborghini-countach.jpg', horsepower: 803, topSpeed: 355, zeroToSixty: 2.8 },
    { id: 2, brand: 'Pagani', model: 'Utopia', year: 2024, price: 2500000, imageUrl: 'assets/images/pagani-utopia.jpg', horsepower: 852, topSpeed: 370, zeroToSixty: 2.7 },
    { id: 6, brand: 'Rimac', model: 'Nevera', year: 2024, price: 2400000, imageUrl: 'assets/images/rimac-nevera.jpg', horsepower: 1914, topSpeed: 412, zeroToSixty: 1.85 },
    { id: 8, brand: 'McLaren', model: 'Speedtail', year: 2022, price: 2250000, imageUrl: 'assets/images/mclaren-speedtail.jpg', horsepower: 1055, topSpeed: 403, zeroToSixty: 2.9 },
    { id: 4, brand: 'Ferrari', model: 'Daytona SP3', year: 2023, price: 2200000, imageUrl: 'assets/images/ferrari-daytona.jpg', horsepower: 829, topSpeed: 340, zeroToSixty: 2.85 },
    { id: 12, brand: 'Hennessey', model: 'Venom F5', year: 2024, price: 2100000, imageUrl: 'assets/images/hennessey-venom.jpg', horsepower: 1817, topSpeed: 483, zeroToSixty: 2.6 },
    { id: 10, brand: 'Porsche', model: '918 Spyder', year: 2015, price: 1700000, imageUrl: 'assets/images/porsche-918.jpg', horsepower: 887, topSpeed: 345, zeroToSixty: 2.6 },
    { id: 11, brand: 'Lexus', model: 'LFA', year: 2012, price: 950000, imageUrl: 'assets/images/lexus-lfa.jpg', horsepower: 552, topSpeed: 325, zeroToSixty: 3.7 }
  ];
  getCars(): Observable<Car[]> {
    return of(this.cars.sort((a, b) => b.price - a.price));
  }

  getFeaturedCars(): Observable<Car[]> {
    return this.getCars().pipe(
      map(cars => cars.slice(0, 3))
    );
  }

  getCarById(id: number): Observable<Car | undefined> {
    const car = this.cars.find(c => c.id === id);
    return of(car);
  }
}