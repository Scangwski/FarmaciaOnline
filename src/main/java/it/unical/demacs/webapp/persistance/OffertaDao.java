package it.unical.demacs.webapp.persistance;

import it.unical.demacs.webapp.model.Prodotto;

import java.sql.SQLException;

public interface OffertaDao {

    public boolean inserisciOfferta(Prodotto prodotto, Double prezzoOfferta) throws SQLException;
    public boolean rimuoviOfferta(Prodotto prodotto) throws SQLException;
}
