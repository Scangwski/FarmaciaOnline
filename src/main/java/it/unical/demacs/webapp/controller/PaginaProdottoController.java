package it.unical.demacs.webapp.controller;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Recensione;
import it.unical.demacs.webapp.model.Ricetta;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.RecensioneDao;
import it.unical.demacs.webapp.persistance.RicettaDao;
import it.unical.demacs.webapp.persistance.jdbc.DatabaseJDBC;
import it.unical.demacs.webapp.persistance.jdbc.RicettaDaoJDBC;
import it.unical.demacs.webapp.persistance.jdbc.RicettaDaoProxy;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import static jakarta.servlet.http.HttpServletResponse.SC_OK;
import static jakarta.servlet.http.HttpServletResponse.SC_SERVICE_UNAVAILABLE;

@RestController
public final class PaginaProdottoController {


    @PostMapping("/inserisciRicetta")
    public void inserisciRicetta(HttpServletRequest req,HttpServletResponse res, @RequestBody String s) throws SQLException
    {
        HttpSession session = req.getSession(false);
        Utente u = (Utente) session.getAttribute("utente");
        if (u == null) {
            System.out.println("Utente non loggato");
            res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }
        System.out.println("Utente recuperato: " + u.getEmail());

        RicettaDaoProxy ricetta = new RicettaDaoProxy();

        if(ricetta.inserisciRicetta(u.getEmail(),s))
            res.setStatus(SC_OK);
        else
            res.setStatus(SC_SERVICE_UNAVAILABLE);
    }

    @PostMapping("/caricaProdotto")
    public Prodotto caricaProdotto(HttpServletResponse res,HttpServletRequest req, @RequestBody String nomeProdotto) throws SQLException{
        HttpSession session = req.getSession(false);
        Utente u = (Utente) session.getAttribute("utente");
        nomeProdotto=nomeProdotto.replaceAll("\"","");
        Prodotto p=DatabaseJDBC.getInstance().getProdottoDao().caricaProdotto(nomeProdotto);
        if(p!=null)
            res.setStatus(HttpServletResponse.SC_OK);
        else
            res.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);

        return p;

    }

    @PostMapping("/inserisciRecensione")
    public void inserisciRecensione(HttpServletRequest req, HttpServletResponse res,
                                    @RequestParam("nomeprodotto") String nomeprodotto,
                                    @RequestParam("descrizione") String descrizione,
                                    @RequestParam("valutazione") Integer valutazione) throws SQLException {

        HttpSession session = req.getSession(false);
        Utente u = (Utente) session.getAttribute("utente");


        if (u == null ) {
            System.out.println("Utente non loggato o prodotto non selezionato");
            res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }
        System.out.println("Utente recuperato: " + u.getEmail());
        String nomeutente = u.getNome();

        boolean result = DatabaseJDBC.getInstance().getRecensioneDao().inserisciRecensione(nomeutente, nomeprodotto, descrizione, valutazione);
        if (result)
            res.setStatus(HttpServletResponse.SC_OK);

        else
            res.setStatus(HttpServletResponse.SC_SERVICE_UNAVAILABLE);
    }

    @GetMapping("/recensioni")
    public ResponseEntity<List<Recensione>> getRecensioniPerProdotto(@RequestParam String nomeprodotto) {
        try {
            List<Recensione> recensioni = DatabaseJDBC.getInstance().getRecensioneDao().getRecensioni(nomeprodotto);
            return ResponseEntity.ok(recensioni);
        } catch (SQLException e) {
            e.printStackTrace();
            // Restituisce un Internal Server Error se qualcosa va storto
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }





}

