import { Component } from '@angular/core';
import { Recensioni} from "../model/recensione";
import {ProdottoServiceService} from "../prodotto-service.service";

@Component({
  selector: 'app-recensioni',
  templateUrl: './recensioni.component.html',
  styleUrl: './recensioni.component.css'
})
export class RecensioniComponent {
  recensioni?:Recensioni[]

  constructor(private ristService:ProdottoServiceService){}

  ngOnInit(): void {
    this.ristService.recensioni().subscribe(rec => this.recensioni = rec);
  }
}
