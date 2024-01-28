package it.unical.demacs.webapp.persistance.jdbc;

import it.unical.demacs.webapp.model.Recensione;
import it.unical.demacs.webapp.persistance.RecensioneDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

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

    @Override
    public List<Recensione> getRecensioni(String nomeprodotto) throws SQLException {
        List<Recensione> recensioni = new ArrayList<>();

        if(connection.isClosed() || connection == null) {
            throw new SQLException("Connessione al database non disponibile.");
        }

        String sql = "SELECT nomeutente, descrizione, valutazione FROM recensione WHERE nomeprodotto = ?";
        try (PreparedStatement p = connection.prepareStatement(sql)) {
            p.setString(1, nomeprodotto);
            try (ResultSet rs = p.executeQuery()) {
                while (rs.next()) {
                    // Assumendo che hai una classe Recensione con un costruttore adeguato
                    Recensione recensione = new Recensione(
                            rs.getString("nomeutente"),
                            nomeprodotto, // poiché il nome del prodotto è lo stesso per tutte le righe
                            rs.getString("descrizione"),
                            rs.getInt("valutazione")
                    );
                    recensioni.add(recensione);
                }
            }
        }
        return recensioni;
    }
}
