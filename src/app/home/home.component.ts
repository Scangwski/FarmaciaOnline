import { Component } from '@angular/core';
import {windowToggle} from "rxjs";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
      loginButton.addEventListener('click', () => {
        window.location.href = '/login';
      });
    }

    const carrelloButton = document.getElementById('carrelloButton');
    if (carrelloButton) {
      carrelloButton.addEventListener('click', () => {
        window.location.href = '/carrello';
      });
    }
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  getUsername(): string {
    return this.authService.getUsername() ?? "Utente non autenticato";

  }

    protected readonly windowToggle = windowToggle;
    protected readonly ToggleEvent = ToggleEvent;
}
