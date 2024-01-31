document.getElementById('profilobtn').addEventListener('click', function() {
    window.location.href = '/paginautente';
    });

document.getElementById('homebtn').addEventListener('click', function() {
    window.location.href = '/home';
    });

function caricaCarrello()
{
    $.ajax(
        {
            type:"POST",
            url:"/caricaCarrello",
            success:function(carrello)
            {
                var index=0;
                var prezzoSelezionato = prodottoSelezionato.prezzo;
                while(index!==carrello.length)
                {
                    let qnt=carrello[index].quantita;
                    let prezzo=carrello[index].prezzoTotale;
                    $.ajax(
                        {
                            type:"POST",
                            url:"/caricaProdotto",
                            contentType: "application/json",
                            data: JSON.stringify(carrello[index++].prodotti),
                            success:function (prodotto)
                            {
                                $("#articolo_qui").append(creaCarrello(prodotto,qnt,prezzo));
                            }
                        })
                }
            }
        })
}
var prodottoSelezionato = JSON.parse(localStorage.getItem('prodottoSelezionato'));
console.log(prodottoSelezionato);

let totale=0;
let contatoreElementi = 0;

function creaCarrello(prodotto, qnt,prezzo) {
    contatoreElementi++;
    let doc = document.createElement("div");
    totale = totale + prezzo * qnt;

    doc.innerHTML = "<hr class=\"my-4\">\n" +
        "                                    <div class=\"prodotto\">\n" +
        "                                    <a> <button onclick=eliminaArticolo(" + '"' + prodotto.nome + '"' + ")" + " type=\"button\" > ✖</button></a>\n" +
        "                                        <img\n" + "src='" + prodotto.immagine + "' style='display: block; margin-left: auto; margin-right: auto;'>\n" +
        "                                        <div class=\"info\">\n" +
        "                                            <span>" +
        "                                                      " + prodotto.nome + "</span>\n" +
        "                                            <div class=\"countereprezzo\">\n" +
        "                                                <div class=\"counter\">\n" +
        "                                                    <div class=\"meno\" onclick=diminuzione(" + contatoreElementi + ")>\n" +
        "                                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\">\n" +
        "                                                            <path d=\"M16.6668 10H3.3335\" stroke=\"#F7F6F0\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "                                                        </svg>\n" +
        "                                                    </div>\n" +
        "                                                    <div class=\"numero\">\n" +
        "                                                        <span id=\"counterValue_" + contatoreElementi + "\">" + qnt + "</span>\n" +
        "                                                    </div>\n" +
        "                                                    <div class=\"piu\" onclick=aumento(" + contatoreElementi + ")>\n" +
        "                                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\">\n" +
        "                                                            <path d=\"M10.0002 3.3335V16.6668M16.6668 10.0002H3.3335\" stroke=\"#F7F6F0\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "                                                        </svg>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                                <div class=\"prezzo\">\n" +
        "                                                    <span class=\"t1\"></span>\n" +
        "                                                    <span class=\"P\" id='prezzoprodotto_" + contatoreElementi + "'>" + prezzo + "€</span>\n" +
        "                                                </div>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                    <hr class=\"my-4\">";

    // Aggiorna il totale
    document.getElementById("totale").innerText = parseFloat(totale).toFixed(2) + "€";

    if (totale > 25) {
        document.getElementById("totale1").innerText = parseFloat(totale).toFixed(2) + "€";
        document.getElementById("spedizione").innerText = "Spedizione Gratuita (>25€)";
    } else {
        tot = totale + 4.99;
        document.getElementById("totale1").innerText = parseFloat(tot).toFixed(2) + "€";
        document.getElementById("spedizione").innerText = "4.99€";
    }

    return doc;
}

function eliminaArticolo(nome)
{
    $.ajax(
        {
            type:"POST",
            url:"/eliminaArticolo",
            contentType: "application/json",
            data: JSON.stringify(nome)
        })
    window.location.href="/carrello";
}

function aggiornaTotale() {
    var prezzoTotale = 0;
    var elements = document.querySelectorAll(".prodotto");
    elements.forEach(function (element) {
        var prezzoProdotto = parseFloat(element.querySelector(".P").innerText);
        var quantita = parseFloat(element.querySelector(".numero span").innerText);
        prezzoTotale += prezzoProdotto * quantita;
    });

    // Aggiorna il totale
    document.getElementById("totale").innerText = prezzoTotale.toFixed(2) + "€";

    if (prezzoTotale > 25) {
        document.getElementById("totale1").innerText = prezzoTotale.toFixed(2) + "€";
        document.getElementById("spedizione").innerText = "Spedizione Gratuita (>25€)";
    } else {
        var tot = prezzoTotale + 4.99;
        document.getElementById("totale1").innerText = tot.toFixed(2) + "€";
        document.getElementById("spedizione").innerText = "4.99€";
    }
}

function aumento(cont) {
    var contatore = document.getElementById("counterValue_" + cont);
    var cont1 = parseFloat(contatore.innerText);
    var contvero = cont1 + 1;

    var prezzoprodotto = document.getElementById("prezzoprodotto_" + cont);
    var prezzoprodotto1 = parseFloat(prezzoprodotto.innerText).toFixed(2);

    // Aggiungi questa condizione per verificare se il prezzo è 0
    if (prezzoprodotto1 > 0) {
        contatore.innerText = contvero;
        var prezzoaggiornato = prezzoprodotto1 * contvero;
        aggiornaTotale();
    }
}

function diminuzione(cont) {
    var contatore = document.getElementById("counterValue_" + cont);
    var cont1 = parseFloat(contatore.innerText);

    // Aggiungi questa condizione per controllare se il contatore è maggiore di 1
    if (cont1 > 1) {
        var contvero = cont1 - 1;
        contatore.innerText = contvero;

        var prezzoprodotto = document.getElementById("prezzoprodotto_" + cont);
        var prezzoprodotto1 = parseFloat(prezzoprodotto.innerText).toFixed(2);
        var prezzoaggiornato = prezzoprodotto1 * contvero;

        aggiornaTotale();
    }
}

function svuotaCarrello()
{
    $.ajax(
        {
            type:"POST",
            url:"/svuotaCarrello"
        })
    window.location.href="http://localhost:8085/carrello";
}



