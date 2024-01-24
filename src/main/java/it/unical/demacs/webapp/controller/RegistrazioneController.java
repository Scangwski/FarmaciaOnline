package it.unical.demacs.webapp.controller;



import it.unical.demacs.webapp.persistance.jdbc.UtenteDaoJDBC;
import it.unical.demacs.webapp.persistance.jdbc.DatabaseJDBC;
import it.unical.demacs.webapp.model.Utente;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletResponse;
import java.sql.SQLException;

import static jakarta.servlet.http.HttpServletResponse.*;
import static jakarta.servlet.http.HttpServletResponse.SC_OK;

@RestController
public class RegistrazioneController
{
    @PostMapping("/doRegister")
    public void registraUtente(HttpServletResponse res, @RequestBody Utente utente) throws SQLException
    {

        if(DatabaseJDBC.getInstance().getUtenteDao().Register(utente))
            res.setStatus(SC_OK);
        else
            res.setStatus(SC_SERVICE_UNAVAILABLE);
        System.out.println("Richiesta di registrazione ricevuta: " + utente);
    }
}
