package it.unical.demacs.webapp.persistance;

import it.unical.demacs.webapp.model.Recensione;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;

@Repository
public interface RecensioneDao {


    boolean inserisciRecensione(String utente, String prodotto, String descrizione, Integer valutazione) throws SQLException;

    List<Recensione> getRecensioni(String nomeprodotto) throws SQLException;

    void svuotaCarrello(String emailUtente) throws SQLException;
}
