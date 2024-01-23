package it.unical.demacs.webapp.controller;


import it.unical.demacs.webapp.model.Carrello;
import it.unical.demacs.webapp.model.Ricetta;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.jdbc.DatabaseJDBC;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import javax.xml.crypto.Data;
import java.sql.SQLException;
import java.util.ArrayList;

/*
@RestController
public class CarrelloController
{
    @PostMapping("/aggiungiNelCarrello")
    public void aggiungiNelCarrello(HttpServletResponse res,HttpServletRequest req, @RequestBody String nomeProdotto) throws SQLException
    {
        Utente u = (Utente) req.getSession().getAttribute("utente");
        if(DatabaseJDBC.getInstance().getCarrelloDao().inserisciNelCarrello(u.getEmail(),nomeProdotto.replaceAll("\"","")))
            res.setStatus(HttpServletResponse.SC_OK);
        else
            res.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
    }

    @PostMapping("/caricaCarrello")
    public ArrayList<Carrello> caricaCarrello(HttpServletRequest req, HttpServletResponse res) throws SQLException
    {
        Utente u=(Utente)req.getSession().getAttribute("utente");
        ArrayList<Carrello> contenuto=DatabaseJDBC.getInstance().getCarrelloDao().prelevaCarrello(u.getEmail());

        if(contenuto.isEmpty())
            res.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
        else
            res.setStatus(HttpServletResponse.SC_OK);

        return contenuto;
    }

    @PostMapping("/svuotaCarrello")
    public void svuotaCarrello(HttpServletRequest req) throws SQLException
    {
        Utente u=(Utente)req.getSession().getAttribute("utente");
        DatabaseJDBC.getInstance().getCarrelloDao().svuotaCarrello(u.getEmail());
    }

    @PostMapping("/eliminaArticolo")
    public void eliminaArticolo(HttpServletRequest req,@RequestBody String nomeProdotto) throws SQLException
    {
        nomeProdotto=nomeProdotto.replaceAll("\"","");
        Utente u=(Utente)req.getSession().getAttribute("utente");
        DatabaseJDBC.getInstance().getCarrelloDao().eliminaArticolo(nomeProdotto,u.getEmail());
    }
}*/