document.addEventListener("DOMContentLoaded", function() {
    // Ottieni riferimenti agli elementi del counter
    const counterValueElement = document.getElementById("counterValue");
    const incrementButton = document.querySelector(".counter > .piu");
    const decrementButton = document.querySelector(".counter > .meno");

    // Inizializza il contatore
    let counterValue = 1;
    counterValueElement.textContent = counterValue;

    // Aggiungi event listener per l'incremento
    incrementButton.addEventListener("click", function() {
        counterValue++;
        counterValueElement.textContent = counterValue;
    });

    // Aggiungi event listener per il decremento
    decrementButton.addEventListener("click", function() {
        if (counterValue > 1) {
            counterValue--;
            counterValueElement.textContent = counterValue;
        }
    });
});