document.getElementById('loginButton').addEventListener('click', function () {
    checkLoginStatus().then(function(response) {
        if(response.logged) {
            window.location.href = '/paginautente';
        } else {
            window.location.href = '/';
        }
    }).catch(function(error) {
        console.error('Errore durante la verifica dello stato di accesso:', error);
    });
});


function checkLoginStatus() {
    return fetch('/controlloLogin')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Errore nella richiesta: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Errore durante la verifica dello stato di accesso:', error);
            throw error; // Rilancia l'errore per consentire la gestione in altre parti del codice, se necessario
        });
}

function caricaProdotto(nome){
    $.ajax(
        {
            type:"POST",
            url:"/caricaProdotto",
            contentType: "application/json",
            data: JSON.stringify(nome),
            success:function (prodotto)
            {
                localStorage.setItem('prodottoSelezionato', JSON.stringify(prodotto));
                console.log(prodotto);
                window.location.href = '/paginaProdotto';
            }
        })
}




document.getElementById("carr").addEventListener("click",function (){
    window.location.href='/carrello';
})

document.getElementById("tachipirina").addEventListener("click",function (){
    caricaProdotto(document.getElementById("nometachi").innerText);
    window.location.href='/PaginaProdotti';
});


document.getElementById("brufen").addEventListener("click", function (){
   caricaProdotto(document.getElementById("nomebrufen").innerText );
    window.location.href='/PaginaProdotti';
});


document.getElementById("oki").addEventListener("click", function (){
    caricaProdotto(document.getElementById("nomeoki").innerText);
    window.location.href='/PaginaProdotti';
});

document.getElementById("pampers").addEventListener("click", function (){
    caricaProdotto(document.getElementById("nomepamp").innerText);
    window.location.href='/PaginaProdotti';
});