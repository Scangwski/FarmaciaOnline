package it.unical.demacs.webapp.persistance.jdbc;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.OffertaDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class OffertaDaoJDBC implements OffertaDao {

    Connection connection;
    public OffertaDaoJDBC(Connection connection){this.connection=connection;}
    @Override
    public boolean inserisciOfferta(Utente utente, Prodotto prodotto, Double prezzoOfferta) throws SQLException {

        if(connection.isClosed() || connection==null)
            return false;
        if(utente.getTipoUtente()=="Farmacista") {
            PreparedStatement p = connection.prepareStatement("INSERT into offerta VALUES (?,?,?)");
            p.setString(1, prodotto.getNome());
            p.setDouble(2, prodotto.getPrezzo());
            p.setDouble(3, prezzoOfferta);
            p.executeUpdate();
            return true;
        }
        return false;
    }

    @Override
    public boolean rimuoviOfferta(Utente utente,Prodotto prodotto) throws SQLException {
        if(connection.isClosed() ||connection==null)
            return false;

        if(utente.getTipoUtente()=="Farmacista") {
            PreparedStatement p = connection.prepareStatement("DELETE FROM offerta WHERE nomeprodotto=?");
            p.setString(1, prodotto.getNome());
            p.executeUpdate();
            return true;
        }
        return false;
    }
}
