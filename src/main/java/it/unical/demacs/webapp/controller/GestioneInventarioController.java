package it.unical.demacs.webapp.controller;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.jdbc.DatabaseJDBC;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
public class GestioneInventarioController {

    @PostMapping("/aggiuntaProdotto")
    public void aggiuntaProdotto(HttpServletResponse res, @RequestBody Utente utente, @RequestBody Prodotto nuovoProdotto) throws SQLException {

        if(utente!=null && nuovoProdotto!=null) {
            if(DatabaseJDBC.getInstance().getProdottoDao().aggiungiProdotto(utente, nuovoProdotto)) {
                res.setStatus(HttpServletResponse.SC_OK);
            }
            else {
                res.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
            }
        }
    }

    @PostMapping("/rimuoviProdotto")
    public void rimuoviProdotto(HttpServletResponse res, @RequestBody Utente utente, @RequestBody Prodotto prodotto) throws SQLException {

        if(utente!=null && prodotto!=null) {
            if(DatabaseJDBC.getInstance().getProdottoDao().rimuoviProdotto(utente, prodotto)) {
                res.setStatus(HttpServletResponse.SC_OK);
            }
            else {
                res.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
            }
        }
    }

}
