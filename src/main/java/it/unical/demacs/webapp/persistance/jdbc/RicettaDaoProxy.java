package it.unical.demacs.webapp.persistance.jdbc;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.RicettaDao;

import java.sql.SQLException;

public class RicettaDaoProxy implements RicettaDao {
    private RicettaDaoJDBC ricetta = new RicettaDaoJDBC(DatabaseJDBC.getInstance().getConnection());

    @Override
    public boolean inserisciRicetta(String codiceRicetta) throws SQLException {
       if(codiceRicetta.length()==8 && ricetta.codiceGiaPresente(codiceRicetta)==false){
           ricetta.inserisciRicetta(codiceRicetta);
       }
        return false;
    }

    @Override
    public boolean codiceGiaPresente(String codiceRicetta) throws SQLException {
        return false;
    }
}
