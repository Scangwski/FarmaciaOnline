package it.unical.demacs.webapp.persistance;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;

import java.sql.SQLException;

public interface OffertaDao {

    public boolean inserisciOfferta(Utente utente, Prodotto prodotto, Double prezzoOfferta) throws SQLException;
    public boolean rimuoviOfferta(Utente utente, Prodotto prodotto) throws SQLException;
}
