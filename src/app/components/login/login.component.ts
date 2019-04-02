import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

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

  authLogin() {
    console.log(this.createForm.value);
  }

  onSubmit() {
    console.log(this.createForm.value)
  }

  ngOnInit() {
  }

}
