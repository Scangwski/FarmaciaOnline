document.getElementById('nome').addEventListener('click', function (){
  setFiltro('nome');
  ricercaPerFiltro(getFiltro(), getOrdinamento());
});

document.getElementById('prezzo').addEventListener('click', function (){
  setFiltro('prezzo');
  ricercaPerFiltro(getFiltro(), getOrdinamento());
});

document.getElementById('sconto').addEventListener('click', function (){
  setFiltro('sconto');
  ricercaPerFiltro(getFiltro(), getOrdinamento());
});

// ordinamento di default
let ordinamentoCorrente = 'crescente';
let filtroCorrente = undefined;
function getFiltro() {
  return filtroCorrente;
}
function getOrdinamento() {
  return ordinamentoCorrente;

}
function setFiltro(filtro) {
  filtroCorrente = filtro;
}
function setOrdinamento(ordinamento) {
  ordinamentoCorrente = ordinamento;
}


// utente seleziona crescente o decrescente
var dropdownItems = document.querySelectorAll('.dropdown-content a');
dropdownItems.forEach(function(item) {
  item.addEventListener('click', function() {
    setOrdinamento(item.getAttribute('data-text').toLowerCase());
    console.log("cliccato su: " + getOrdinamento());
    ricercaPerFiltro(getFiltro(), getOrdinamento());
  });
});

// funzione chiamata AJAX al server per la ricerca
function ricercaPerFiltro(filtro, ordinamento) {
  if(filtro === undefined){
    alert("seleziona prima: nome, prezzo o sconto");
  }
  else {
    alert("Filtro selezionato: " + filtro + "\nOrdine selezionato: " + ordinamento);
    return fetch('/ricerca?filtro=' + filtro + '&ordinamento=' + ordinamento, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Errore nella richiesta: ${response.status} - ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          const container = visualizzaRisultati(data);
          document.getElementById("visualizzaProdotti").appendChild(container);
        })
        .catch(error => {
          console.error('Errore durante la chiamata AJAX:', error);
          throw error;
        });
  }
}



let paginaCorrente = 1;

function cambiaPagina(direction) {
  if (direction === 'next') {
    paginaCorrente++;
  } else if (direction === 'prev' && paginaCorrente > 1) {
    paginaCorrente--;
  }

  // Aggiorna il numero della pagina visualizzato
  const paginaAttualeElement = document.getElementById('paginaAttuale');
  const hiddenReferenceSpan = document.querySelector('.hidden-reference-span');

  paginaAttualeElement.innerText = paginaCorrente;

  // Copia gli stili dall'elemento di riferimento nascosto
  const stiliTestoOriginale = getComputedStyle(hiddenReferenceSpan);
  paginaAttualeElement.style.color = stiliTestoOriginale.color;
  paginaAttualeElement.style.fontSize = stiliTestoOriginale.fontSize;
  paginaAttualeElement.style.fontWeight = stiliTestoOriginale.fontWeight;

  // Aggiungi qui la logica per caricare i prodotti della pagina corrente
  // Puoi chiamare una funzione che gestisce il caricamento dei prodotti in base alla pagina corrente
  // es. caricaProdotti(paginaCorrente);
  // ...

  // Puoi anche gestire la visualizzazione/nascondere delle frecce di navigazione
  // in base alla pagina corrente
  //gestisciVisibilitaFrecce();
}

function gestisciVisibilitaFrecce() {
  const frecces = document.querySelector('.frecces');
  const frecced = document.querySelector('.frecced');

  // Imposta la visibilità della freccia sinistra in base alla pagina corrente
  frecces.style.display = paginaCorrente === 1 ? 'none' : 'block';

  // Imposta la visibilità della freccia destra in base alla pagina corrente
  // Aggiungi qui la logica per gestire la visibilità delle frecce in base al numero totale di pagine
  frecced.style.display = 'block';
}


function visualizzaRisultati(prodotto) {

  let doc = document.createElement("div");
  doc.innerHTML = `<hr class="my-4">
        <div class="prodotto">
            <div class="immaginetesto">
                <div class="immagine">
                    <img src="${prodotto.immagine}">
                </div>
                <span>${prodotto.nome}</span>
            </div>
            <div class="prezzoecarrello">
                <div class="prezzo">
                    <span class="span1">${prodotto.prezzo.toFixed(2)}€</span>
                    <span class="span2">${(prodotto.prezzo * 0.85).toFixed(2)}€</span>
                </div>
                <div class="bcarrello" onclick="aggiungiNelCarrello("${prodotto.nome}")">
                    <span>Aggiungi al Carrello</span>
                </div>
            </div>
        </div>
        <hr class="my-4">`;
  return doc;
}

function aggiungiNelCarrello(nome) {
  $.ajax(
      {
        type:"POST",
        url:"/aggiungiNelCarrello",
        contentType: "application/json",
        data: JSON.stringify(prodottoSelezionato.nome),
        success: function()
        {
          alert("Prodotto correttamente aggiunto nel carrello!");
        }
      })
}