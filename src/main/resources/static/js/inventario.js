
function creaProdotto() {
    //todo completare
    var inputId = document.querySelector('#idProdotto input');
    var idProdotto = inputId.value;

    var inputNome = document.querySelector('#nomeProdotto input');
    var nomeProdotto = inputNome.value;

    //var inputDescr = document.querySelector('#descrizioneProdotto input');
    //var descrizioneProdotto = inputDescr.value;

    var prezzoProdottoString = document.querySelector('#prezzoProdotto input').value;
    var prezzoProdotto = parseFloat(prezzoProdottoString.replace(',', '.'));


    var inputCategoria = document.querySelector('#categoriaProdotto input');
    var categoriaProdotto = inputCategoria.value;

    var quantitaProdotto = parseInt(document.querySelector('#counterValue2').innerText);

    var uploadImmagine = document.getElementById('uploadImmagine').files[0]; // Ottiene il primo file, se ce n'è uno
    var isUpload = false;
    if(uploadImmagine) {
        alert("file immagine preso");
        isUpload = true;
    }

    alert("id: " + idProdotto +
        "\nnome: "+ nomeProdotto +
        "\ndescrizione "+ descrizioneProdotto +
        "\nprezzo "+ prezzoProdotto +
        "\ncategoria "+ categoriaProdotto +
        "\nquantità "+ quantitaProdotto
    );

    if(idProdotto === undefined || nomeProdotto === undefined || descrizioneProdotto === undefined || prezzoProdotto === undefined
        || categoriaProdotto === undefined || quantitaProdotto === undefined || isUpload === false || isNaN(prezzoProdotto)) {
        alert("completa tutti i campi");
    }
    aggiuntaProdotto(idProdotto, nomeProdotto, descrizioneProdotto, prezzoProdotto, categoriaProdotto, quantitaProdotto, uploadImmagine)
}


function eliminaProdotto(){
    var inputId = document.querySelector('#eliminaById input');
    var idProdotto = inputId.value;

    if(idProdotto === undefined) {
        alert("inserisci un id");
    }
    else {
        alert("id prodotto preso: " + idProdotto);
        rimuoviProdotto(idProdotto);
    }

}


function aggiuntaScorte(){
    var inputElement = document.querySelector('#caricaById input');
    var idProdotto = inputElement.value;
    if(idProdotto === undefined) {
        alert("inserisci un id");
    }
    else {
        alert("id prodotto preso: " + idProdotto);
        caricaScorte(idProdotto);
    }

}



function aggiuntaProdotto(id, nome, descrizione, prezzo, categoria, quantita, immagine) {

    var nuovoProdotto = {
        id: id,
        nome: nome,
        descrizione: descrizione,
        categoria: categoria,
        prezzo: prezzo,
        quantita: quantita,
        immagine: immagine
    };

    fetch('/aggiuntaProdotto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuovoProdotto),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Risposta dal controller:', data);
        })
        .catch(error => {
            console.error('Errore durante la chiamata al controller:', error);
        });
}


function rimuoviProdotto(id) {

    var prodotto = {
        id: id
    };

    fetch('/rimuoviProdotto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(prodotto),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Risposta dal controller:', data);
        })
        .catch(error => {
            console.error('Errore durante la chiamata al controller:', error);
        });
}

function caricaScorte(id) {

    var prodotto = {
        id: id
    };

    fetch('/caricaProdotto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(prodotto),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Risposta dal controller:', data);
        })
        .catch(error => {
            console.error('Errore durante la chiamata al controller:', error);
        });
}



