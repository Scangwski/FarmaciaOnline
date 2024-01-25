package it.unical.demacs.webapp.persistance;

import it.unical.demacs.webapp.model.Utente;

import java.sql.SQLException;
import java.util.ArrayList;

public interface UtenteDao {

    public boolean Register(Utente utente) throws SQLException;
    public boolean update(String emailUtente, ArrayList<String> data) throws SQLException;
    public Utente Login(String email,String password) throws SQLException;
    public boolean CheckByEmail(String email)throws SQLException;
    public boolean CheckByGoogleId(String id) throws SQLException;
    public Utente GoogleLogin(String id) throws SQLException;

    public boolean bannaUtente(String email)throws SQLException;

    public boolean promuoviAdAmministratore(String emailUtente) throws SQLException;
}
