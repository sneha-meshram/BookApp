import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }
  routeToDashboard() {
    this.router.navigate(['dashboard2']);
  }
  routeToLogin() {
    this.router.navigate(['login']);
  }
  routeToFavourite() {
    this.router.navigate(['favourite']);
  }
  routeToRecommend() {
    this.router.navigate(['recommend']);
  }

}
