
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