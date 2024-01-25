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

@Controller
public class NavigationController {
    @GetMapping("/registrazione")
    public String regPage() {
        return "register";
    }

    @GetMapping("/")
    public String loginPage() {
        return "login";
    }

    @GetMapping("/home")
    public String homePage() {
        return "home";
    }

    @GetMapping("/paginaProdotto")
    public String prodottoPage()
    {
        return "paginaprodotto";
    }

    @GetMapping("/inventario")
    public String inventarioPage() {
        return "inventario";
    }

    @GetMapping("/PaginaProdotti")
    public String prodottipage(){
        return "paginaprodotti";
    }

    @GetMapping("/paginautente")
    public String utentepage(){
        return "paginautente";
    }

    @GetMapping("/recuperapassword")
    public String recuperapassword(){
        return "recuperapassword";
    }

    @GetMapping("/carrello")
    public String apriCarrello(){
        return "carrello";
    }

}

