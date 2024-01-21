import {Component, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-prodotto',
  templateUrl: './pagina-prodotto.component.html',
  styleUrl: './pagina-prodotto.component.css'
})
export class PaginaProdottoComponent {
  ngOnInit(): void{
    const ricettaButton = document.getElementById('ricettaButton');
    const ricetta= document.getElementById('ricetta')
    const prezzo= document.getElementById('prezzo')
    const aggiungiCarrello= document.getElementById('aggiungiCarrello')
    const risparmio = document.getElementById('risparmio')

    if (ricettaButton) {
      ricettaButton.addEventListener('click', () => {
        // @ts-ignore
        const valoreInput = ricetta.value;
        if(valoreInput.length==8) {
          // @ts-ignore
          prezzo.textContent = '0€'
          // @ts-ignore
          risparmio.textContent= 'Risparmio del 100% (Ricetta)'
        }
      });
    }

    if(aggiungiCarrello){
      aggiungiCarrello.addEventListener('click',() =>{
        // @ts-ignore
        if(prezzo.textContent== '0€') {
          window.location.href = '/carrell0';
        } else {
          window.location.href = '/carrello';
        }

      });
    }

  }




}
