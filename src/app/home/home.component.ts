import {Component, input} from '@angular/core';
import {windowToggle} from "rxjs";
import {AuthService} from "../auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  prodotti = [{id: 1, nome: 'Prodotto 1', prezzo: '29,99€'}];
  constructor(private authService: AuthService, private router: Router) { }

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

  vaiAllaPaginaProdotto(idProdotto: number) {
          this.router.navigate(['/prodotto', idProdotto]);
  }

    protected readonly windowToggle = windowToggle;
    protected readonly ToggleEvent = ToggleEvent;
  protected readonly input = input;
}
