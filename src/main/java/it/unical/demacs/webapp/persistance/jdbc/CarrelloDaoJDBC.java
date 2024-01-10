package it.unical.demacs.webapp.persistance.jdbc;

import it.unical.demacs.webapp.model.Carrello;
import it.unical.demacs.webapp.model.Prodotto;
import it.unical.demacs.webapp.model.Utente;
import it.unical.demacs.webapp.persistance.CarrelloDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class CarrelloDaoJDBC implements CarrelloDao {
    Connection connection;
    public CarrelloDaoJDBC(Connection connection){this.connection=connection;}
    @Override
    public boolean inserisciNelCarrello(Utente utente, Prodotto prodotto) throws SQLException
    {
        if(connection.isClosed() || connection==null)
            return false;

        PreparedStatement p=connection.prepareStatement("SELECT* FROM carrello where emailutente=? AND nomeprodotto=?");
        p.setString(1,utente.getEmail());
        p.setString(2,prodotto.getNome());
        ResultSet r=p.executeQuery();

        if(r.next())
        {
            int q=r.getInt("quantita");
            ++q;

            p=connection.prepareStatement("UPDATE carrello SET quantita=? WHERE emailutente=? AND nomeprodotto=?");
            p.setInt(1,q);
            p.setString(2,utente.getEmail());
            p.setString(3,prodotto.getNome());
            p.executeUpdate();
            return true;
        }


        p=connection.prepareStatement("INSERT INTO carrello VALUES(?,DEFAULT,?)");
        p.setString(1,utente.getEmail());
        p.setString(2, prodotto.getNome());
        p.executeUpdate();

        return true;
    }

    @Override
    public ArrayList<Carrello> prelevaCarrello(Utente utente) throws SQLException
    {
        PreparedStatement p=connection.prepareStatement("SELECT* FROM carrello WHERE emailutente=?");
        p.setString(1, utente.getEmail());
        ResultSet r=p.executeQuery();

        ArrayList<Carrello> contenuto=new ArrayList<>();

        while(r.next())
            contenuto.add(new Carrello(r.getString("nomeprodotto"),r.getString("emailUtente"),r.getInt("quantita"),r.getDouble("prezzoTotale")));

        return contenuto;

    }

    @Override
    public void svuotaCarrello(Utente utente) throws SQLException
    {
        PreparedStatement p=connection.prepareStatement("SELECT* FROM carrello WHERE emailutente=?");
        p.setString(1,utente.getEmail());
        ResultSet r=p.executeQuery();
        while(r.next())
        {
            PreparedStatement p1=connection.prepareStatement("SELECT* FROM prodotto where nome=?");
            p1.setString(1,r.getString("nomeprodotto"));
            ResultSet r1=p1.executeQuery();
            r1.next();
            PreparedStatement p2=connection.prepareStatement("UPDATE prodotto SET disponibilità=? where nome=?");
            p2.setInt(1,r1.getInt("disponibilità")-r.getInt("quantita"));
            p2.setString(2,r.getString("nomeprodotto"));
            p2.executeUpdate();
        }
        p=connection.prepareStatement("DELETE FROM carrello where emailUtente=?");
        p.setString(1,utente.getEmail());
        p.executeUpdate();
    }

    @Override
    public void eliminaArticolo(Utente utente, Prodotto prodotto) throws SQLException
    {
        PreparedStatement p=connection.prepareStatement("DELETE FROM carrello WHERE emailUtente=? AND nomeprodotto=?");
        p.setString(1,utente.getEmail());
        p.setString(2, prodotto.getNome());
        p.executeUpdate();
    }
}
