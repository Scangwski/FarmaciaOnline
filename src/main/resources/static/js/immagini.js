document.addEventListener("DOMContentLoaded", function() {
    const altreImmaginiContainer = document.querySelector('.altreImmagini');
    const immaginePrincipale = document.querySelector('.prodotto > .immagini > .immagine > img');
    let currentIndex = 0;

    // Seleziona solo gli elementi <img> con l'ID "foto"
    const nuoveImmagini = document.querySelectorAll('img#foto');
    const numImmagini = nuoveImmagini.length;

    function setInitialSelected() {
        nuoveImmagini.forEach((img, index) => {
            if (index === currentIndex) {
                img.parentElement.classList.add('selezionata');
            } else {
                img.parentElement.classList.remove('selezionata');
            }
        });
    }

    setInitialSelected();

    altreImmaginiContainer.addEventListener('click', function(event) {
        if (event.target.tagName === 'svg') {
            const direction = event.target.getAttribute('data-direction');

            if (direction === 'destra') {
                currentIndex++;
            } else if (direction === 'sinistra') {
                currentIndex--;
            }

            currentIndex = (currentIndex + numImmagini) % numImmagini;

            // Rimuovi la classe 'selezionata' da tutte le nuove immagini
            nuoveImmagini.forEach((img, index) => {
                img.parentElement.classList.remove('selezionata');
            });

            // Aggiungi la classe 'selezionata' all'immagine corrente
            nuoveImmagini[currentIndex].parentElement.classList.add('selezionata');

            immaginePrincipale.src = nuoveImmagini[currentIndex].src;
        }
    });
});




