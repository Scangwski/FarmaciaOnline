import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.updateCartStatus();

    const prodottiContainer = document.querySelector('.prodotti') as HTMLElement | null;
    if (prodottiContainer) {
      prodottiContainer.addEventListener('click', (event) => {
        const closeIcon = (event.target as HTMLElement).closest('#closeIcon');

        if (closeIcon) {

          // ho aggiunto il casting as HTMLElement al risultato di querySelector
          // e anche al risultato di closest('.prodotto') per assicurarmi che TypeScript sappia che si tratta di elementi HTML.
          const prodottoDiv = closeIcon.closest('.prodotto') as HTMLElement | null;
          if (prodottoDiv) {
            this.removeProduct(prodottoDiv);
          }
        }
      });
    }
  }

  updateCartStatus() {
    const prodotti = document.querySelectorAll('.prodotto');
    const emptyCartSpan = document.querySelector('.prodotti > span') as HTMLElement | null;
    const prodottiContainer = document.querySelector('.prodotti') as HTMLElement | null;
    const numSpan = document.querySelector('.numprodotti .num');
    const acquistaButton = document.querySelector('.bacquista') as HTMLButtonElement | null;
    const totaleProdottiSpan = document.querySelector('.prezzoprodotti .t2');
    const totaleSpedizioneSpan = document.querySelector('.prezzospedizione .S');
    const totaleSpan = document.querySelector('.prezzototale .tot');
    const numProdottiString = (prodotti.length === 1) ? 'prodotto' : 'prodotti';
    let totale = 0;

    // Calcola la somma dei prodotti nel carrello
    prodotti.forEach((prodottoDiv) => {
      const prezzoSpan = prodottoDiv.querySelector('.prezzo span:last-child');
      if (prezzoSpan) {
        const prezzo = parseFloat(prezzoSpan.textContent!.replace('€', '').replace(',', '.'));
        totale += prezzo;
      }
    });

    // Aggiorna l'importo totale prodotti nella pagina
    if (totaleProdottiSpan) {
      totaleProdottiSpan.textContent = (totale > 0) ? totale.toFixed(2) + '€' : '0.00€';
    }

    // Aggiorna l'importo totale spedizione nella pagina
    if (totaleSpedizioneSpan && totaleSpan) {
      let totaleSpedizione = 0;
      if (totale > 19.99) {
        totaleSpedizione = 0;
        totaleSpedizioneSpan.textContent = 'Gratis';
      } else {
        totaleSpedizione = 4.99;
        totaleSpedizioneSpan.textContent = '4.99€';
      }

      // Calcola e aggiorna il totale generale
      const totaleGenerale = totale + totaleSpedizione;

      // Imposta direttamente lo span totale con la condizione per "0.00€"
      totaleSpan.textContent = (totaleGenerale > 0) ? totaleGenerale.toFixed(2) + '€' : '0.00€';
    }

    // Gestisci l'aspetto del carrello vuoto
    if (emptyCartSpan) {
      if (prodotti.length === 0) {
        emptyCartSpan.style.display = 'block';
        prodottiContainer!.classList.add('empty-cart');
        numSpan!.textContent = '0 ' + numProdottiString;

        // Disabilita il pulsante "Acquista" e aggiunge la classe di stile
        if (acquistaButton) {
          acquistaButton.onclick = null;
          acquistaButton.style.cursor = 'not-allowed';
          acquistaButton.classList.add('disabled-button');
        }
      } else {
        emptyCartSpan.style.display = 'none';
        prodottiContainer!.classList.remove('empty-cart');
        numSpan!.textContent = prodotti.length + ' ' + numProdottiString;

        // Abilita il pulsante "Acquista" e rimuove la classe di stile
        if (acquistaButton) {
          acquistaButton.onclick = () => {
            // Chiama la funzione per rimuovere tutti i div prodotti
            const prodotti = document.querySelectorAll('.prodotto') as NodeListOf<HTMLElement>;
            prodotti.forEach((prodottoDiv) => {
              this.removeProduct(prodottoDiv);
            });

            // Mostra l'avviso di ordine completato
            const avvisoDiv = document.querySelector('.totaleavviso > .avviso') as HTMLElement | null;
            if (avvisoDiv) {
              avvisoDiv.style.display = 'flex';
            }
          };
          acquistaButton.style.cursor = 'pointer';
          acquistaButton.classList.remove('disabled-button');
        }
      }
    }
  }

  removeProduct(prodottoDiv: HTMLElement) {
    prodottoDiv.remove();
    this.updateCartStatus();
  }
}
