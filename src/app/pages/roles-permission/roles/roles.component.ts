import { Component, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { catchError, lastValueFrom, takeUntil } from 'rxjs';
import { PageDestroy } from 'src/app/shared/classes/page-destroy.class';
import { ApiClient } from 'src/app/shared/services/ApiClient';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent extends PageDestroy implements OnInit{

  columns = [ 'name', 'normalizedName'];

  constructor(
    private apiClient:ApiClient,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<any>)
  {
    super();
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }
  data:any;
  ngOnInit(): void {
    this.refreshData();
    
  }
  dataSource: NbTreeGridDataSource<any>;
  async refreshData() {
    await lastValueFrom(
    this.apiClient.rolesGET(1,10,undefined)
     .pipe(takeUntil(this.unsubscribe$))
     .pipe(catchError(() => {throw 'Data loading error' }))
    ).then((response) => {
      this.data = response.result;
      console.log(response.result![0].name)

      // const item = response?.result;
      // return { data: item ,totalCount: response.pageMetadata?.totalCount}
    });
  }

  name(params:any) {
    console.log(params)
  }
}