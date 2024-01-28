document.getElementById('inventario').addEventListener('click', function () {
    checkLoginStatus().then(function(response) {
        if (response.tipoUtente === 'Farmacista' || response.tipoUtente === 'Admin') {
            // consenti accesso a GestisciInventario
            window.location.href = '/inventario'
        }
        else {
            // nega accesso a GestisciInventario
            alert("Non hai i permessi per eseguire questa azione!")
        }

    }).catch(function(error) {
        console.error('Errore durante la verifica dello stato di accesso:', error);
    });
});

document.getElementById('promuoviFarmacista').addEventListener('click', function () {
    checkLoginStatus().then(function(response) {
        if(response.tipoUtente === 'Admin') {
            var emailUtente = document.getElementById('email').value;
            promuovi(emailUtente).then(function(data) {

                console.log('Risposta dalla promozione:', data);
            }).catch(function (error) {
                console.error('Errore durante la promozione:', error);
            });
        }
        else {
            alert("Non hai i permessi per eseguire questa azione!")
        }
    }).catch(function (error) {
        console.error('Errore durante la verifica dello stato di accesso:', error);
    });
});

document.getElementById('espelliUtente').addEventListener('click', function () {
    checkLoginStatus().then(function(response) {
        if(response.tipoUtente === 'Admin') {
            var emailUtente = document.getElementById('email').value;
            ban(emailUtente).then(function(data) {

                console.log('Risposta del ban: ', data);
            }).catch(function (error) {
                console.error('Errore durante il ban:', error);
            });
        }
        else {
            alert("Non hai i permessi per eseguire questa azione!")
        }
    }).catch(function (error) {
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
            throw error;
        });


}

function promuovi(emailUtente) {

    var utente = {
        email: emailUtente
    };

    return fetch(`/promuovi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(utente)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Errore nella richiesta: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Errore durante il ban:', error);
            throw error;
        });
}

function ban(emailUtente) {

    var utente = {
        email: emailUtente
    };

    return fetch(`/espulsione`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(utente)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Errore nella richiesta: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Errore durante il ban:', error);
            throw error;
        });
}
