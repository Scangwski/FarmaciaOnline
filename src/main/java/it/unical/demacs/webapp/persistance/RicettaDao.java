package it.unical.demacs.webapp.persistance;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;

import java.sql.SQLException;

public interface RicettaDao {

    public boolean inserisciRicetta(Utente utente,Prodotto prodotto, String nomeMedico) throws SQLException;
}
