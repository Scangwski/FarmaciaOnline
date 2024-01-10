package it.unical.demacs.webapp.persistance;

import it.unical.demacs.webapp.model.Prodotto;

import java.sql.SQLException;
import java.util.ArrayList;

public interface ProdottoDao {
    public boolean aggiungiProdotto(Prodotto prodotto) throws SQLException;
    public ArrayList<Prodotto> recuperaProdotti() throws SQLException;
    public Prodotto caricaProdotto(Prodotto prodotto) throws SQLException;
}
