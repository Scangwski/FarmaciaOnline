package it.unical.demacs.webapp.persistance;

import it.unical.demacs.webapp.model.Carrello;

import java.sql.SQLException;
import java.util.ArrayList;

public interface CarrelloDao {
    public boolean inserisciNelCarrello(String email,String nomeProdotto) throws SQLException;
    public ArrayList<Carrello> prelevaCarrello(String emailUtente)throws  SQLException;
    public void svuotaCarrello(String emailUtente)throws SQLException;
    public void eliminaArticolo(String nomeProdotto,String emailUtente) throws  SQLException;
}

