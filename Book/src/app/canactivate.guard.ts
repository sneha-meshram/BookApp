import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { RouterService } from './services/router.service';
@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {
  constructor(private authService: AuthenticationService,private router:RouterService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token = window.localStorage.getItem('bearerToken');
      if(!token){
        this.router.routeToLogin();
      } else {
        return true;
      }

   
  }
  

}


