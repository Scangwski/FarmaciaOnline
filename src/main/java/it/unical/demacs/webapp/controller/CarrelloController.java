package it.unical.demacs.webapp.controller;

import it.unical.demacs.webapp.model.Carrello;
import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.jdbc.DatabaseJDBC;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.ArrayList;

import static jakarta.servlet.http.HttpServletResponse.SC_OK;
import static jakarta.servlet.http.HttpServletResponse.SC_SERVICE_UNAVAILABLE;

@RestController
public class CarrelloController {


    @PostMapping("/caricaCarrello")
    public ArrayList<Carrello> caricaCarrello(HttpServletRequest req,HttpServletResponse res) throws SQLException
    {
        HttpSession session = req.getSession(false);
        Utente u = (Utente) session.getAttribute("utente");
        ArrayList<Carrello> contenuto=DatabaseJDBC.getInstance().getCarrelloDao().prelevaCarrello(u);
        if(contenuto.isEmpty())
            res.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
        else
            res.setStatus(HttpServletResponse.SC_OK);



        return contenuto;
    }


    @PostMapping("/eliminaArticolo")
    public void eliminaArticolo(HttpServletRequest req,@RequestBody String nomeprodotto) throws SQLException
    {
        nomeprodotto=nomeprodotto.replaceAll("\"","");
        Utente u=(Utente)req.getSession().getAttribute("utente");
        DatabaseJDBC.getInstance().getCarrelloDao().eliminaArticolo(u.getEmail(),nomeprodotto);
    }

}
