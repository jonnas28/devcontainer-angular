import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbColumnsService, NbDialogModule, NbThemeModule } from '@nebular/theme';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PermissionsComponent } from './pages/roles-permission/permissions/permissions.component';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from '@nebular/auth';
import { AuthGuardService } from './shared/guard/auth-guard.service';
import { ApiClient } from './shared/services/ApiClient';

@NgModule({
  declarations: [
    AppComponent,
    PermissionsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    NbEvaIconsModule,
    NbDialogModule.forChild(),
    NbThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'https://localhost:7117',
           login: {
             endpoint: '/api/Authenticate/login',
             method:'post',
             redirect:{
              success:'/dashboard',
              failure:'null'
             }
           },
           register: {
             // ...
             endpoint: '/api/auth/register',
             method:'post'
           },
           logout:{
            endpoint:'',
            redirect:{
              success:'/auth/login',
              failure:'null'
             }
           },
           token:{
            class:NbAuthJWTToken,
            key: 'token'
           }
        }),
      ],
      forms: {},
    }),
  ],
  providers: [
    NbColumnsService,
    AuthGuardService,
    ApiClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
