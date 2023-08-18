import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatagridComponent } from './datagrid.component';
import { NbTreeGridModule } from '@nebular/theme';



@NgModule({
  declarations: [
    DatagridComponent
  ],
  imports: [
    CommonModule,
    NbTreeGridModule,
  ],
  exports:[
    DatagridComponent
  ]
})
export class DatagridModule { }
