document.addEventListener("DOMContentLoaded", function() {
    // Ottieni riferimenti agli elementi del counter
    const counterValueElement = document.getElementById("counterValue2");
    const incrementButton = document.querySelector(".counter2 > .piu2");
    const decrementButton = document.querySelector(".counter2 > .meno2");

    // Inizializza il contatore
    let counterValue2 = 1;
    counterValueElement.textContent = counterValue2;

    // Aggiungi event listener per l'incremento
    incrementButton.addEventListener("click", function() {
        counterValue2++;
        counterValueElement.textContent = counterValue2;
    });

    // Aggiungi event listener per il decremento
    decrementButton.addEventListener("click", function() {
        if (counterValue2 > 1) {
            counterValue2--;
            counterValueElement.textContent = counterValue2;
        }
    });
});