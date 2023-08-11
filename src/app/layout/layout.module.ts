import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NbActionsModule, NbButtonModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbToggleModule } from '@nebular/theme';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbToggleModule,
    NbActionsModule,
    NbIconModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
