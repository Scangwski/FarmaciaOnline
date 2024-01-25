package it.unical.demacs.webapp.controller;

import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.jdbc.DatabaseJDBC;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.crypto.Data;
import java.sql.SQLException;

@RestController
public class GestioneAccountController {

    @PostMapping("/espulsione")
    public void espelliUtente(HttpServletResponse res, @RequestBody Utente utente) throws SQLException {

        if(utente!=null && utente.getBannato()!=true) {
            if (DatabaseJDBC.getInstance().getUtenteDao().bannaUtente(utente.getEmail())) {
                res.setStatus(HttpServletResponse.SC_OK);
            } else {
                res.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
            }
        }
    }
}
