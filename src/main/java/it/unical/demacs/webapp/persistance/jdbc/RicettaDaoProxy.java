package it.unical.demacs.webapp.persistance.jdbc;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.RicettaDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RicettaDaoProxy implements RicettaDao {
    private static RicettaDao ricettaDao;

    @Override
    public boolean inserisciRicetta(String emailutente, String codiceRicetta) throws SQLException {
        if (ricettaDao == null) {
            synchronized (this) {
                if (ricettaDao == null) {
                    ricettaDao = new RicettaDaoJDBC(DatabaseJDBC.getInstance().getConnection());
                }
            }
        }
        if (isValidFormat(codiceRicetta) && !codiceGiaPresente(emailutente, codiceRicetta)) {
            return ricettaDao.inserisciRicetta(emailutente, codiceRicetta);
        }
        return false;
    }

    @Override
    public boolean codiceGiaPresente(String emailutente, String codiceRicetta) throws SQLException {
        return ricettaDao.codiceGiaPresente(emailutente,codiceRicetta);
    }

    @Override
    public boolean isValidFormat(String codiceRicetta) {
       return ricettaDao.isValidFormat(codiceRicetta);
    }


}
