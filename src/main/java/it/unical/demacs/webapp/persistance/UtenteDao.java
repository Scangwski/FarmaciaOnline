package it.unical.demacs.webapp.persistance;

import it.unical.demacs.webapp.model.Utente;

import java.sql.SQLException;
import java.util.ArrayList;

public interface UtenteDao {

    public boolean Register(Utente utente) throws SQLException;
    public boolean update(Utente utente, ArrayList<String> data) throws SQLException;
    public Utente Login(Utente utente) throws SQLException;
    public boolean CheckByEmail(Utente utente)throws SQLException;
    public boolean bannaUtente(Utente utenteAdmin,Utente utenteDaBannare)throws SQLException;

}
