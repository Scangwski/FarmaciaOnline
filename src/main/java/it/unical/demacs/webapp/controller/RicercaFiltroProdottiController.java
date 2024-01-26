package it.unical.demacs.webapp.controller;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.persistance.jdbc.DatabaseJDBC;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.ArrayList;

@RestController
public class RicercaFiltroProdottiController {

    @PostMapping("/ricerca")
    public ResponseEntity<ArrayList<Prodotto>> ricercaPerFiltro(HttpServletResponse res, @RequestParam String filtro, @RequestParam String ordinamento) throws SQLException {
        try{
            ArrayList<Prodotto> prodotti = DatabaseJDBC.getInstance().getProdottoDao().ricercaProdotti(filtro, ordinamento);
            return new ResponseEntity<>(prodotti, HttpStatus.OK);
        }
        catch (SQLException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.SERVICE_UNAVAILABLE);
        }
    }

}
