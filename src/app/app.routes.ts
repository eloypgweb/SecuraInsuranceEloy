import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RenovacionesComponent } from './components/renovaciones/renovaciones.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'renovaciones', component: RenovacionesComponent },
  { path: '**', component: NotFoundPageComponent },
];
