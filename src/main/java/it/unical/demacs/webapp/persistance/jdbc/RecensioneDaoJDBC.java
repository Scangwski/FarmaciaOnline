package it.unical.demacs.webapp.persistance.jdbc;

import it.unical.demacs.webapp.persistance.RecensioneDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class RecensioneDaoJDBC implements RecensioneDao {
    Connection connection;
    public RecensioneDaoJDBC(Connection connection){this.connection=connection;}


    @Override
    public boolean inserisciRecensione(String nomeutente, String nomeprodotto, String descrizione, Integer valutazione) throws SQLException {

        if(connection.isClosed() || connection==null)
            return false;

        PreparedStatement p = connection.prepareStatement("INSERT into recensione VALUES (?,?,?,?)");
        p.setString(1,nomeutente);
        p.setString(2,nomeprodotto);
        p.setString(3,descrizione);
        p.setInt(4, valutazione);
        p.executeUpdate();
        return true;
    }
}
