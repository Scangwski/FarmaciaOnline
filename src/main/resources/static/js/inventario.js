function creaProdotto() {
    //todo completare
    var idProdotto = document.getElementById('idProdotto').value;

    var nomeProdotto = document.getElementById('nomeProdotto').value;

    var descrizioneProdotto = document.getElementById('descrizioneProdotto').value;

    var prezzoProdottoString = document.getElementById('prezzoProdotto').value;
    var prezzoProdotto = parseFloat(prezzoProdottoString.replace(',', '.'));
    // check di prezzo
    if (isNaN(prezzoProdotto)) {
        alert("prezzo inserito non valido!");
    }

    var categoriaProdotto = document.getElementById('categoriaProdotto').value;

    var quantitaProdotto = document.getElementById('counterValue2').value;

    var immagineProdotto = document.getElementById('uploadImmagine').value;



    alert("aggiunti: " + idProdotto+","+ nomeProdotto+","+ descrizioneProdotto+","+ prezzoProdotto+","+ categoriaProdotto+","+ quantitaProdotto+","+ immagineProdotto);
    //aggiuntaProdotto(idProdotto, nomeProdotto, descrizioneProdotto, prezzoProdotto, categoriaProdotto, quantitaProdotto, immagineProdotto)
}


function eliminaProdotto(){
    alert("sicuro di voler procedere? placeholder");
    // todo inserire logica
}


function aggiuntaScorte(){
    alert("Scorte aggiunte! placeholder");
    // todo inserire logica
}



function aggiuntaProdotto(id, nome, descrizione, categoria, immagine) {

    fetch('/aggiuntaProdotto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            nome: nome,
            descrizione: descrizione,
            categoria: categoria,
            immagine: immagine
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Risposta dal controller:', data);
        })
        .catch(error => {
            console.error('Errore durante la chiamata al controller:', error);
        });
}

