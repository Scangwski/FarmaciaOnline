import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Utente} from "../model/utente";

document.getElementById('registerButton')?.addEventListener('click', () => {
  window.location.href = '/registrazione';
});

document.getElementById('loginButton')?.addEventListener('click', () => {
  window.location.href = '/pagina-di-login';
});

document.getElementById('passwordimenticataButton')?.addEventListener('click', () => {
  window.location.href = '/passwordimenticata';
});


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient) {}

  accedi() {
    const email = (document.querySelector("#email") as HTMLInputElement)?.value;
    const password = (document.querySelector("#pass") as HTMLInputElement)?.value;

    if (!email || !password || email.trim() === '' || password.trim() === '') {
      this.error("Attenzione! Compila tutti i campi");
    } else {
      const utente: Utente = {
            nome: null,
            cognome: null,
            email,
            password,
            tipoUtente: null,
            bannato: false,
        }


      this.http.post('/doLogin', utente, { headers: { 'Content-Type': 'application/json' } })
          .subscribe(
              () => {
                const messageContainer = document.createElement('div');
                messageContainer.id = 'message_container';
                messageContainer.className = 'alert alert-primary d-flex align-items-center mb-3';
                messageContainer.setAttribute('role', 'alert');

                const icon = document.createElement('i');
                icon.className = 'bi bi-info-circle-fill me-2';
                icon.setAttribute('role', 'img');

                const message = document.createElement('div');
                message.id = 'message';
                message.textContent = 'Login effettuato';
                messageContainer.append(icon, message);

                document.querySelector('#login_form')?.before(messageContainer);

                setTimeout(() => {
                  document.getElementById('message_container')?.remove();
                }, 2300);
                setTimeout(() => {
                  window.location.href = 'http://localhost:8081';
                }, 1000);
              },
              () => {
                this.error('Controlla che i dati siano corretti!');
                setTimeout(() => {
                  window.location.href = 'http://localhost:8081/login';
                }, 1000);
              }
          );
    }
  }

  error(s: string) {
    const messageContainer = document.createElement('div');
    messageContainer.id = 'message_container';
    messageContainer.className = 'alert alert-danger d-flex align-items-center mb-3';
    messageContainer.setAttribute('role', 'alert');

    const icon = document.createElement('i');
    icon.className = 'bi bi-info-circle-fill me-2';
    icon.setAttribute('role', 'img');

    const message = document.createElement('div');
    message.id = 'message';
    message.textContent = s;
    messageContainer.append(icon, message);

    document.querySelector('#login_form')?.before(messageContainer);

    setTimeout(() => {
      document.getElementById('message_container')?.remove();
    }, 2300);
  }
}