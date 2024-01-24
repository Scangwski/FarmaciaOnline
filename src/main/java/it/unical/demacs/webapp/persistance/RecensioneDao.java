package it.unical.demacs.webapp.persistance;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;

import java.sql.SQLException;

public interface RecensioneDao {

    public boolean aggiungiRecensione(Utente utente, Prodotto prodotto, String descrizione , Integer valutazione) throws SQLException;
}
