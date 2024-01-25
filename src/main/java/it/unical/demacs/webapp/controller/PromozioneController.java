package it.unical.demacs.webapp.controller;

import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.jdbc.DatabaseJDBC;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
public class PromozioneController {

    @PostMapping("/promuovi")
    public void promuoviUtente(HttpServletResponse res, @RequestBody Utente utente) throws SQLException {

        if(utente!=null && utente.getTipoUtente().equalsIgnoreCase("farmacista")) {

            if (DatabaseJDBC.getInstance().getUtenteDao().promuoviAdAmministratore(utente.getEmail())) {
                res.setStatus(HttpServletResponse.SC_OK);
            } else {
                res.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
            }
        }
    }
}
