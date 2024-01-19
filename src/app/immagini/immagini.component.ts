import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immagini',
  templateUrl: './immagini.component.html',
  styleUrls: ['./immagini.component.css']
})
export class ImmaginiComponent implements OnInit {
  altreImmaginiContainer: HTMLElement | null = null;
  immaginePrincipale: HTMLImageElement | null = null;
  currentIndex = 0;
  nuoveImmagini: NodeListOf<HTMLImageElement> | null = null;
  numImmagini = 0;

  ngOnInit(): void {
    this.altreImmaginiContainer = document.querySelector('.altreImmagini');
    this.immaginePrincipale = document.querySelector('.immagine > img');
    this.nuoveImmagini = document.querySelectorAll('.altraImmagineN > img');
    this.numImmagini = this.nuoveImmagini.length;

    this.setInitialSelected();

    if (this.altreImmaginiContainer) {
      this.altreImmaginiContainer.addEventListener('click', (event) => this.handleAltClick(event));
    }
  }

  setInitialSelected() {
    if (this.nuoveImmagini) {
      this.nuoveImmagini.forEach((img, index) => {
        if (index === this.currentIndex) {
          img.parentElement?.classList.add('selezionata');
        } else {
          img.parentElement?.classList.remove('selezionata');
        }
      });
    }
  }

  handleAltClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'svg') {
      const direction = target.getAttribute('data-direction');

      if (direction === 'destra') {
        this.currentIndex++;
      } else if (direction === 'sinistra') {
        this.currentIndex--;
      }

      this.currentIndex = (this.currentIndex + this.numImmagini) % this.numImmagini;

      // Rimuovi la classe 'selezionata' da tutte le nuove immagini
      if (this.nuoveImmagini) {
        this.nuoveImmagini.forEach((img, index) => {
          img.parentElement?.classList.remove('selezionata');
        });

        // Aggiungi la classe 'selezionata' all'immagine corrente
        this.nuoveImmagini[this.currentIndex]?.parentElement?.classList.add('selezionata');

        if (this.immaginePrincipale) {
          this.immaginePrincipale.src = this.nuoveImmagini[this.currentIndex]?.src || '';
        }
      }
    }
  }
}
