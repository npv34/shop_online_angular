import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = true;
  constructor(private router: Router) { }

  logout() {
    this.isAuth = false;
    this.router.navigate(['login'])
  }

}
