import { Routes } from '@angular/router';
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
  {path: 'auth',loadChildren: () => import('./auth/auth.routes').then(mod => mod.routes)},
  {
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: () => import('./admin/admin.routes').then(mod => mod.routes)},
];
