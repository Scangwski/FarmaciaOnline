import { Component } from '@angular/core';
import {AuthServiceService} from "../services/auth-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  nome: string;
  cognome: string;
  email: string;
  password: string;
  tipoUtente: string;
  bannato: boolean;

  constructor(private auth:AuthServiceService) {
  }
}
