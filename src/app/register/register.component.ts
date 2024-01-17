import { Component } from '@angular/core';
import {Utente} from "../model/utente";

document.getElementById('loginButton')?.addEventListener('click', () => {
  window.location.href = '/login';
});

window.addEventListener('load', () => {
  document.getElementById('registerbtn')?.addEventListener('click', iscriviUtente);
});

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  iscriviUtente() {
    const nome = (document.querySelector('#nome') as HTMLInputElement)?.value;
    const cognome = (document.querySelector('#cognome') as HTMLInputElement)?.value;
    const email = (document.querySelector('#email') as HTMLInputElement)?.value;
    const password = (document.querySelector('#password') as HTMLInputElement)?.value;
    const confirm_password = (document.querySelector('#confirm_password') as HTMLInputElement)?.value;
    const tipoUtente = (document.querySelector('input[name="tipoUtente"]:checked') as HTMLInputElement)?.value;

    if (!nome || !cognome || !email || !password || !confirm_password) {
      document.getElementById('registerbtn')?.classList.add('btn', 'btn-secondary', 'btn-lg');
      this.error('Attenzione! Sono presenti campi vuoti');
    } else if (nome.trim() === '' || cognome.trim() === '' || email.trim() === '') {
      document.getElementById('registerbtn')?.classList.add('btn', 'btn-secondary', 'btn-lg');
      this.error('Attenzione! Sono presenti campi vuoti');
    } else if (this.validaEmail(email)) {
      document.getElementById('registerbtn')?.classList.add('btn', 'btn-secondary', 'btn-lg');
      this.error('Attenzione! Email non valida');
    } else if (password !== confirm_password) {
      document.getElementById('registerbtn')?.classList.add('btn', 'btn-secondary', 'btn-lg');
      this.error('Attenzione! Le password non coincidono');
    } else if (password.length < 6) {
      document.getElementById('registerbtn')?.classList.add('btn', 'btn-secondary', 'btn-lg');
      this.error('Attenzione! La password deve essere almeno di 6 caratteri');
    } else {
      document.getElementById('registerbtn')?.classList.add('btn', 'btn-primary', 'btn-lg');
      const utente: Utente = {
        nome,
        cognome,
        email,
        password,
        tipoUtente: tipoUtente || '',
        bannato: false
      };

      fetch('/doRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(utente)
      })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('utente già registrato');
            }
          })
          .then(() => {
            const messageContainer = document.createElement('div');
            messageContainer.id = 'message_container';
            messageContainer.className = 'alert alert-primary d-flex align-items-center mb-3';
            messageContainer.setAttribute('role', 'alert');

            const icon = document.createElement('i');
            icon.className = 'bi bi-info-circle-fill me-2';
            icon.setAttribute('role', 'img');

            const message = document.createElement('div');
            message.id = 'message';
            message.textContent = 'Registrazione effettuata.';
            messageContainer.append(icon, message);

            const login_button = document.createElement('div');
            login_button.className = 'btn btn-primary btn-sm float-right';
            login_button.textContent = 'Login';
            login_button.setAttribute('role', 'button');
            messageContainer.append(icon, login_button);
            login_button.addEventListener('click', () => {
              window.location.href = '/login';
            });

            document.getElementById('registration_form')?.before(messageContainer);

            setTimeout(() => {
              document.getElementById('message_container')?.fadeOut();
            }, 2000);
            setTimeout(() => {
              document.getElementById('message_container')?.remove();
            }, 2300);
          })
          .catch(() => {
            const messageContainer = document.createElement('div');
            messageContainer.id = 'message_container';
            messageContainer.className = 'alert alert-danger d-flex align-items-center mb-3';
            messageContainer.setAttribute('role', 'alert');

            const icon = document.createElement('i');
            icon.className = 'bi bi-info-circle-fill me-2';
            icon.setAttribute('role', 'img');

            const message = document.createElement('div');
            message.id = 'message';
            message.textContent = 'utente già registrato';
            messageContainer.append(icon, message);
            document.getElementById('registration_form')?.before(messageContainer);

            setTimeout(() => {
              document.getElementById('message_container')?.fadeOut();
            }, 2000);
            setTimeout(() => {
              document.getElementById('message_container')?.remove();
            }, 2300);
          });
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
    document.getElementById('registration_form')?.before(messageContainer);

    setTimeout(() => {
      document.getElementById('message_container')?.fadeOut();
    }, 2000);
    setTimeout(() => {
      document.getElementById('message_container')?.remove();
    }, 2300);
  }

  decodeJWTResponse(data: string) {
    const tokens = data.split('.');
    return JSON.parse(atob(tokens[1]));
  }

  validaEmail(email: string) {
    const regexp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return regexp.test(email);
  }
}
