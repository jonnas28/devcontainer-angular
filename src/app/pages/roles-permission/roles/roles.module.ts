import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { NbCardModule, NbTreeGridModule } from '@nebular/theme';
import { DatagridModule } from 'src/app/shared/components';


@NgModule({
  declarations: [
    RolesComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbTreeGridModule,
    RolesRoutingModule,
    DatagridModule
  ]
})
export class RolesModule { }


