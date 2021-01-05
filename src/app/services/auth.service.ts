import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://api.tinhocdongian.com/api'
  constructor(private router: Router,
              private http: HttpClient) { }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }

  login(data): Observable<any> {
    return this.http.post(this.url + '/login', data, );
  }

}
