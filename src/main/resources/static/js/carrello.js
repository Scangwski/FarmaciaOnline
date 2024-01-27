function caricaCarrello()
{
    $.ajax(
        {
            type:"POST",
            url:"/caricaCarrello",
            success:function(carrello)
            {
                var index=0;
                while(index!==carrello.length)
                {
                    let qnt=carrello[index].quantita;
                    $.ajax(
                        {
                            type:"POST",
                            url:"/caricaProdotto",
                            contentType: "application/json",
                            data: JSON.stringify(carrello[index++].prodotti),
                            success:function (prodotto)
                            {
                                $("#articolo_qui").append(creaCarrello(prodotto,qnt));
                            }
                        })
                }
            }
        })
}

let totale=0;
function creaCarrello(prodotto,qnt)
{
    let doc=document.createElement("div");
    cont=1;
    totale=totale+prodotto.prezzo*qnt;
    totale1=totale+4.99;
    doc.innerHTML="<hr class=\"my-4\">\n" +
        "                                    <div class=\"prodotto\">\n" +
        "                                    <a> <button onclick=eliminaArticolo("+ '"' + prodotto.nome + '"' + ")" + " type=\"button\" class=\"btn btn-outline-dark\">✖</button></a>\n" +
        "                                        <img\n"  + "src='"+ prodotto.immagini +"'\n" +
        "                                        <div class=\"info\">\n" +
        "                                            <span>" +
        "                                                      "+prodotto.nome+"</span>\n" +
        "                                            <div class=\"countereprezzo\">\n" +
        "                                                <div class=\"counter\">\n" +
        "                                                    <div class=\"meno\" onclick=diminuzione()>\n" +
        "                                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\">\n" +
        "                                                            <path d=\"M16.6668 10H3.3335\" stroke=\"#F7F6F0\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "                                                        </svg>\n" +
        "                                                    </div>\n" +
        "                                                    <div class=\"numero\">\n" +
        "                                                        <span id=\"counterValue\">"+cont+"</span>\n" +
        "                                                    </div>\n" +
        "                                                    <div class=\"piu\" onclick=aumento()>\n" +
        "                                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\">\n" +
        "                                                            <path d=\"M10.0002 3.3335V16.6668M16.6668 10.0002H3.3335\" stroke=\"#F7F6F0\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "                                                        </svg>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                                    <div class=\"prezzo\">\n" +
        "                                                        <span class=\"t1\"></span>\n" +
        "                                                        <span class=\"P\" id='\prezzoprodotto\'>"+prodotto.prezzo+"€</span>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                    <hr class=\"my-4\">";
    document.getElementById("totale").innerText=parseFloat(totale).toFixed(2)+"€";
    document.getElementById("totale1").innerText=parseFloat(totale1).toFixed(2) +"€";
    if(totale1>25){
        document.getElementById("spedizione").innerText="Gratis(>25€)"
        document.getElementById("totale").innerText=parseFloat(totale1).toFixed(2) +"€";
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

function aumento(){
    var cont = document.getElementById("counterValue");
    var cont1 = parseFloat(cont.innerText);
    var contvero = cont1 + 1;
    cont.innerText = contvero;

    var prezzoprodotto=document.getElementById("prezzoprodotto");
    var prezzoprodotto1=parseFloat(prezzoprodotto.innerText);
    var prezzoaggiornato=prezzoprodotto1*contvero;

    var totale=document.getElementById("totale").innerText=prezzoaggiornato +"€";

    var totale2 =document.getElementById("totale1");
    var total3=parseFloat(totale2);
    if(prezzoaggiornato <=25) {
        var totaleagg = prezzoaggiornato + 4.99;
        totale2.innerText=totaleagg +"€"
        document.getElementById("spedizione").innerText="4.99€"

    }
    else{
        var totaleagg=prezzoaggiornato
        totale2.innerText=totaleagg +"€"
        document.getElementById("spedizione").innerText="Gratis(>25€)"

    }


}

function diminuzione(){
    var spedizione= 4.99
    var cont = document.getElementById("counterValue");
    var cont1 = parseFloat(cont.innerText);
    if(cont1>1) {
        var contvero = cont1 - 1;
        cont.innerText = contvero;
        var prezzoprodotto=document.getElementById("prezzoprodotto");
        var prezzoprodotto1=parseFloat(prezzoprodotto.innerText);
        var totale=document.getElementById("totale")
        var totale1= parseFloat(totale.innerText);
        var prezzoaggiornato=totale1-prezzoprodotto1;

        var totale=document.getElementById("totale").innerText=prezzoaggiornato+"€";

        var totale2 =document.getElementById("totale1");
        var totale3=parseFloat(totale2.innerText);
        if(prezzoaggiornato <25) {
            var totaleagg = totale3 - prezzoprodotto1;
            totale2.innerText=totaleagg +"€";
            document.getElementById("spedizione").innerText="4.99€";

        }
        else if(prezzoaggiornato>25){
            var totaleagg=prezzoaggiornato;
            totale2.innerText=totaleagg +"€";
            document.getElementById("spedizione").innerText="Gratis(>25€)";

        }

    }

}