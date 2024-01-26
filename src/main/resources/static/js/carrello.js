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
    totale=totale+prodotto.prezzo*qnt;
    doc.innerHTML="<hr class=\"my-4\">\n" +
        "                                    <div class=\"prodotto\">\n" +
        "                                        <img\n"  + "src='"+ prodotto.immagini +"'\n" +
        "                                        <div class=\"info\">\n" +
        "                                            <span>" +
        "                                                      "+prodotto.nome+"</span>\n" +
        "                                            <div class=\"countereprezzo\">\n" +
        "                                                <div class=\"counter\">\n" +
        "                                                    <div class=\"meno\">\n" +
        "                                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\">\n" +
        "                                                            <path d=\"M16.6668 10H3.3335\" stroke=\"#F7F6F0\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "                                                        </svg>\n" +
        "                                                    </div>\n" +
        "                                                    <div class=\"numero\">\n" +
        "                                                        <span id=\"counterValue\">1</span>\n" +
        "                                                    </div>\n" +
        "                                                    <div class=\"piu\">\n" +
        "                                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\">\n" +
        "                                                            <path d=\"M10.0002 3.3335V16.6668M16.6668 10.0002H3.3335\" stroke=\"#F7F6F0\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "                                                        </svg>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                                    <div class=\"prezzo\">\n" +
        "                                                        <span class=\"t1\"></span>\n" +
        "                                                        <span class=\"P\">"+prodotto.prezzo+"€</span>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                    <hr class=\"my-4\">";
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