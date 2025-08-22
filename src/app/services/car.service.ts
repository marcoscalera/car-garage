import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

private cars: Car[] = [
  {
    id: 1,
    brand: 'Koenigsegg',
    model: 'Jesko Absolut',
    year: 2024,
    price: 3000000,
    imageUrl: 'https://imgs.search.brave.com/FgQpE4HJPqG30CvCGunN3EFS6zGhBuhcU-6NOxFHkdw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaGFu/Z2VzdHJ5LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/Mi9iZmYzNDdhMTRj/ZDE5Y2IxX29yZy1t/aW4tMTAyNHg2OTIu/anBn'
  },
  {
    id: 2,
    brand: 'Pagani',
    model: 'Utopia',
    year: 2024,
    price: 2500000,
    imageUrl: 'https://imgs.search.brave.com/U5ub6KnEwjg0mKrluqIGFHoXt1Xws9iStT-ix-uqjeM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2Y5L1BhZ2FuaV9V/dG9waWFfKDUzMDQ4/MzE3MzU0KV8oY3Jv/cHBlZCkuanBn'
  },
  {
    id: 3,
    brand: 'Bugatti',
    model: 'Chiron Super Sport',
    year: 2023,
    price: 3800000,
    imageUrl: 'https://imgs.search.brave.com/5qZuerGqt422LWNmoJAlRPNyg-MNoG-dR3cVrm2suBM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3VwZXJjYXJzLm5l/dC9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA3LzIw/MjEtQnVnYXR0aS1D/aGlyb24tU3VwZXIt/U3BvcnQtMzAwLTAw/My0xMDgwLmpwZw'
  }
];

  getCars(): Observable<Car[]> {
    return of(this.cars);
  }

  getCarById(id: number): Observable<Car | undefined> {
    const car = this.cars.find(c => c.id === id);
    return of(car);
  }
}