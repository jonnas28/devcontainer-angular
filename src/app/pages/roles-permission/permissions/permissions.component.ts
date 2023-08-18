import { Component, OnInit } from '@angular/core';
import { lastValueFrom, takeUntil } from 'rxjs';
import { PageDestroy } from 'src/app/shared/classes/page-destroy.class';
import { ApiClient } from 'src/app/shared/services/ApiClient';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent extends PageDestroy implements OnInit{
  /**
   *
   */
  constructor(private apiClient:ApiClient) {
    super();
  }
  async ngOnInit(): Promise<void> {
    this.refreshData();
  }
  async refreshData() {
    const res = await lastValueFrom(this.apiClient.rolesGET(10,10,undefined)
      .pipe(takeUntil(this.unsubscribe$))
    )

    if(res.statusCode === 200){
      console.log(res)
    }
  }

}
