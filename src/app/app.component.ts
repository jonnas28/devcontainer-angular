import { Component, OnInit } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { PageDestroy } from './shared/classes/page-destroy.class';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends PageDestroy implements OnInit {
  /**
   *
   */
  constructor(private authService:NbAuthService) {
    super();
  }
  isLoggedIn:boolean=true;
  async ngOnInit(): Promise<void> {
    // this.isLoggedIn = await lastValueFrom(this.authService.isAuthenticated())
  }
  title = 'General Security';
}
