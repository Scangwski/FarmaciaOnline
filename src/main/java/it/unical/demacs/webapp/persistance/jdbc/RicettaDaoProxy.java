package it.unical.demacs.webapp.persistance.jdbc;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.RicettaDao;

import java.sql.SQLException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RicettaDaoProxy implements RicettaDao {
    private RicettaDao ricettaDao;

    @Override
    public boolean inserisciRicetta(String codiceRicetta) throws SQLException {
        if (ricettaDao == null) {
            synchronized (this) {
                if (ricettaDao == null) {
                    ricettaDao = new RicettaDaoJDBC(DatabaseJDBC.getInstance().getConnection());
                }
            }
        }
       if(!isValidFormat(codiceRicetta) && !ricettaDao.codiceGiaPresente(codiceRicetta)){
           return ricettaDao.inserisciRicetta(codiceRicetta);
       }
        return false;
    }

    @Override
    public boolean codiceGiaPresente(String codiceRicetta) throws SQLException {
        if (ricettaDao == null) {
            synchronized (this) {
                if (ricettaDao == null) {
                    ricettaDao = new RicettaDaoJDBC(DatabaseJDBC.getInstance().getConnection());
                }
            }
        }
        return ricettaDao.codiceGiaPresente(codiceRicetta);
    }

    @Override
    public boolean isValidFormat(String codiceRicetta) {
        if (ricettaDao == null) {
            synchronized (this) {
                if (ricettaDao == null) {
                    ricettaDao = new RicettaDaoJDBC(DatabaseJDBC.getInstance().getConnection());
                }
            }
        }
        String regex = "^[a-zA-Z]{2}\\d{3}[a-zA-Z]{2}$";
        return codiceRicetta.matches(regex);
    }
}
