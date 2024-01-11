package it.unical.demacs.webapp.persistance;

import it.unical.demacs.webapp.model.Carrello;
import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;

import java.sql.SQLException;
import java.util.ArrayList;

public interface CarrelloDao {
    public boolean inserisciNelCarrello(Utente utente, Prodotto prodotto) throws SQLException;
    public ArrayList<Carrello> prelevaCarrello(Utente utente)throws  SQLException;
    public void eliminaArticolo(Utente utente, Prodotto prodotto) throws  SQLException;
}

