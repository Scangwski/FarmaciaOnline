import { Component } from '@angular/core';
import {AuthServiceService} from "../services/auth-service.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = new FormControl();
  password = new FormControl();

  constructor(private auth:AuthServiceService) {
  }

  doLogin() {
    var email = this.email.valueOf;
    var pass = this.password.valueOf;

    this.auth.login(email,pass);
  }
}
