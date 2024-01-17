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
    var email = this.email.value;
    var pass = this.password.value;

    this.auth.login(email,pass);
  }
}
