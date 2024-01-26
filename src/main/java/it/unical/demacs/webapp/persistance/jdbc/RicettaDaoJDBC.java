package it.unical.demacs.webapp.persistance.jdbc;

import it.unical.demacs.webapp.persistance.RicettaDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class RicettaDaoJDBC implements RicettaDao {
    Connection connection;
    public RicettaDaoJDBC(Connection connection){this.connection=connection;}
    @Override
    public boolean inserisciRicetta(String emailutente,String codiceRicetta) throws SQLException {

        if(connection.isClosed() || connection==null)
            return false;

        if(isValidFormat(codiceRicetta) && !codiceGiaPresente(emailutente,codiceRicetta)) {

            PreparedStatement p = connection.prepareStatement("INSERT into ricetta VALUES (?,?)");
            p.setString(1, emailutente);
            p.setString(2, codiceRicetta);
            p.executeUpdate();
            return true;
        }
        return true;
    }

    @Override
    public boolean codiceGiaPresente(String emailutente,String codiceRicetta) throws SQLException {
        PreparedStatement preparedStatement = connection.prepareStatement("SELECT COUNT(*) FROM ricetta WHERE codicericetta = ? AND emailutente=?");
        preparedStatement.setString(1, emailutente);
        preparedStatement.setString(2,codiceRicetta);

        try (ResultSet resultSet = preparedStatement.executeQuery()) {
            if (resultSet.next()) {
                int count = resultSet.getInt(1);
                return count > 0;
            }
        }
        return false;
    }
   @Override
   public boolean isValidFormat(String codiceRicetta) {
       String regex = "^[a-zA-Z]{2}\\d{3}[a-zA-Z]{2}$";
       return codiceRicetta.matches(regex);
    }
}
