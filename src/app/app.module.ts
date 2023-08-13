import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbColumnsService, NbThemeModule } from '@nebular/theme';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PermissionsComponent } from './pages/roles-permission/permissions/permissions.component';

@NgModule({
  declarations: [
    AppComponent,
    PermissionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot(),
  ],
  providers: [
    NbColumnsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
