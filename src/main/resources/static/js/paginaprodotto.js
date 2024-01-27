
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

    if (!commento || !valutazione) {
        alert("Per favore, compila tutti i campi della recensione.");
        return;
    }

    var recensione = {
        commento: commento,
        valutazione: valutazione
    };

    $.ajax({
        url: "/inserisciRecensione",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(recensione),
        success: function () {
            alert("Recensione inviata con successo!");
            // Qui puoi aggiungere codice per pulire il form o aggiornare la pagina
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