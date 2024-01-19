package it.unical.demacs.webapp.persistance.jdbc;

import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.RecensioneDao;

import java.sql.Connection;
import java.sql.SQLException;

public class RecensioneDaoProxy implements RecensioneDao {
    private final RecensioneDao realRecensioneDao;

    public Connection connection;

    public RecensioneDaoProxy(Connection connection) {
        this.realRecensioneDao = new RecensioneDaoJDBC(connection);
    }

    @Override
    public boolean aggiungiRecensione(Utente utente, Prodotto prodotto, String titolo, String descrizione) throws SQLException {
        int lunghezzaMassimaTitolo = 255;
        int lunghezzaMassimaDescrizione = 1000;

        if (connection == null || connection.isClosed()) {
            return false;
        }

        if (utente == null || prodotto == null || titolo == null || descrizione == null) {
            return false;
        }


        if (titolo.length() > lunghezzaMassimaTitolo || descrizione.length() > lunghezzaMassimaDescrizione) {
            return false;
        }


        return realRecensioneDao.aggiungiRecensione(utente,prodotto,titolo,descrizione);
    }
}
