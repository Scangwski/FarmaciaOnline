package it.unical.demacs.webapp.persistance.jdbc;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.RecensioneDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class RecensioneDaoJDBC implements RecensioneDao {
    Connection connection;
    public RecensioneDaoJDBC(Connection connection){this.connection=connection;}
    @Override
    public boolean aggiungiRecensione(Utente utente, Prodotto prodotto, String descrizione, Integer valutazione) throws SQLException {

        if(connection.isClosed() || connection==null)
            return false;

        PreparedStatement p = connection.prepareStatement("INSERT into recensione VALUES (?,?,?,?)");
        p.setString(1,utente.getEmail());
        p.setString(2,prodotto.getNome());
        p.setString(3,descrizione);
        p.setInt(4, valutazione);
        p.executeUpdate();
        return true;
    }
}
