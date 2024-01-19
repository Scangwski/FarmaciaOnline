import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  private timer: any;
  private timerDuration: number = 2 * 60; // Durata in secondi
  public timerInEsecuzione: boolean = false;
  public timerText: string = '';

  public bcodiceClick(emailValue: string): void {
    const divCodice = document.querySelector('.bcodice') as HTMLElement;
    const timerElement = document.querySelector('.timer') as HTMLElement;

    // Espressione regolare per verificare se l'indirizzo email è nel formato corretto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica che il campo email sia riempito e rispetti il formato
    if (!emailValue.trim() || !emailRegex.test(emailValue.trim())) {
      // Mostra un messaggio di errore al posto del timer e interrompi l'esecuzione
      this.timerText = 'Inserisci un\'email valida.';
      return;
    }

    if (!this.timerInEsecuzione) {
      // Avvia il timer solo se non è già in esecuzione
      divCodice.classList.add('disabled');
      timerElement.style.display = 'inline-block'; // Mostra il timer
      this.startTimer(timerElement);
      this.timerInEsecuzione = true;
    }
  }

  private startTimer(timerElement: HTMLElement): void {
    this.timer = setInterval(() => {
      const minutes = Math.floor(this.timerDuration / 60);
      const seconds = this.timerDuration % 60;

      // Formatta i minuti e i secondi come MM:SS
      this.timerText = `${(minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0' : '') + seconds}`;

      // Riduci il tempo rimanente
      this.timerDuration--;

      // Controlla se il timer è scaduto
      if (this.timerDuration < 0) {
        clearInterval(this.timer);
        this.timerText = 'Richiedi un nuovo codice';

        // Abilita nuovamente il pulsante bcodice
        const divCodice = document.querySelector('.bcodice') as HTMLElement;
        divCodice.classList.remove('disabled');

        // Resetta la durata del timer
        this.timerDuration = 2 * 60;

        // Imposta lo stato del timer come non in esecuzione
        this.timerInEsecuzione = false;
      }
    }, 1000);
  }
}

