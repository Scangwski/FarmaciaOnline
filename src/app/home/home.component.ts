import { Component } from '@angular/core';

document.getElementById('loginButton')?.addEventListener('click', () => {
  window.location.href = '/login';
});

document.getElementById('carrelloButton')?.addEventListener('click', () => {
  window.location.href = '/carrello';
});

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() { }

}
