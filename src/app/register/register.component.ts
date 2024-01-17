import {Component, Input, OnInit} from '@angular/core';
import {AuthServiceService} from "../services/auth-service.service";
import {Utente} from "../model/utente";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  @Input()regUtente?:Utente;
  nome?: string;
  cognome?: string;
  email?: string;
  password?: string;
  tipoUtente?: string;
  bannato?: boolean;

  constructor(private auth:AuthServiceService) {
  }
}
