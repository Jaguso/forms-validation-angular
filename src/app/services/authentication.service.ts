import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = 'https://mighty-refuge-81707.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  addUser(email, firstname, lastname, password) {
    const user = {
      email: email,
      firstname: firstname,
      lastname: lastname,
      password: password
    };
    return this.http.post('${this.url}/auth/user/create', user);
  }
}
