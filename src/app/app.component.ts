import { Component } from '@angular/core';
import { NbAuthService } from '@nebular/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   *
   */
  constructor(private authService:NbAuthService) {
  }
  get isLoggedIn(){
    return this.authService.isAuthenticated() 
  } 
  title = 'General Security';
}
