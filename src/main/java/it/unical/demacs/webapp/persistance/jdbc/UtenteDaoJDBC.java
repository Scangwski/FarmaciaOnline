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
        p.setString(1,utente.getNomeUtente());
        p.setString(2, utente.getNome());
        p.setString(3,utente.getCognome());
        p.setString(4,utente.getEmail());
        p.setString(5,BCrypt.hashpw(utente.getPassword(), BCrypt.gensalt(12)));
        p.setString(6, utente.getTipoUtente());
        p.executeUpdate();
        return true;
    }

    @Override
    public boolean update(Utente utente, ArrayList<String> data) throws SQLException
    {
        if(connection.isClosed() || connection==null)
            return false;


        PreparedStatement p=connection.prepareStatement("SELECT* FROM utente WHERE email=?");
        p.setString(1, utente.getEmail());;
        ResultSet r=p.executeQuery();
        r.next();
        p=connection.prepareStatement("UPDATE utente SET password=?,nome=?,cognome=? WHERE email=?");
        p.setString(4, utente.getEmail());

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
    public Utente Login(Utente utente) throws SQLException
    {
        PreparedStatement p=connection.prepareStatement("SELECT* from utente WHERE email=?");
        p.setString(1, utente.getEmail());
        ResultSet r=p.executeQuery();
        boolean result;
        if(r.next())
        {
            String pass = r.getString("password");
            result = BCrypt.checkpw(utente.getPassword(), pass);
            if(result)
            {
                utente=new Utente(r.getString("nomeUtente"),r.getString("nome"),r.getString("cognome"),r.getString("email"),null,r.getString("tipoUtente"));
                return utente;
            }
        }
        p.close();

        return null;
    }

    @Override
    public boolean CheckByEmail(Utente utente) throws SQLException
    {
        PreparedStatement p=connection.prepareStatement("SELECT* FROM utente WHERE email=?");
        p.setString(1, utente.getEmail());
        ResultSet r=p.executeQuery();
        return r.next();
    }

    @Override
    public boolean bannaUtente(Utente utenteAdmin,Utente utenteDaBannare) throws SQLException
    {
        if(connection.isClosed() || connection==null)
            return false;

        if(utenteAdmin.getTipoUtente()=="admin") {
            PreparedStatement p = connection.prepareStatement("UPDATE utente SET bannato=? WHERE email=?");
            p.setBoolean(1, true);
            p.setString(2, utenteDaBannare.getEmail());
            System.out.println(utenteDaBannare.getEmail());
            p.executeUpdate();
            return true;
        }
        return false;
    }

}
