import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RenovacionesComponent } from './components/renovaciones/renovaciones.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

// CON LAZY LOADING

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((h) => h.HomeComponent),
  },
  {
    path: 'renovaciones',
    loadComponent: () =>
      import('./components/renovaciones/renovaciones.component').then(
        (r) => r.RenovacionesComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/not-found-page/not-found-page.component').then(
        (n) => n.NotFoundPageComponent
      ),
  },
];

// SIN LAZY LOADING

// export const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'renovaciones', component: RenovacionesComponent },
//   { path: '**', component: NotFoundPageComponent },
// ];
