import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbColumnsService, NbThemeModule } from '@nebular/theme';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PermissionsComponent } from './pages/roles-permission/permissions/permissions.component';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthService, NbDummyAuthStrategy, NbAuthJWTToken } from '@nebular/auth';
import { AuthGuardService } from './shared/guard/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PermissionsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    NbEvaIconsModule,
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
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
