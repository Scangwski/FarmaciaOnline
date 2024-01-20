import { Component } from '@angular/core';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrl: './counter2.component.css'
})
export class Counter2Component {
  counterValue2: number = 1;

  ngAfterViewInit() {
    // Si esegue dopo che la vista del componente è stata completamente inizializzata
    const counterValueElement = document.getElementById("counterValue") as HTMLElement;
    const incrementButton = document.querySelector(".counter2 > .piu2") as HTMLElement;
    const decrementButton = document.querySelector(".counter2 > .meno2") as HTMLElement;

    // Inizializza il contatore
    counterValueElement.textContent = this.counterValue2.toString();

    // Aggiungi event listener per l'incremento
    incrementButton.addEventListener("click", () => {
      this.incrementButton();
    });

    // Aggiungi event listener per il decremento
    decrementButton.addEventListener("click", () => {
      this.decrementButton();
    });
  }

  incrementButton() {
    this.counterValue2++;
    this.updateCounterValue();
  }

  decrementButton() {
    if (this.counterValue2 > 1) {
      this.counterValue2--;
      this.updateCounterValue();
    }
  }

  private updateCounterValue() {
    const counterValueElement = document.getElementById("counterValue") as HTMLElement;
    counterValueElement.textContent = this.counterValue2.toString();
  }
}


