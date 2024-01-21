import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: '../carrello/carrello.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements AfterViewInit {
  counterValue: number = 1;

  ngAfterViewInit() {
    // Si esegue dopo che la vista del componente è stata completamente inizializzata
    const counterValueElement = document.getElementById("counterValue") as HTMLElement;
    const incrementButton = document.querySelector(".counter > .piu") as HTMLElement;
    const decrementButton = document.querySelector(".counter > .meno") as HTMLElement;

    // Inizializza il contatore
    counterValueElement.textContent = this.counterValue.toString();

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
    this.counterValue++;
    this.updateCounterValue();
  }

  decrementButton() {
    if (this.counterValue > 1) {
      this.counterValue--;
      this.updateCounterValue();
    }
  }

  private updateCounterValue() {
    const counterValueElement = document.getElementById("counterValue") as HTMLElement;
    counterValueElement.textContent = this.counterValue.toString();
  }
}
