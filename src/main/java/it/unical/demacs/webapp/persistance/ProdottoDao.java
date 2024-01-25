package it.unical.demacs.webapp.persistance;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;

import java.sql.SQLException;
import java.util.ArrayList;

public interface ProdottoDao {
    public boolean aggiungiProdotto(Utente utente,Prodotto prodotto) throws SQLException;
    public ArrayList<Prodotto> recuperaProdotti() throws SQLException;
    public Prodotto caricaProdotto(Utente utente,Prodotto prodotto) throws SQLException;

    public boolean rimuoviProdotto(Utente utente, Prodotto prodotto) throws SQLException;
}
