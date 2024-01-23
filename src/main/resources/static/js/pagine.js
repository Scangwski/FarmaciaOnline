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