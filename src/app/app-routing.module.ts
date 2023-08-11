import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path:'roles-permission/roles',
    loadChildren: () => import('./pages/roles-permission/roles/roles.module').then(m => m.RolesModule),
  },
  {
    path:'roles-permission/permissions',
    loadChildren: () => import('./pages/roles-permission/permissions/permissions.module').then(m => m.PermissionsModule),
  },
  {
    path : '' , redirectTo : 'dashboard' , pathMatch : 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
