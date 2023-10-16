import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.routes').then(mod => mod.routes)},
  {path: 'admin', loadChildren: () => import('./admin/admin.routes').then(mod => mod.routes)},
];
