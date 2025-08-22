import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'GARAGE | Home' },
  { path: 'collection', component: CollectionComponent, title: 'GARAGE | The Collection' },
  { path: 'collection/:id', component: CarDetailComponent, title: 'GARAGE | Vehicle Details' },
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];