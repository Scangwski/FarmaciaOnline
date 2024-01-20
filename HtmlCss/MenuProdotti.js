document.addEventListener('DOMContentLoaded', function() {
    // Questo assicura che lo script venga eseguito dopo che il DOM è completamente caricato

    // Dati delle opzioni (puoi ottenere questi dati da un database o da altre fonti)
    var opzioni = ["Opzione 1", "Opzione 2", "Opzione 3"];

    // Seleziona il menu a tendina
    var menuTendina = document.getElementById("menuTendina");

    // Assicurati che l'elemento con l'id "menuTendina" sia stato trovato prima di procedere
    if (menuTendina) {
        // Rimuovi tutte le opzioni esistenti (se presenti)
        menuTendina.innerHTML = '';

        // Aggiungi dinamicamente le opzioni al menu a tendina
        opzioni.forEach(function(opzione) {
            var optionElement = document.createElement("option");
            optionElement.value = opzione.toLowerCase().replace(/\s/g, ''); // Converte in lowercase e rimuove gli spazi
            optionElement.text = opzione;
            menuTendina.add(optionElement);
        });

        // Aggiungi l'opzione "Seleziona un prodotto" in cima alla lista
        var defaultOption = document.createElement("option");
        defaultOption.value = ""; // Valore vuoto
        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.hidden = true;
        defaultOption.text = "Seleziona un prodotto";
        menuTendina.add(defaultOption);
    } else {
        console.error("L'elemento con l'id 'menuTendina' non è stato trovato.");
    }
});

