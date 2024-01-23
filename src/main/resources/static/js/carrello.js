document.addEventListener('DOMContentLoaded', function() {
    function updateCartStatus() {
        var prodotti = document.querySelectorAll('.prodotto');
        var emptyCartSpan = document.querySelector('.prodotti > span');
        var prodottiContainer = document.querySelector('.prodotti');
        var numSpan = document.querySelector('.numprodotti .num');
        var acquistaButton = document.querySelector('.bacquista');
        var totaleProdottiSpan = document.querySelector('.prezzoprodotti .t2');
        var totaleSpedizioneSpan = document.querySelector('.prezzospedizione .S');
        var totaleSpan = document.querySelector('.prezzototale .tot');
        var numProdottiString = (prodotti.length === 1) ? 'prodotto' : 'prodotti';
        var totale = 0;

        // Calcola la somma dei prodotti nel carrello
        prodotti.forEach(function(prodottoDiv) {
            var prezzoSpan = prodottoDiv.querySelector('.prezzo span:last-child');
            if (prezzoSpan) {
                var prezzo = parseFloat(prezzoSpan.textContent.replace('€', '').replace(',', '.'));
                totale += prezzo;
            }
        });

        // Aggiorna l'importo totale prodotti nella pagina
        if (totaleProdottiSpan) {
            totaleProdottiSpan.textContent = (totale > 0) ? totale.toFixed(2) + '€' : '0.00€';
        }

        // Aggiorna l'importo totale spedizione nella pagina
        if (totaleSpedizioneSpan && totaleSpan) {
            var totaleSpedizione = 0;
            if (totale > 19.99) {
                totaleSpedizione = 0;
                totaleSpedizioneSpan.textContent = 'Gratis';
            } else {
                totaleSpedizione = 4.99;
                totaleSpedizioneSpan.textContent = '4.99€';
            }

            // Calcola e aggiorna il totale generale
            var totaleGenerale = totale + totaleSpedizione;
            
            // Imposta direttamente lo span totale con la condizione per "0.00€"
            totaleSpan.textContent = (totaleGenerale > 0) ? totaleGenerale.toFixed(2) + '€' : '0.00€';
        }

        // Gestisci l'aspetto del carrello vuoto
        if (emptyCartSpan) {
            if (prodotti.length === 0) {
                emptyCartSpan.style.display = 'block';
                prodottiContainer.classList.add('empty-cart');
                numSpan.textContent = '0 ' + numProdottiString;

                // Disabilita il pulsante "Acquista" e aggiunge la classe di stile
                if (acquistaButton) {
                    acquistaButton.onclick = null;
                    acquistaButton.style.cursor = 'not-allowed';
                    acquistaButton.classList.add('disabled-button');
                }
            } else {
                emptyCartSpan.style.display = 'none';
                prodottiContainer.classList.remove('empty-cart');
                numSpan.textContent = prodotti.length + ' ' + numProdottiString;

                // Abilita il pulsante "Acquista" e rimuove la classe di stile
                if (acquistaButton) {
                    acquistaButton.onclick = function() {
                        // Chiama la funzione per rimuovere tutti i div prodotti
                        var prodotti = document.querySelectorAll('.prodotto');
                        prodotti.forEach(function(prodottoDiv) {
                            removeProduct(prodottoDiv);
                        });

                        // Mostra l'avviso di ordine completato
                        var avvisoDiv = document.querySelector('.totaleavviso > .avviso');
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

    function removeProduct(prodottoDiv) {
        prodottoDiv.remove();
        updateCartStatus();
    }

    var prodottiContainer = document.querySelector('.prodotti');
    if (prodottiContainer) {
        prodottiContainer.addEventListener('click', function(event) {
            var closeIcon = event.target.closest('#closeIcon');
            if (closeIcon) {
                var prodottoDiv = closeIcon.closest('.prodotto');
                if (prodottoDiv) {
                    removeProduct(prodottoDiv);
                }
            }
        });
    }

    updateCartStatus();
});
