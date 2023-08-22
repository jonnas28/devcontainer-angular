import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: NbAuthService,private router: Router) {
  }

  async canActivate() {
    return true;
    // let res = await lastValueFrom(this.authService.isAuthenticated())
    // if (res) {
    //   return true;
    // } else {
    //   this.router.navigate(['/auth/login']); // Redirect to login if not authenticated
    //   return false;
    // }
  }
}
