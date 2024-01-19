import { Component } from '@angular/core';

@Component({
  selector: 'app-pagine',
  templateUrl: './pagine.component.html',
  styleUrls: ['./pagine.component.css']
})
export class PagineComponent {
  paginaCorrente: number = 1;

  cambiaPagina(direction: 'next' | 'prev'): void {
    if (direction === 'next') {
      this.paginaCorrente++;
    } else if (direction === 'prev' && this.paginaCorrente > 1) {
      this.paginaCorrente--;
    }

    // Aggiorna il numero della pagina visualizzato
    const paginaAttualeElement = document.getElementById('paginaAttuale');
    const hiddenReferenceSpan = document.querySelector('.hidden-reference-span') as HTMLElement;

    if (paginaAttualeElement) {
      paginaAttualeElement.innerText = this.paginaCorrente.toString();

      // Copia gli stili dall'elemento di riferimento nascosto
      const stiliTestoOriginale = getComputedStyle(hiddenReferenceSpan);
      if (paginaAttualeElement) {
        paginaAttualeElement.style.color = stiliTestoOriginale.color;
        paginaAttualeElement.style.fontSize = stiliTestoOriginale.fontSize;
        paginaAttualeElement.style.fontWeight = stiliTestoOriginale.fontWeight;
      }
    }

    // Aggiungi qui la logica per caricare i prodotti della pagina corrente
    // Puoi chiamare una funzione che gestisce il caricamento dei prodotti in base alla pagina corrente
    // es. this.caricaProdotti(this.paginaCorrente);
    // ...

    // Puoi anche gestire la visualizzazione/nascondere delle frecce di navigazione
    // in base alla pagina corrente
    //this.gestisciVisibilitaFrecce();
  }

  gestisciVisibilitaFrecce(): void {
    const frecces = document.querySelector('.frecces') as HTMLElement;
    const frecced = document.querySelector('.frecced') as HTMLElement;

    // Imposta la visibilità della freccia sinistra in base alla pagina corrente
    if (frecces) {
      frecces.style.display = this.paginaCorrente === 1 ? 'none' : 'block';

      // Imposta la visibilità della freccia destra in base alla pagina corrente
      // Aggiungi qui la logica per gestire la visibilità delle frecce in base al numero totale di pagine
      if (frecced) {
        frecced.style.display = 'block';
      }
    }
  }
}

