package it.unical.demacs.webapp.persistance;

import it.unical.demacs.webapp.model.Prodotto;

import java.sql.SQLException;

public interface RicettaDao {

    public boolean inserisciRicetta(Prodotto prodotto) throws SQLException;
}
