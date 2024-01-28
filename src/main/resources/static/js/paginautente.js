document.getElementById('inventario').addEventListener('click', function () {
    checkLoginStatus().then(function(response) {
        if (response.tipoUtente === 'farmacista') {
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

document.getElementById('promuovi ad Admin').addEventListener('click', function () {
    checkLoginStatus().then(function(response) {
        if(response.tipoUtente === 'Admin') {
            promuovi();
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

function promuovi() {
    return fetch('/promuovi')
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

