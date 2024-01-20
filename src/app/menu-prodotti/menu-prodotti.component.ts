import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-prodotti',
  templateUrl: './menu-prodotti.component.html',
  styleUrls: ['./menu-prodotti.component.css']
})
export class MenuProdottiComponent implements OnInit {

  ngOnInit(): void {
    // Questo assicura che lo script venga eseguito dopo che il DOM è completamente caricato

    // Dati delle opzioni (puoi ottenere questi dati da un database o da altre fonti)
    const opzioni: string[] = ["Opzione 1", "Opzione 2", "Opzione 3"];

    // Seleziona il menu a tendina
    const menuTendina = document.getElementById("menuTendina") as HTMLSelectElement;

    // Assicurati che l'elemento con l'id "menuTendina" sia stato trovato prima di procedere
    if (menuTendina) {
      // Rimuovi tutte le opzioni esistenti (se presenti)
      menuTendina.innerHTML = '';

      // Aggiungi dinamicamente le opzioni al menu a tendina
      opzioni.forEach(function (opzione) {
        const optionElement = document.createElement("option");
        optionElement.value = opzione.toLowerCase().replace(/\s/g, ''); // Converte in lowercase e rimuove gli spazi
        optionElement.text = opzione;
        menuTendina.add(optionElement);
      });

      // Aggiungi l'opzione "Seleziona un prodotto" in cima alla lista
      const defaultOption = document.createElement("option");
      defaultOption.value = ""; // Valore vuoto
      defaultOption.disabled = true;
      defaultOption.selected = true;
      defaultOption.hidden = true;
      defaultOption.text = "Seleziona un prodotto";
      menuTendina.add(defaultOption);
    } else {
      console.error("L'elemento con l'id 'menuTendina' non è stato trovato.");
    }
  }
}

