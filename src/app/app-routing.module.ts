import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent, NbLoginComponent, NbLogoutComponent, NbRegisterComponent, NbRequestPasswordComponent, NbResetPasswordComponent } from '@nebular/auth';

const routes: Routes = [
  {
    path:'auth',
    
    // component: NbAuthComponent,
    loadChildren:() => import('./shared/auth/auth.module').then(m => m.AuthModule)
  }
  // {
  //   path: 'auth',
  //   component: NbAuthComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'login',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'register',
  //       component: NbRegisterComponent,
  //     },
  //     {
  //       path: 'logout',
  //       component: NbLogoutComponent,
  //     },
  //     {
  //       path: 'request-password',
  //       component: NbRequestPasswordComponent,
  //     },
  //     {
  //       path: 'reset-password',
  //       component: NbResetPasswordComponent,
  //     },
  //   ],
  // },
  // {
  //   path:'dashboard',
  //   loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
  // },
  // {
  //   path:'roles-permission/roles',
  //   loadChildren: () => import('./pages/roles-permission/roles/roles.module').then(m => m.RolesModule),
  // },
  // {
  //   path:'roles-permission/permissions',
  //   loadChildren: () => import('./pages/roles-permission/permissions/permissions.module').then(m => m.PermissionsModule),
  // },
  // {
  //   path : '' , redirectTo : 'dashboard' , pathMatch : 'full'
  // },
  // {
  //   path: '**',
  //   redirectTo: 'dashboard'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
