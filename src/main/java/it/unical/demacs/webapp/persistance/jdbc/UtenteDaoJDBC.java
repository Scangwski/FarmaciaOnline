package it.unical.demacs.webapp.persistance.jdbc;

import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.UtenteDao;
import org.springframework.security.crypto.bcrypt.BCrypt;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class UtenteDaoJDBC implements UtenteDao {
    Connection connection;
    public UtenteDaoJDBC(Connection connection){this.connection=connection;}


    @Override
    public boolean Register(Utente utente) throws SQLException
    {
        if(connection==null || connection.isClosed())
            return false;

        PreparedStatement p=connection.prepareStatement("INSERT INTO utente VALUES(?,?,?,?,?,?);");
        p.setString(1,utente.getNome());
        p.setString(2,utente.getCognome());
        p.setString(3,utente.getEmail());
        p.setString(4,BCrypt.hashpw(utente.getPassword(), BCrypt.gensalt(12)));
        p.setString(5,utente.getTipoUtente());
        p.setBoolean(6,false);
        p.executeUpdate();
        return true;
    }



    @Override
    public boolean update(String emailUtente, ArrayList<String> data) throws SQLException
    {
        if(connection.isClosed() || connection==null)
            return false;


        PreparedStatement p=connection.prepareStatement("SELECT* FROM utente WHERE email=?");
        p.setString(1,emailUtente);
        ResultSet r=p.executeQuery();
        r.next();
        p=connection.prepareStatement("UPDATE utente SET password=?,nome=?,cognome=? WHERE email=?");
        p.setString(4,emailUtente);

        p.setString(1,BCrypt.hashpw(data.get(0), BCrypt.gensalt(12)));
        p.setString(2,data.get(1));
        p.setString(3,data.get(2));

        if(data.get(0).equals(""))
        {
            p.setString(1,r.getString("password"));
        }
        if(data.get(1).equals(""))
        {
            p.setString(2,r.getString("nome"));
        }
        if(data.get(2).equals(""))
        {
            p.setString(3,r.getString("cognome"));
        }
        p.executeUpdate();

        return true;
    }

    @Override
    public Utente Login(String email, String password) throws SQLException
    {
        PreparedStatement p=connection.prepareStatement("SELECT* from utente WHERE email=?");
        p.setString(1,email);
        ResultSet r=p.executeQuery();
        boolean result;
        Utente utente;
        if(r.next())
        {
            String pass = r.getString("password");
            result = BCrypt.checkpw(password, pass);
            if(result)
            {
                utente=new Utente(r.getString("nome"),r.getString("cognome"),r.getString("email"),r.getString("password"),r.getString("tipoutente"),r.getBoolean("bannato"));
                return utente;
            }
        }
        p.close();

        return null;
    }



    @Override
    public boolean bannaUtente(String email) throws SQLException
    {
        if(connection.isClosed() || connection==null)
            return false;

        PreparedStatement p=connection.prepareStatement("UPDATE utente SET bannato=? WHERE email=?");
        p.setBoolean(1,true);
        p.setString(2,email);
        System.out.println(email);
        p.executeUpdate();
        return true;
    }

    @Override
    public boolean CheckByEmail(String email) throws SQLException
    {
        PreparedStatement p=connection.prepareStatement("SELECT* FROM utente WHERE email=?");
        p.setString(1,email);
        ResultSet r=p.executeQuery();
        return r.next();
    }


}
