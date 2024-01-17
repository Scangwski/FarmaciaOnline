import {Component, Input} from '@angular/core';
import {Prodotto} from "../model/prodotto";

@Component({
  selector: 'app-pagina-prodotto',
  templateUrl: './pagina-prodotto.component.html',
  styleUrl: './pagina-prodotto.component.css'
})
export class PaginaProdottoComponent {

  @Input()prodotto?:Prodotto;
  azienda?: string;
  descrizione?: string;
  id?: string;
  immagine?: string;
  nome?: string;
  prezzo?: number;
  richiestaPerRicetta?: string;

}
