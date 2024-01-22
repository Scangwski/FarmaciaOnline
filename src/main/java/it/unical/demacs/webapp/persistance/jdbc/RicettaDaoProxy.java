package it.unical.demacs.webapp.persistance.jdbc;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.RicettaDao;

import java.sql.SQLException;

public class RicettaDaoProxy implements RicettaDao {
    private RicettaDaoJDBC ricetta = new RicettaDaoJDBC(DatabaseJDBC.getInstance().getConnection());

    @Override
    public boolean inserisciRicetta(Utente utente, Prodotto prodotto, String nomeMedico) throws SQLException {
       if(prodotto.getId().length()==8){
           ricetta.inserisciRicetta(utente,prodotto,nomeMedico);
       }
        return false;
    }
}
