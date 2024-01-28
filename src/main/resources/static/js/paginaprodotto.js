
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#formRecensione form").onsubmit = function(e) {
        e.preventDefault();
        inviaRecensione();
    };
});

function mostraFormRecensione() {
    var form = document.getElementById('formRecensione');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

document.getElementById("homeButton").addEventListener("click", function (){
    window.location.href = '/home';
});

document.getElementById("carr").addEventListener("click",function (){
    window.location.href='/carrello';
})

window.addEventListener("click",function (){
    document.getElementById("ricettaButton").addEventListener("click", inserisciRicetta);
});
function Ricetta(codicericetta){
    this.codicericetta=codicericetta;
}

var prodottoSelezionato = JSON.parse(localStorage.getItem('prodottoSelezionato'));
console.log(prodottoSelezionato);

function caricaProdotto(){
    var nome= document.getElementById("nome").innerText=prodottoSelezionato.nome;
    var descrizione=document.getElementById("descrizione").innerText=prodottoSelezionato.descrizione;
    var prezzo= document.getElementById("prezzo").innerText=prodottoSelezionato.prezzo +"€";
}
function caricaRecensioni(nomeProdotto) {
    fetch('/recensioni?nomeprodotto=' + encodeURIComponent(nomeProdotto))
        .then(response => {
            if (!response.ok) {
                throw new Error('Si è verificato un errore: ' + response.statusText);
            }
            return response.json();
        })
        .then(recensioni => {
            // Pulisci le recensioni precedenti
            const containerRecensioni = document.getElementById('containerRecensioni');
            containerRecensioni.innerHTML = '';

            // Aggiungi le recensioni al DOM
            recensioni.forEach(recensione => {
                aggiungiRecensioneAlDOM(recensione.nomeutente, recensione.descrizione, recensione.valutazione);
            });
        })
        .catch(error => {
            console.error('Errore nel caricamento delle recensioni:', error);
        });
}

function aggiungiRecensioneAlDOM(nomeUtente, descrizione, valutazione) {
    const containerRecensioni = document.getElementById('containerRecensioni');
    const divRecensione = document.createElement('div');
    divRecensione.className = 'recensione';

    // Aggiungi altri elementi (nomeUtente, descrizione, valutazione) qui
    const nomeUtenteElement = document.createElement('p');
    nomeUtenteElement.textContent = nomeUtente;
    divRecensione.appendChild(nomeUtenteElement);

    const descrizioneElement = document.createElement('p');
    descrizioneElement.textContent = descrizione;
    divRecensione.appendChild(descrizioneElement);

    const valutazioneElement = document.createElement('p');
    valutazioneElement.textContent = 'Valutazione: ' + valutazione;
    divRecensione.appendChild(valutazioneElement);

    containerRecensioni.appendChild(divRecensione);
}

// Assumi che 'prodottoSelezionato' sia un oggetto che contiene le informazioni del prodotto, incluso il nome.
caricaRecensioni(prodottoSelezionato.nome);
function inserisciRicetta() {
    var ricettaValue = document.querySelector("#ricetta").value;

    if (!ricettaValue) {
        alert("Inserisci una ricetta valida");
        return;
    }
    var ricetta= new Ricetta(ricettaValue);
    document.getElementById("ricettaButton").className = "btn btn-primary btn-lg";
    $.ajax(
        {
            url: "/inserisciRicetta",
            type: "POST",
            contentType: "text/plain",
            data: ricettaValue,
            success: function () {
                var prezzo = document.getElementById("prezzo");
                var sconto= document.getElementById("sconto");
                prezzo.innerText="0€"
                sconto.innerText="Risparmio del 100% (Ricetta)"
                alert("Ricetta inserita con successo!");
            },
            error: function (xhr, status, error) {
                // Gestisci gli errori
                alert("Codice non valido o gia usato!");
            },
        });
}

function inviaRecensione() {
    var commento = document.querySelector("#formRecensione textarea[name='comment']").value;
    var valutazione = document.querySelector("#formRecensione input[name='rating']:checked").value;
    var nome = document.getElementById("nome").innerText;

    if (!commento || !valutazione) {
        alert("Per favore, assicurati che tutti i campi siano compilati. ");
        return;
    }

    $.ajax({
        url: "/inserisciRecensione",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        data: {
            nomeprodotto: nome,
            descrizione: commento,
            valutazione: valutazione,

        },
        success: function () {
                     alert("Recensione inviata con successo!");
                     console.log("Recensione aggiunta: ", commento, "Valutazione: ", valutazione);


                     // Crea un nuovo elemento per la recensione
                     var nuovaRecensione = document.createElement("div");
                     nuovaRecensione.className = "recensione";

                     // Aggiungi il commento e la valutazione alla recensione
                     var testoCommento = document.createElement("p");
                     testoCommento.textContent = commento;
                     nuovaRecensione.appendChild(testoCommento);

                     var testoValutazione = document.createElement("p");
                     testoValutazione.textContent = "Valutazione: " + valutazione;
                     nuovaRecensione.appendChild(testoValutazione);

                     // Aggiungi la recensione appena creata al container delle recensioni
                     var containerRecensioni = document.getElementById("containerRecensioni");
                     containerRecensioni.appendChild(nuovaRecensione);
                     console.log("Nuova recensione aggiunta al DOM:", nuovaRecensione);

                     // Pulisci il form dopo l'invio
                     document.querySelector("#formRecensione textarea[name='comment']").value = "";
                     document.querySelector("#formRecensione input[name='rating']:checked").checked = false;
                 },
        error: function (xhr, status, error) {
            // Gestisci gli errori
            alert("Errore durante l'invio della recensione. Stato: " + status + ", Errore: " + error);
        }
    });
}

function aggiungiNelCarrello(nomeProdotto)
{
    console.log();
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