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
    public boolean inserisciNelCarrello(String emailUtente, String nomeProdotto) throws SQLException
    {
        if(connection.isClosed() || connection==null)
            return false;

        PreparedStatement p=connection.prepareStatement("SELECT* FROM carrello where emailutente=? AND prodotti=?");
        p.setString(1,emailUtente);
        p.setString(2,nomeProdotto);
        ResultSet r=p.executeQuery();

        if(r.next())
        {
            int q=r.getInt("quantita");
            ++q;

            p=connection.prepareStatement("UPDATE carrello SET quantita=? WHERE emailutente=? AND prodotti=?");
            p.setInt(1,q);
            p.setString(2,emailUtente);
            p.setString(3,nomeProdotto);
            p.executeUpdate();
            return true;
        }

        if(r.next())
        {
            double q=r.getDouble("prezzototale");
            q++;

            p=connection.prepareStatement("UPDATE carrello SET prezzototale=? WHERE emailutente=? AND prodotti=?");
            p.setDouble(1,q);
            p.setString(2,emailUtente);
            p.setString(3,nomeProdotto);
            p.executeUpdate();
            return true;
        }


        p=connection.prepareStatement("INSERT INTO carrello VALUES(?,?,?,?)");
        p.setString(1,nomeProdotto);
        p.setString(2,emailUtente);
        p.setInt(3,1);
        p.setDouble(4,10);

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
            contenuto.add(new Carrello(r.getString("prodotti"),r.getString("emailUtente"),r.getInt("quantita"),r.getDouble("prezzoTotale")));

        return contenuto;

    }


    @Override
    public void eliminaArticolo(String email, String prodotto) throws SQLException
    {
        PreparedStatement p=connection.prepareStatement("DELETE FROM carrello WHERE emailUtente=? AND prodotti=?");
        p.setString(1,email);
        p.setString(2, prodotto);
        p.executeUpdate();
    }
}
