package it.unical.demacs.webapp.controller;


import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.jdbc.DatabaseJDBC;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Controller
public class NavigationController {

    @GetMapping("/controlloLogin")
    @ResponseBody
    public Map<String, Object> checkLoginStatus(HttpServletRequest req){
        Map<String, Object> response = new HashMap<>();
        // aggiungo se l'utente è loggato
        response.put("logged", isLogged(req));

        HttpSession session = req.getSession(false);
        if(session != null && session.getAttribute("utente") != null) {
            Utente utente = (Utente) session.getAttribute("utente");
            // aggiungo il ruolo dell'utente
            response.put("tipoUtente", utente.getTipoUtente());
        }
        return response;
    }

    private boolean isLogged(HttpServletRequest req) {
        HttpSession session = req.getSession(false);
        return (session != null && session.getAttribute("utente") != null);
    }


    @GetMapping("/registrazione")
    public String regPage() {
        return "Register";
    }

    @GetMapping("/")
    public String loginPage() {
        return "Login";
    }

    @GetMapping("/home")
    public String homePage() {
        return "Home";
    }

    @GetMapping("/paginaProdotto")
    public String prodottoPage()
    {
        return "PaginaProdotto";
    }

    @GetMapping("/inventario")
    public String inventarioPage() {
        return "Inventario";
    }

    @GetMapping("/PaginaProdotti")
    public String prodottipage(){
        return "PaginaProdotti";
    }

    @GetMapping("/paginautente")
    public String utentepage(){
        return "paginautente";
    }

    @GetMapping("/recuperapassword")
    public String recuperapassword(){
        return "RecuperaPassword";
    }

    @GetMapping("/carrello")
    public String apriCarrello(){
        return "Carrello";
    }

}

