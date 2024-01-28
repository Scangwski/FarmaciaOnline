package it.unical.demacs.webapp.persistance;

import org.springframework.stereotype.Repository;

import java.sql.SQLException;
@Repository
public interface RecensioneDao {


    boolean inserisciRecensione(String utente, String prodotto, String descrizione, Integer valutazione) throws SQLException;
}
