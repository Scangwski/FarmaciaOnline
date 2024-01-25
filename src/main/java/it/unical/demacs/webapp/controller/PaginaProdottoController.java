package it.unical.demacs.webapp.controller;

import it.unical.demacs.webapp.model.Ricetta;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.RicettaDao;
import it.unical.demacs.webapp.persistance.jdbc.DatabaseJDBC;
import it.unical.demacs.webapp.persistance.jdbc.RicettaDaoJDBC;
import it.unical.demacs.webapp.persistance.jdbc.RicettaDaoProxy;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.Enumeration;

import static jakarta.servlet.http.HttpServletResponse.SC_OK;
import static jakarta.servlet.http.HttpServletResponse.SC_SERVICE_UNAVAILABLE;

@RestController
public final class PaginaProdottoController {


    @PostMapping("/inserisciRicetta")
    public void inserisciRicetta(HttpServletRequest req,HttpServletResponse res, @RequestBody String s) throws SQLException
    {
        HttpSession session = req.getSession(false);
        Utente u = (Utente) session.getAttribute("utente");
        if (u == null) {
            System.out.println("Utente non loggato");
            res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }
        System.out.println("Utente recuperato: " + u.getEmail());

        RicettaDaoProxy ricetta = new RicettaDaoProxy(DatabaseJDBC.getInstance().getConnection());

        if(ricetta.inserisciRicetta(u.getEmail(),s))
            res.setStatus(SC_OK);
        else
            res.setStatus(SC_SERVICE_UNAVAILABLE);
    }

    @PostMapping("/caricaProdotto")
    public void caricaProdotto(HttpServletResponse res,HttpServletRequest req, @RequestBody String s) throws SQLException{

    }
}
