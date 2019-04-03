import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  createForm: FormGroup;

  constructor(private authService: AuthenticationService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      email: '',
      firstname: '',
      lastname: '',
      password: ''
    });
  }

  addUser(email, firstname, lastname, password) {
    this.authService
      .addUser(email, firstname, lastname, password)
      .subscribe((response) => {
        this.router.navigate(['/login']);
        console.log(response["success"]);
      })
    console.log(this.createForm.value);
  }

  ngOnInit() {
  }

}
