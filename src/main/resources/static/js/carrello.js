function caricaCarrello()
{
    $.ajax(
        {
            type:"POST",
            url:"/caricaCarrello",
            success:function(carrello)
            {
                alert("nessun carrello");
                var index=0;
                while(index!==carrello.length)
                {
                    let qnt=carrello[index].quantita;
                    $.ajax(
                        {
                            type:"POST",
                            url:"/caricaProdotto",
                            contentType: "application/json",
                            data: JSON.stringify(carrello[index++].nome),
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
        "                                    <div class=\"row mb-4 d-flex justify-content-between align-items-center\">\n" +
        "                                        <div class=\"col-md-2 col-lg-2 col-xl-2\">\n" +
        "                                            <img\n" +
        "                                                    src='"+prodotto.immagini+"'\n" +
        "                                                    class=\"img-fluid rounded-3\" alt=\"Cotton T-shirt\">\n" +
        "                                        </div>\n" +
        "                                        <div class=\"col-md-3 col-lg-3 col-xl-3\">\n" +
        "                                            <h6 class=\"text-black mb-0\">"+prodotto.nome+"</h6>\n" +
        "                                        </div>\n" +
        "                                        <div class=\"col-md-3 col-lg-3 col-xl-2 d-flex\">\n" +
        "                                            <input readonly value="+qnt+"\n" +
        "                                                   class=\"form-control form-control-sm\" />\n" +
        "                                        </div>\n"+
        "                                        <div class=\"col-md-3 col-lg-2 col-xl-2 offset-lg-1\">\n" +
        "                                            <h6 class=\"mb-0\">&euro;"+parseFloat(prodotto.prezzo*qnt).toFixed(2)+"</h6>\n" +
        "                                        </div>\n" +
        "                                        <div class=\"col-md-2 col-lg-2 col-xl-2 text-end\">\n" +
        "                                            <a> <button onclick=eliminaArticolo("+ '"' + prodotto.nome + '"' + ")" + " type=\"button\" class=\"btn btn-outline-dark\">Rimuovi</button></a>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                    <hr class=\"my-4\">";
    document.getElementById("totale").innerText=parseFloat(totale).toFixed(2);
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