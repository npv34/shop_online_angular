import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string
  formLogin: FormGroup
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  login() {
    console.log(this.formLogin)
    this.authService.login(this.formLogin.value).subscribe(res => {
        if (res.status === 'error') {
          this.message = res.message;
        } else {
          localStorage.setItem('token', res.data.token)
          this.router.navigate(['admin/dashboard'])
        }
    })
  }
}
