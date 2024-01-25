package it.unical.demacs.webapp.controller;



import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.jdbc.DatabaseJDBC;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.SQLException;
import java.util.concurrent.TimeUnit;

@RestController
public final class LoginController
{
    @PostMapping("/doLogin")
    public void accedi(HttpServletRequest req, HttpServletResponse res, @RequestBody Utente utente) throws SQLException
    {
        Utente u=DatabaseJDBC.getInstance().getUtenteDao().Login(utente.getEmail(),utente.getPassword());
        if(u!=null)
        {
            HttpSession session = req.getSession(true);
            session.setAttribute("utente",u);
            System.out.println("Utente loggato: " + u.getEmail());
            res.setStatus(HttpServletResponse.SC_OK);
        }
        else
        {
            res.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
        }
    }

}
