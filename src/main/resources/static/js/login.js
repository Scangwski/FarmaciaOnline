    document.getElementById('registerButton').addEventListener('click', function() {
    window.location.href = '/registrazione';
    });

    document.getElementById('loginButton').addEventListener('click', function() {
    window.location.href = '/pagina-di-login';
    });

    document.getElementById('passwordimenticataButton').addEventListener('click', function() {
    window.location.href = '/passwordimenticata';
    });

function Utente(nome,cognome,email,password, tipoUtente ,bannato,google_id)
{
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.password =password;
    this.tipoUtente = tipoUtente
    this.bannato=bannato;
    this.google_id=google_id;

}
function accedi() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#pass").value;
    if ((email === "") || (password === "") || (email === " ") || (password === " "))
    {
        error("Attenzione! Compila tutti i campi");
    }
    else
    {
        var utente=new Utente(null,null,email,password,null,false,null);
        $.ajax(
            {
                url: "/doLogin",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(utente),
                success: function () {
                    var messageContainer = document.createElement("div");
                    messageContainer.id = "message_container";
                    messageContainer.className = "alert alert-primary d-flex align-items-center mb-3";
                    $(messageContainer).attr("role", "alert");

                    var icon = document.createElement("i");
                    icon.className = "bi bi-info-circle-fill me-2";
                    $(icon).attr("role", "img");

                    var message = document.createElement("div");
                    message.id = "message";
                    $(message).text("Login effettuato")
                    messageContainer.append(icon, message);

                    $("#login_form").before(messageContainer);

                    setTimeout(function () {
                        $("#message_container").fadeOut();
                    }, 2000);
                    setTimeout(function () {
                        $("#message_container").remove();
                    }, 2300);
                    setTimeout(function ()
                    {
                        window.location.href="http://localhost:8085";
                    }, 1000);
                },
                error: function ()
                {
                    error("Controlla che i dati siano corretti!")
                    setTimeout(function ()
                    {
                        window.location.href="http://localhost:8085/login";
                    }, 1000);
                },
            });
    }
}

function error(s){
    var messageContainer = document.createElement("div");
    messageContainer.id = "message_container";
    messageContainer.className = "alert alert-danger d-flex align-items-center mb-3";
    $(messageContainer).attr("role", "alert");

    var icon = document.createElement("i");
    icon.className = "bi bi-info-circle-fill me-2";
    $(icon).attr("role", "img");

    var message = document.createElement("div");
    message.id = "message";
    $(message).text(s);
    messageContainer.append(icon, message);
    $("#login_form").before(messageContainer);

    setTimeout(function () {
        $("#message_container").fadeOut();
    }, 2000);
    setTimeout(function () {
        $("#message_container").remove();
    }, 2300);


}

