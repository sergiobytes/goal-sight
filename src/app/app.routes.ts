import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'competitions',
    loadComponent: () => import('./competitions/components/layout/layout'),
  },
  {
    path: 'competition/:id',
    loadComponent: () =>
      import('./competitions/components/views/competition/competition'),
  },
  {
    path: '**',
    redirectTo: 'competitions',
    pathMatch: 'full',
  },
];
