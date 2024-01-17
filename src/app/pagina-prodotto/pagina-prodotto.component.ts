import {Component, Input} from '@angular/core';
import {Prodotto} from "../model/prodotto";

@Component({
  selector: 'app-pagina-prodotto',
  templateUrl: './pagina-prodotto.component.html',
  styleUrl: './pagina-prodotto.component.css'
})
export class PaginaProdottoComponent {

  @Input()prodotto?:Prodotto
  private _azienda: string;
  private _descrizione: string;
  private _id: string;
  private _immagine: string;
  private _nome: string;
  private _prezzo: number;
  private _richiestaPerRicetta: string;

}
