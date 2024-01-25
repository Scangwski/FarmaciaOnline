package it.unical.demacs.webapp.controller;

import it.unical.demacs.webapp.model.Ricetta;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.UtenteDao;
import it.unical.demacs.webapp.persistance.jdbc.DatabaseJDBC;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
public class GestioneRicettaController {

    @PostMapping("/inserimentoRicetta")
    public void inserisciRicetta(HttpServletResponse res, Utente utente, Ricetta ricetta) throws SQLException {

        if(!DatabaseJDBC.getInstance().getRicettaDao().codiceGiaPresente(utente.getEmail(), ricetta.getCodiceRicetta())
            && !DatabaseJDBC.getInstance().getRicettaDao().isValidFormat(ricetta.getCodiceRicetta())) {

            if (DatabaseJDBC.getInstance().getRicettaDao().inserisciRicetta(utente.getEmail(), ricetta.getCodiceRicetta())) {
                res.setStatus(HttpServletResponse.SC_OK);
            } else {
                res.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
            }
        }
    }
}
