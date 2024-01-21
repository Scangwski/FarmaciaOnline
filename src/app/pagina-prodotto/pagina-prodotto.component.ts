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
    if (ricettaButton) {
      ricettaButton.addEventListener('click', () => {
        // @ts-ignore
        const valoreInput = ricetta.value;
        if(valoreInput.length==8) {
          // @ts-ignore
          prezzo.textContent = '0€'
        }


      });
    }

  }




}
