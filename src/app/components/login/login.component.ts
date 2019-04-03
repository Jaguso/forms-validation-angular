import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  createForm: FormGroup;

  constructor(private authService: AuthenticationService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  authLogin(email, password) {
    this.authService
      .authenticateUser(email, password)
      .subscribe((response) => {
        localStorage.setItem("token", response["token"]);
        localStorage.setItem(
          "userId",
          this.getDecodeAccessToken(localStorage.getItem("token")).id)
      })
  }

  getDecodeAccessToken(token: string): any {
    return jwt_decode(token);
  }

  ngOnInit() {
  }

}
