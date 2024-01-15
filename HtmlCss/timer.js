var timer;
var timerDuration = 2 * 60; // Durata in secondi
var timerInEsecuzione = false;

function bcodiceClick() {
  var divCodice = document.querySelector('.bcodice');
  var emailContainer = document.querySelector('.email');
  var inputEmail = document.querySelector('.email input');
  var timerElement = document.querySelector('.timer');

  // Espressione regolare per verificare se l'indirizzo email è nel formato corretto
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verifica che il campo email sia riempito e rispetti il formato
  if (!inputEmail.value.trim() || !emailRegex.test(inputEmail.value.trim())) {
    // Mostra un messaggio di errore al posto del timer e interrompi l'esecuzione
    timerElement.style.display = 'inline-block';
    timerElement.textContent = 'Inserisci un\'email valida.';
    return;
  }

  if (!timerInEsecuzione) {
    // Avvia il timer solo se non è già in esecuzione
    divCodice.classList.add('disabled');
    timerElement.style.display = 'inline-block'; // Mostra il timer
    startTimer(timerElement);
    timerInEsecuzione = true;
  }
}

function startTimer(timerElement) {
  timer = setInterval(function() {
    var minutes = Math.floor(timerDuration / 60);
    var seconds = timerDuration % 60;

    // Formatta i minuti e i secondi come MM:SS
    timerElement.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

    // Riduci il tempo rimanente
    timerDuration--;

    // Controlla se il timer è scaduto
    if (timerDuration < 0) {
      clearInterval(timer);
      timerElement.textContent = 'Richiedi un nuovo codice';

      // Abilita nuovamente il pulsante bcodice
      var divCodice = document.querySelector('.bcodice');
      divCodice.classList.remove('disabled');

      // Resetta la durata del timer
      timerDuration = 2 * 60;

      // Imposta lo stato del timer come non in esecuzione
      timerInEsecuzione = false;
    }
  }, 1000);
}
