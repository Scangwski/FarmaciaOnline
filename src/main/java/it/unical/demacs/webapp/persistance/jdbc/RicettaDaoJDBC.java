package it.unical.demacs.webapp.persistance.jdbc;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.RicettaDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class RicettaDaoJDBC implements RicettaDao {
    Connection connection;
    public RicettaDaoJDBC(Connection connection){this.connection=connection;}
    @Override
    public boolean inserisciRicetta(Utente utente, Prodotto prodotto,String nomeMedico) throws SQLException {

        if(connection.isClosed() || connection==null)
            return false;

        PreparedStatement p = connection.prepareStatement("INSERT into ricetta VALUES (?,?,?)");
        p.setString(1,nomeMedico);
        p.setString(2,utente.getNomeUtente());
        p.setString(3, prodotto.getId());
        p.executeUpdate();
        return true;
    }
}
