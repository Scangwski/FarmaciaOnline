package it.unical.demacs.webapp.controller;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.jdbc.DatabaseJDBC;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
public class OffertaController {

    @PostMapping("/inserimentoOfferta")
    public void inserisciOfferta(HttpServletResponse res, @RequestBody Utente utente, @RequestBody Prodotto prodotto, @RequestParam Double prezzoOfferta) throws SQLException {
        if(DatabaseJDBC.getInstance().getOffertaDao().inserisciOfferta(utente, prodotto, prezzoOfferta)) {
            res.setStatus(HttpServletResponse.SC_OK);
        }
        else {
            res.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
        }
    }

    @PostMapping("/rimozioneOfferta")
    public void inserisciOfferta(HttpServletResponse res, @RequestBody Utente utente, @RequestBody Prodotto prodotto) throws SQLException {
        if(DatabaseJDBC.getInstance().getOffertaDao().rimuoviOfferta(utente, prodotto)) {
            res.setStatus(HttpServletResponse.SC_OK);
        }
        else {
            res.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
        }
    }
}
