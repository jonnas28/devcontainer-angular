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
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthService, NbDummyAuthStrategy } from '@nebular/auth';

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
             // ...
             endpoint: '/api/Authenticate/login',
             method:'post'
           },
           register: {
             // ...
             endpoint: '/api/auth/register',
           },
        }),
      ],
      forms: {},
    }),
  ],
  providers: [
    NbColumnsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
