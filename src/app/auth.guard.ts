import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./services/auth.service";
import {fakeAsync} from "@angular/core/testing";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // code logic
    let isLogin = this.authService.isAuth;
    if (!isLogin) {
      // this.authService.isAuth = false;
      this.router.navigate(['login'])
    }
    console.log(isLogin)
    return true;

    // if (isLogin) {
    //    this.router.navigate(['admin/dashboard'])
    // } else {
    //    this.router.navigate(['login']);
    //   return false;
    // }
  }

}
