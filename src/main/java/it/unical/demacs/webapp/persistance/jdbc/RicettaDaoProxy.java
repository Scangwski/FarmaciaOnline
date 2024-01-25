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
    Connection connection;
    public RicettaDaoProxy(Connection connection){this.connection=connection;}
    private RicettaDao ricettaDao;

    @Override
    public boolean inserisciRicetta(String emailutente,String codiceRicetta) throws SQLException {
        if (ricettaDao == null) {
            synchronized (this) {
                if (ricettaDao == null) {
                    ricettaDao = new RicettaDaoJDBC(DatabaseJDBC.getInstance().getConnection());
                }
            }
        }
       if(isValidFormat(codiceRicetta) && !codiceGiaPresente(emailutente,codiceRicetta)){
           return ricettaDao.inserisciRicetta(emailutente,codiceRicetta);
       }
        return false;
    }

    @Override
    public boolean codiceGiaPresente(String emailutente,String codiceRicetta) throws SQLException {
        if (ricettaDao == null) {
            synchronized (this) {
                if (ricettaDao == null) {
                    ricettaDao = new RicettaDaoJDBC(DatabaseJDBC.getInstance().getConnection());
                }
            }
        }
        PreparedStatement preparedStatement = connection.prepareStatement("SELECT COUNT(*) FROM ricetta WHERE codicericetta = ? AND emailutente=?");
        preparedStatement.setString(1, codiceRicetta);
        preparedStatement.setString(2,emailutente);

        try (ResultSet resultSet = preparedStatement.executeQuery()) {
            if (resultSet.next()) {
                int count = resultSet.getInt(1);

                if(count>0){
                    return true;
                }
            }
        }
        return ricettaDao.codiceGiaPresente(emailutente,codiceRicetta);
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
