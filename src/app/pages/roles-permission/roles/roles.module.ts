import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { NbCardModule, NbTreeGridModule } from '@nebular/theme';


@NgModule({
  declarations: [
    RolesComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbTreeGridModule,
    RolesRoutingModule,
  ]
})
export class RolesModule { }


