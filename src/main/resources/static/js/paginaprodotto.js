
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
    var urlImmagine="oooooooooooooooooaa"
    var imgElement = document.getElementById("img");
    var nuovoUrl = prodottoSelezionato.immagine;
    imgElement.setAttribute("src", nuovoUrl);



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
