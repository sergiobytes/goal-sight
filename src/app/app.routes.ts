import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'competitions',
    loadComponent: () => import('./competitions/layout/layout'),
  },
  {
    path: 'teams',
    loadComponent: () => import('./teams/layout/layout'),
  },
  {
    path: 'competition/:id',
    loadComponent: () => import('./competitions/views/competition/competition'),
  },
  {
    path: 'team/:id',
    loadComponent: () => import('./teams/views/team/team'),
  },
  {
    path: '**',
    redirectTo: 'competitions',
    pathMatch: 'full',
  },
];
