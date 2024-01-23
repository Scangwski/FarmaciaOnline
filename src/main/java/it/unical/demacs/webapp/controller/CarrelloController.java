package it.unical.demacs.webapp.controller;

import it.unical.demacs.webapp.model.Carrello;
import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.jdbc.DatabaseJDBC;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.sql.SQLException;
import java.util.ArrayList;

import static jakarta.servlet.http.HttpServletResponse.SC_OK;
import static jakarta.servlet.http.HttpServletResponse.SC_SERVICE_UNAVAILABLE;

public class CarrelloController {


    @PostMapping("/caricaCarrello")
    public ArrayList<Carrello> caricaCarrello(HttpServletRequest req,HttpServletResponse res) throws SQLException
    {
        Utente u=(Utente)req.getSession().getAttribute("utente");
        ArrayList<Carrello> contenuto=DatabaseJDBC.getInstance().getCarrelloDao().prelevaCarrello(u);


        return contenuto;
    }


    @PostMapping("/eliminaArticolo")
    public void eliminaArticolo(HttpServletRequest req,@RequestBody Prodotto prodotto) throws SQLException
    {
        Utente u=(Utente)req.getSession().getAttribute("utente");
        DatabaseJDBC.getInstance().getCarrelloDao().eliminaArticolo(u,prodotto);
    }

}
