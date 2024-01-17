import {Component, Input, OnInit} from '@angular/core';
import {Prodotto} from "../model/prodotto";
import {ProdottoServiceService} from "../prodotto-service.service";

@Component({
  selector: 'app-pagina-prodotti',
  templateUrl: './pagina-prodotti.component.html',
  styleUrl: './pagina-prodotti.component.css'
})
export class PaginaProdottiComponent implements OnInit{
  @Input()stato?:string
  prodotti?:Prodotto[]

  constructor(private prodService:ProdottoServiceService) {
  }

  ngOnInit() {
    this.getProdotti();
  }

  getProdotti() {
    // ottenere i prodotti in base a cosa?
  }

}
