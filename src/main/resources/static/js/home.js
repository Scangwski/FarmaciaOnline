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

document.getElementById('tachipirina').addEventListener('click', function() {
    window.location.href = '/paginaProdotto';
});
document.getElementById('oki').addEventListener('click', function() {
    window.location.href = '/paginaProdotto';
});
document.getElementById('brufen').addEventListener('click', function() {
    window.location.href = '/paginaProdotto';
});

document.getElementById('pampers').addEventListener('click', function() {
    window.location.href = '/paginaProdotto';
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