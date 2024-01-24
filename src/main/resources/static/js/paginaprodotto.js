window.addEventListener("load", function ()
{
    document.getElementById("ricettaButton").addEventListener("click", inserisciRicetta);
});
function Ricetta(codice){
    this.codice=codice;
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
            contentType: "application/json",
            data: JSON.stringify(ricetta),
            success: function () {
                alert("Ricetta inserita con successo!");
            },
            error: function (xhr, status, error) {
                // Gestisci gli errori
                alert("Errore durante l'inserimento della ricetta. Stato: " + status + ", Errore: " + error);
            },
        });
}