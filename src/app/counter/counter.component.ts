import { Component } from '@angular/core';

document.addEventListener("DOMContentLoaded", () => {
  // Ottieni riferimenti agli elementi del counter
  const counterValueElement = document.getElementById("counterValue") as HTMLElement;
  const incrementButton = document.querySelector(".counter > .piu") as HTMLElement;
  const decrementButton = document.querySelector(".counter > .meno") as HTMLElement;

  // Inizializza il contatore
  let counterValue = 1;
  counterValueElement.textContent = counterValue.toString();

  // Aggiungi event listener per l'incremento
  incrementButton.addEventListener("click", () => {
    counterValue++;
    counterValueElement.textContent = counterValue.toString();
  });

  // Aggiungi event listener per il decremento
  decrementButton.addEventListener("click", () => {
    if (counterValue > 1) {
      counterValue--;
      counterValueElement.textContent = counterValue.toString();
    }
  });
});

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

}
