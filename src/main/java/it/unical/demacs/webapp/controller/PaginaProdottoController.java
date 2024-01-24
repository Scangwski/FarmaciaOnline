package it.unical.demacs.webapp.controller;

import it.unical.demacs.webapp.model.Ricetta;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.RicettaDao;
import it.unical.demacs.webapp.persistance.jdbc.DatabaseJDBC;
import it.unical.demacs.webapp.persistance.jdbc.RicettaDaoJDBC;
import it.unical.demacs.webapp.persistance.jdbc.RicettaDaoProxy;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

import static jakarta.servlet.http.HttpServletResponse.SC_OK;
import static jakarta.servlet.http.HttpServletResponse.SC_SERVICE_UNAVAILABLE;

@RestController
public final class PaginaProdottoController {
    @PostMapping("/inserisciRicetta")
    public void inserisciRicetta(HttpServletResponse res, @RequestBody String s) throws SQLException
    {
        RicettaDaoProxy ricetta = new RicettaDaoProxy();

        if(ricetta.inserisciRicetta(s))
            res.setStatus(SC_OK);
        else
            res.setStatus(SC_SERVICE_UNAVAILABLE);
    }
}
