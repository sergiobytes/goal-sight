import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'competitions',
    loadComponent: () => import('./competitions/components/layout/layout'),
  },
  {
    path: '**',
    redirectTo: 'competitions',
    pathMatch: 'full',
  },
];
