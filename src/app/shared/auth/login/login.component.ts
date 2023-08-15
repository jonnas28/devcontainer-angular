import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent implements OnInit{
  /**
   *
   */

  
  constructor(
    service: NbAuthService,
    cd: ChangeDetectorRef,
    router: Router,
    private authService: NbAuthService
  ) {
    super(service, {}, cd, router);
  }

  ngOnInit(): void {
    // Your custom initialization logic here
  }
  override login() {
    this.authService.authenticate('email') // Replace 'email' with your strategy name
      .subscribe((authResult) => {
        // Handle authentication result
      });
  }

}
