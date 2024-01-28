
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

document.getElementById("profilobtn").addEventListener("click", function (){
    window.location.href = '/paginautente';
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
    var urlImmagine="oooooooooooooooooaa"
    var imgElement = document.getElementById("img");
    var nuovoUrl = prodottoSelezionato.immagine;
    imgElement.setAttribute("src", nuovoUrl);


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

function aggiungiRecensioneAlDOM(nomeUtente, testoRecensione, valutazione) {
    const containerRecensioni = document.getElementById('containerRecensioni');
    const divRecensione = document.createElement('div');
    divRecensione.className = 'singolarecensione';

    // Aggiungi il testo della recensione
    const testoElement = document.createElement('span');
    testoElement.textContent = testoRecensione + " ";
    divRecensione.appendChild(testoElement);

    // Aggiungi le stelle in base alla valutazione
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.textContent = i < valutazione ? '★' : '☆';
        star.style.color = i < valutazione ? '#E1DC65' : '#ccc'; // Stelle piene per la valutazione, vuote per il resto
        divRecensione.appendChild(star);
    }

    // Aggiungi il div della recensione al container principale
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
                prodottoSelezionato.prezzo=0;
                localStorage.setItem('prodottoSelezionato', JSON.stringify(prodottoSelezionato));
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


                     aggiungiRecensioneAlDOM("NomeUtente", commento, valutazione);

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

function aggiungiNelCarrello()
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
                if(prodottoSelezionato.prezzo==0){
                    aggiornaPrezzo();
                    alert("Prodotto azzerato correttamente aggiunto nel carrello!");

                }
                else{
                    alert("Prodotto correttamente aggiunto nel carrello!");
                }

            }
        })
}
function Carrello(prodotti,emailUtente,quantita, prezzoTotale) {
    this.prodotti = prodotti;
    this.emailUtente=emailUtente;
    this.quantita=quantita;
    this.prezzoTotale = prezzoTotale;
}

function aggiornaPrezzo(){
    var nome= prodottoSelezionato.nome;
    var prezzo= prodottoSelezionato.prezzo;
    var carrello= new Carrello(nome,null,1,prezzo);
    console.log(carrello)

    $.ajax(
        {
            type:"POST",
            url:"/aggiornaPrezzo",
            contentType: "application/json",
            data: JSON.stringify(carrello),
            success: function()
            {

            }
        })
}
